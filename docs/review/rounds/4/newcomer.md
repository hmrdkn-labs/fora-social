# Round 4 — newcomer

## Overall
Saya tahu ini obrolan suara dan saya boleh diam; ajakan masuk server lalu channel cukup konkret.
Contoh aplikasi lambat dan cari kerja pertama paling mudah saya ikuti.
Istilah cloud native di intro, singkatan karier, dan sebagian rekap masih mengandaikan pengalaman.
Tidak ada slop atau blocking yang saya temukan; masalahnya akses bahasa, bukan nada menyambut.

## Cakupan
Diperiksa seluruh caption dan 28 contact sheet, termasuk semua format di setiap sheet. Ada **84** post aktual (4 sesi × 7 tipe × 3 platform), bukan 72 seperti angka di prompt; semuanya dinilai agar tidak ada tipe terlewat. Tidak membaca review putaran sebelumnya. Nama bertanda “(contoh)” dinilai sebagai data contoh, bukan kesalahan identitas. Untuk live, “sekarang” cukup sebagai waktu; untuk recap, tanggal sesi lampau dan ajakan menunggu pengumuman berikutnya tidak dianggap jadwal acara mendatang yang hilang.

## Patterns

### N1 — major — Intro bidang belum menjelaskan bidangnya
- **Where:** pattern; `sigcn-{gitops-argocd,kubernetes-pemula,observability}/sig-intro/{instagram,x,linkedin}`; caption dan poster `ig-feed/sig-intro.png`, `x/sig-intro.png`, `li-link/sig-intro.png`, juga slide penjelasan grup.
- **Quote:** “Ngobrol soal Kubernetes dan cloud native di voice channel.”; “SIG CN itu grup FORA untuk ngobrol soal cloud native.”
- **Why:** pemula 3. Saya mengerti bentuk kegiatannya dan boleh datang, tetapi dua istilah yang belum saya kenal saling menjelaskan. Intro grup seharusnya membantu saya menentukan apakah bidang ini menarik buat saya, tanpa harus membuka announcement lain.
- **Direction:** beri satu contoh persoalan bidang ini dalam bahasa aplikasi sehari-hari; tidak perlu menguraikan semua teknologi atau menambah reassurance.

### N2 — major — Cover X kehilangan penjelasan tema
- **Where:** pattern; `sigcn-{gitops-argocd,kubernetes-pemula,observability}/cover/x`; poster `x/cover.png`.
- **Quote:** “GitOps”; “Kubernetes”; “Observability”. Subjudul masing-masing hanya mengulang judul sesi, misalnya “GitOps dengan Argo CD”.
- **Why:** jelas 3, pemula 3. Poster memberi jadwal dan channel, tetapi saya belum tahu apa yang akan terjadi atau masalah apa yang dibicarakan. Versi carousel punya slide deskripsi; gambar X tunggal tidak. Caption Observability justru punya konteks “Aplikasinya lambat, ini cara mulai mencari penyebabnya.”
- **Direction:** gunakan ruang subjudul untuk satu penjelasan manfaat/kegiatan yang sudah ada di subtitle atau description, bukan mengulang nama teknologi. Jangan menambahkan seluruh agenda.

### N3 — major — Alasan mengenal host karier memakai istilah yang belum dikenal
- **Where:** pattern; `fora-ngobrol-karier/speakers/{instagram,x,linkedin}`; caption dan poster profil host.
- **Quote:** “Menceritakan bagaimana dia pindah dari developer ke SRE lewat ikut jaga on-call.”
- **Why:** pemula 3. Saya mahasiswa yang belum pernah kerja; justru alasan mendengarkan Dika bergantung pada dua istilah jabatan/kegiatan tanpa konteks. Penjelasan on-call yang ada di recap tidak tersedia di post ini.
- **Direction:** jelaskan tugas atau pengalaman konkretnya dalam kalimat profil, bukan menambahkan daftar kepanjangan jabatan.

