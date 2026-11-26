# Round 1 · editor notes

Gate: `pnpm check` (191 tests), `pnpm examples` (no overflow failures), `pnpm sheets`; every
changed sheet looked at. Reviewer files were read through the summary; I fixed from its
deduplicated list.

**Contract note.** The summary says the orchestrator changed `src/types.ts` (item 1 and 4), but
the working tree had no `live` post type and no `Person.about`. I made exactly those two changes
(`PostType`/`POST_TYPES` get `live`, after `reminder`; `Person.about?: string`) plus the schema,
gallery label and template registry, since the task allowed those files. Nothing else in
`types.ts` moved. If the orchestrator has its own version, take theirs; mine is mechanical.

## Patterns

| # | Issue | What changed |
| --- | --- | --- |
| 1 | reminder says live and later | New `live` post type: `templates/live.ts`, captions on all three platforms, gallery label "Live". `templates/reminder.ts` no longer says live: tag "Hari ini", big "NANTI / JAM 19.30 WIB", full date in a small line, join block says "Masuk", not "Masuk sekarang ke". Shared title-under-state logic moved to `templates/state.ts`. Caption before → after, GitOps IG: `Hari ini, 19.30 WIB. GitOps dengan Argo CD … Kalau sudah mulai, nyusul aja.` → `Sab, 19 Des, nanti jam 19.30 WIB. Buka Discord sepuluh menit lebih awal buat cek suara.`; live: `GitOps dengan Argo CD lagi jalan sekarang.` Test: a reminder never matches live/sekarang, a live post never matches nanti/hari ini. |
| 2 | cover has no schedule or channel | Standalone cover: the quiet line is now `Sab, 19 Des · 19.30–21.00 WIB · voice channel sig-cn-voice` (was `Voice channel · Discord · dengerin aja boleh`), in the foreground colour and 28 px on tall formats. Carousel/doc slide 1 got the same line. |
| 3 | same script in every post type | `lead` (host note) is now used only by announce; test asserts no other post type contains the note or its first sentence. Cover = series + theme + subtitle; reminder = title + one practical detail; live = present tense + first sentence of the description; speakers = `about` lines; sig-intro unchanged. Posters: announce slide 1 lost "Terbuka: Dengerin aja boleh" (now "Durasi: 90 menit"); cover slide 2 is "Soal seri ini" with the description only (no topic list); sig-intro slide 3 no longer repeats the topic list; speaker slides quote `about`, not the host note. |
| 4 | no reason to listen to speakers | `Person.about` (schema, `README.md`), filled for every sample person. Speakers captions are one paragraph per person (`Dani (contoh), SRE. Cerita kenapa …`), no separate roster list. Posters: `.spot__about` line on cards (not at 4+ people or on the 3-wide landscape card, where it would drop below 18 px) and as the quote on each person slide. |
| 5 | nothing to reply to | Speakers: the question lives in each person's `about` (Dani: "siapa di sini yang masih kubectl apply ke prod?"). Recap: `recapPrompt` builds one question from one of the session's own points; the point and wording are picked per session (`Poin 3 ("Pisahkan repo manifest …"), cocok nggak sama yang kamu temui di kerjaan?`). Not added to announce, reminder, live or cover. |
| 6 | X drops the hook | X announce: the note leads when it fits, else the first sentence of the description (`Bayangkan deploy cukup dengan merge pull request, dan cluster otomatis ikut isi repo Git.`), then title, date and join. Observability and FORA samples got a `note`, so their X announce leads with a situation too. |
| 7 | X recap = label + table of contents | "Intinya:" and the list of titles are gone. Thread is head, one point explained with its body, then a prompt + next session + invite. |
| 8 | jargon | Sample copy: GitOps description opens with what changes ("deploy cukup dengan merge pull request") and says Git basics are enough; Kubernetes ties Pod/Deployment to the kill-a-Pod experiment and says only "container" is assumed, topics renamed to match; Observability explains logs, metrics, traces and Prometheus/OpenTelemetry on first mention and keeps the slow app. |
| 9 | FORA copy generic | Sample recap rewritten around things said in the room (a repo that carried an interview, shadowing on-call, a postmortem as Terraform lessons). New host note, a concrete `about`, a sharper description; `sigs/fora.yaml` description names what FORA sessions are. |
| 10 | observability recap rhythm | Points no longer all "X menjawab…": `Log yang terstruktur bisa dicari`, `Metrics itu angka murah yang tahan lama`, `Trace menunjuk service mana yang menghabiskan waktu`, and the first ties to the slow app (`duration_ms`). |
| 11 | git revert overstated | `Rollback config cukup dengan git revert … Batasnya, migrasi database tidak ikut mundur, jadi itu dipikirkan terpisah.` Subtitle says "rollback config". |

## Disagreements

- "Dengerin aja boleh": kept, once per post. Removed from the cover line and the announce
  slide 1; the join block (single images) or join slide (decks) carries it. Captions say it
  once per platform, as before.
- Reminder "what to bring" needs session data we do not have. I used one practical detail per
  caption (headset, open Discord early, a question about the theme) and a three-line
  "Siapkan sebelum 19.30 WIB" poster slide; the theme is the only session-specific word.
  Orchestrator: say if you want a `bring` field in the contract instead.
- The speakers feed post with three people shows `about` at 24 px, the minimum in
  `brand/README.md`; it is small. A fourth person would drop it. I preferred keeping it to
  hiding it, since reviewers asked for exactly this line.
- `style.ts`: no new check. The new tells (same hook everywhere, same prompt everywhere) are
  about cross-post repetition, which a per-string pattern cannot catch; covered by tests that
  compare post types instead. Added the rule to `docs/voice.md` (now rule 5).