### N4 — major — Catatan karier ketiga tidak mandiri untuk mahasiswa
- **Where:** pattern; `fora-ngobrol-karier/recap/{instagram,linkedin}`; caption dan `ig-carousel/recap-04.png` / `li-doc/recap-04.png` (slide catatan ketiga).
- **Quote:** “Postmortem di kantor lama jadi bahan belajar Terraform yang paling nempel, karena tiap perintah ada alasannya.”
- **Why:** pemula 3. On-call dan runbook sudah dijelaskan di catatan kedua, tetapi di sini saya tidak tahu apa yang dibaca atau apa fungsi alat yang dipelajari. Contoh ini belum bisa saya gunakan sendiri. Thread X hanya memuat catatan repo, jadi tidak terdampak.
- **Direction:** jelaskan bahwa ini catatan pembahasan insiden dan sebut tugas Terraform yang relevan, tetap dengan contoh singkat.

### N5 — major — Pertanyaan rekap GitOps menganggap pembaca sudah deploy di tempat kerja
- **Where:** pattern; `sigcn-gitops-argocd/recap/{instagram,x,linkedin}`; caption penutup, terutama X 3/3.
- **Quote:** “Kalau deploy semalam bikin masalah, di tempatmu rollback-nya lewat apa sekarang?”
- **Why:** pemula 3, ngobrol 3. Saya belum punya “tempatmu” atau proses rollback untuk diceritakan. Setelah catatan teknis, satu-satunya pertanyaan langsung juga meminta pengalaman yang belum saya punya; izin mendengarkan tidak membuat pertanyaan ini lebih mudah dijawab.
- **Direction:** pertahankan pertanyaan teknis, tetapi berikan jalan menjawab dari proyek latihan atau dari bagian alur yang masih membingungkan, tanpa menambah pertanyaan bertumpuk.

### N6 — major — Definisi Pod masih melompat ke istilah penjadwalan
- **Where:** pattern; `sigcn-kubernetes-pemula/recap/{instagram,x,linkedin}`; `ig-feed/recap.png`, `ig-story/recap.png`, `x/recap.png`, `li-link/recap.png`; caption IG/LinkedIn dan slide catatan pertama.
- **Quote:** “Pod adalah unit terkecil yang dijadwalkan”; “Deployment menjaga jumlah replika”.
- **Why:** pemula 3. Ini ringkasan sesi untuk pemula, tetapi saya belum tahu apa yang dijadwalkan atau apa itu replika. Caption IG/LinkedIn memberi container sebagai konteks, tetapi belum menjelaskan hubungan penjadwalan dengan aplikasi. Di X istilah tersebut tinggal judul pada poster, tanpa badan penjelasan.
- **Direction:** mulai dari wadah aplikasi dan jumlah salinannya, lalu kenalkan nama teknis; jangan mengandalkan pembaca sudah hadir saat sesi.

## Per post

Urutan skor mengikuti rubric. `—` berarti tidak ada masalah yang menurunkan skor. Skor konsisten 5 diberikan untuk kesesuaian detail yang terlihat antara caption, poster, dan data sesi; bukan verifikasi invite aktif atau orang nyata.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N3 |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N3 |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N3 |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N4 |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N4 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/cover/x | 3 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-gitops-argocd/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | N5 |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | N5 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | N5 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/cover/x | 3 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N6 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N6 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N6 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/x | 3 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N2 |
| sigcn-observability/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | N1 |

### Issues tambahan per post
Tidak ada di luar N1–N6. Penjelasan logs/metrics/traces pada slide deskripsi dan contoh kasus pembicara Observability cukup membantu; singkatan jabatan pembicara tidak wajib dipahami untuk mengerti kasusnya. Ajakan diam atau menyalakan mic konsisten dan tidak perlu ditambah reassurance lagi.

## Machine summary

```json
{
  "role": "newcomer",
  "round": 4,
  "posts": [
    {
      "id": "fora-ngobrol-karier/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/live/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/live/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/live/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/sig-intro/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```
