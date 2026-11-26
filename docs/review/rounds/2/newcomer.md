# Newcomer review · Round 2

## Overall

Saya tahu boleh datang dan diam: izin mendengarkan dan nama channel konsisten, dengan langkah masuk yang berguna di carousel.
Poster cover masih menaruh jadwal dan cara masuk sebagai catatan kaki, kalah jauh dari gelombang dekoratif.
Istilah Kubernetes/GitOps dan beberapa rekap masih mengandaikan pengalaman kerja; ajakan menjawab belum selalu memberi tempat bagi mahasiswa.
Tidak ada verdict slop atau masalah blocking; nama bertanda “(contoh)” dinilai sebagai data sampel, bukan identitas acara nyata.
Cakupan aktual 84 post (4 sesi × 7 jenis × 3 platform), bukan 72 dalam prompt; semuanya dinilai, termasuk sig-intro.

## Patterns

Scope notation: `*` berarti ketiga platform; hanya baris yang menyebut ID isu di tabel yang mendapat penalti. Lokasi poster relatif terhadap `examples/<session>/`. Nama file tunggal cover adalah `ig-feed/cover.png`, `ig-story/cover.png`, `x/cover.png`, dan `li-link/cover.png`; untuk slide, lihat panel berlabel pada contact sheet yang disebut. Tidak membaca review ronde sebelumnya. Seluruh 28 contact sheet diperiksa bersama seluruh caption dan YAML sesi/SIG. Nilai konsisten 5 untuk kecocokan detail yang terlihat; bukan verifikasi bahwa undangan Discord aktif.

### P1 · major · Jadwal dan pintu masuk cover terlalu kecil

- **Where:** pattern, keempat sesi `/cover/*`; poster tunggal cover di atas, serta panel pertama ig-carousel dan li-doc pada `out/sheets/<session>--cover.png`.
- **Quote:** “Sab, 23 Jan · 19.30–21.00 WIB · voice channel fora-voice”; “Sab, 19 Des · 19.30–21.00 WIB · voice channel sig-cn-voice”; “Sab, 12 Des · 19.30–21.00 WIB · voice channel sig-cn-voice”; “Kam, 14 Jan · 20.00–21.30 WIB · voice channel sig-cn-voice”; “discord.gg/rSepJu7Wb”.
- **Why:** jelas 3. Tema terbaca langsung, tetapi jadwal, Discord dan channel menjadi satu baris sangat kecil di bawah area gelombang yang besar. Untuk orang yang belum kenal seri, informasi bahwa ini acara suara dan kapan masuk tidak terbaca dalam tiga detik pada ukuran feed ponsel. Slide akhir membantu, tetapi tidak memperbaiki poster tunggal/story.
- **Direction:** beri blok jadwal dan masuk Discord ukuran baca normal, kurangi area dekorasi; pertahankan tema sebagai fokus utama.

### P2 · major · “Pemula” masih disambut istilah yang belum dikenalnya

- **Where:** `sigcn-kubernetes-pemula/announce/{instagram,linkedin}` caption; `/speakers/*` caption, poster feed/story dan slide profil pada `out/sheets/sigcn-kubernetes-pemula--speakers.png`.
- **Quote:** “Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya”; “Menunjukkan cara membaca kubectl describe waktu sebuah Pod gagal jalan.”
- **Why:** pemula 3. Sebagai orang yang belum memakai Kubernetes saya belum tahu benda apa yang dimatikan. Penjelasan minikube di slide kedua announcement membantu, tetapi hook dan profil pembicara tetap meminta saya menerjemahkan Pod, Deployment dan perintah sebelum paham percobaannya.
- **Direction:** hubungkan istilah pertama dengan kejadian sederhana pada aplikasi yang berjalan. Jangan menambah daftar definisi; jelaskan apa yang akan diperlihatkan dengan satu contoh konkret.

### P3 · major · Batas pengetahuan GitOps hilang di banyak permukaan

- **Where:** `sigcn-gitops-argocd/announce/{instagram,linkedin}` caption; `/cover/*`, `/speakers/*`, `/recap/*` caption/poster; contact sheet jenis terkait.
- **Quote:** “kubectl apply langsung ke prod”; “Deploy lewat merge pull request, rollback config lewat git revert”; “siapa di sini yang masih kubectl apply ke prod?”; “Pisahkan repo manifest dari repo kode aplikasi”.
- **Why:** pemula 3. Saya mungkin tahu Git dari kuliah, tetapi belum tahu cluster, manifest atau apa yang Argo CD kerjakan. Slide deskripsi mengatakan “Cukup tahu Git dasar”, namun feed/story dan caption utama tidak membawa batas itu. Profil bertanya seakan semua pendengar sudah deploy ke production; rekap tetap tidak memberi arti manifest.
- **Direction:** bawa prasyarat Git dasar dan satu penjelasan hubungan file konfigurasi dengan aplikasi yang berjalan ke permukaan yang berdiri sendiri. Pada rekap, jelaskan manifest sekali; tidak perlu mengajarkan Kubernetes seluruhnya.

### P4 · major · Pertanyaan rekap mengandaikan sudah bekerja

- **Where:** `sigcn-kubernetes-pemula/recap/*`, `sigcn-gitops-argocd/recap/*`, `fora-ngobrol-karier/recap/{instagram,linkedin}`, caption.
- **Quote:** “cocok nggak sama yang kamu temui di kerjaan?”; “Kalau di tempatmu beda, ceritain.”
- **Why:** ngobrol 3. Pertanyaan Service dan pemisahan repo meminta pengalaman yang belum saya punya. Pada rekap karier, Instagram/LinkedIn juga mengarahkan saya membandingkan pengalaman tempat kerja, padahal audiens mencari kerja pertama ikut diundang. Izin mendengarkan tidak otomatis memberi saya jawaban yang bisa ditulis.
- **Direction:** tawarkan pertanyaan yang bisa dijawab dari mencoba tutorial, proyek kuliah, atau bagian catatan yang belum dimengerti; jangan selalu meminta cerita production. X karier tidak diturunkan: pertanyaan repo versus sertifikat masih bisa saya tanggapi dari pengalaman kuliah.

### P5 · major · Rekap observability berhenti pada singkatan baru

- **Where:** `sigcn-observability/recap/*`, caption; slide OpenTelemetry di panel ig-carousel/li-doc pada `out/sheets/sigcn-observability--recap.png`.
- **Quote:** “OpenTelemetry, pasang instrumentasi sekali. Datanya bisa dikirim ke backend apa pun yang bisa menerima OTLP.”
- **Why:** pemula 3. Instrumentasi dan OTLP tidak diberi arti; di X ini satu-satunya catatan yang dijelaskan, jadi saya tidak mendapatkan contoh sederhana logs/metrics/traces dari thread itu. Slide lain memberi konteks yang lebih baik, tetapi catatan ini sendiri belum berguna untuk pendengar pertama.
- **Direction:** beri satu contoh data apa yang dikirim dan maksud instrumentasi; kenalkan OTLP sebagai format/protokol pengiriman atau hilangkan singkatan bila tidak diperlukan.

### P6 · major · Rekap karier kembali menjadi percakapan orang yang sudah bekerja

- **Where:** `fora-ngobrol-karier/recap/{instagram,linkedin}` caption dan slide catatan 2–3 pada `out/sheets/fora-ngobrol-karier--recap.png`.
- **Quote:** “Dika minta ikut rotasi on-call sebagai shadow dulu, dan dari situ dapat tugas pertama menulis runbook.”; “Postmortem di kantor lama jadi bahan belajar Terraform yang paling nempel”.
- **Why:** pemula 3. Jalur kerja pertama mudah saya pahami; kalimat selanjutnya membawa on-call, shadow, runbook dan postmortem tanpa konteks tugasnya. Saya tidak tahu langkah mana yang bisa saya tiru sebelum punya pekerjaan.
- **Direction:** jelaskan pekerjaan konkretnya, misalnya ikut mengamati penanganan gangguan dan mencatat langkah penanganannya. Nama Terraform boleh tetap ada; tumpukan istilah peran/tugas yang perlu dijembatani.

### P7 · major · Izin diam dikatakan dua kali pada reminder karier

- **Where:** `fora-ngobrol-karier/reminder/{instagram,linkedin}`, caption.
- **Quote:** “Mic boleh mati dulu sampai kamu siap ngomong.” lalu “Dengerin aja nggak apa-apa, ngomong juga silakan.”; “Mikrofon boleh dimatikan sampai kamu siap bicara.” lalu “Boleh dengarkan saja, boleh juga ikut bicara.”
- **Why:** manusia 3. Pengulangan reassurance dalam caption pendek terasa dirakit; “sampai kamu siap” juga kurang tegas dibanding izin diam sepanjang sesi. Petunjuk praktisnya bagus, cukup satu kali.
- **Direction:** pertahankan kalimat praktis tentang mikrofon, hilangkan pengulangan izin pada CTA caption tersebut.

## Per post

Urutan skor mengikuti rubric. `ok` berarti seluruh skor minimal 4; `fix` selalu memiliki referensi isu di atas. Rekap dinilai sebagai catatan acara lampau, bukan undangan yang wajib punya tanggal sesi berikutnya. Live dinilai sebagai masuk sekarang. Tidak menghukum pengulangan URL/channel fungsional antarp platform sebagai slop.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| fora-ngobrol-karier/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| fora-ngobrol-karier/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| fora-ngobrol-karier/reminder/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P7 |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/reminder/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 5 | fix | P7 |
| fora-ngobrol-karier/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | P4, P6 |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | P4, P6 |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P3 |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P3 |
| sigcn-gitops-argocd/cover/instagram | 3 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P1, P3 |
| sigcn-gitops-argocd/cover/x | 3 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P1, P3 |
| sigcn-gitops-argocd/cover/linkedin | 3 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P1, P3 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P3 |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P3 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P3 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | P3, P4 |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | P3, P4 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 3 | 3 | 4 | 4 | 5 | fix | P3, P4 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P2 |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P2 |
| sigcn-kubernetes-pemula/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| sigcn-kubernetes-pemula/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| sigcn-kubernetes-pemula/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P2 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P2 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P2 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | P4 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | P4 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 3 | 4 | 4 | 4 | 5 | fix | P4 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/cover/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| sigcn-observability/cover/x | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| sigcn-observability/cover/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 5 | fix | P1 |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/live/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 5 | ok | — |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P5 |
| sigcn-observability/recap/x | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P5 |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 5 | fix | P5 |

### Issues di luar pattern

Tidak ada tambahan. Semua skor di bawah 4 terhubung ke pattern; tidak ada blocking. Pemeriksaan panjang caption X dengan URL dinormalisasi ke 23 karakter tidak menemukan bagian di atas 280 karakter (bukan uji unggah platform atau undangan Discord).

## Machine summary

```json
{
  "role": "newcomer",
  "round": 2,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/speakers/x",
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
      "id": "fora-ngobrol-karier/speakers/linkedin",
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
      "id": "fora-ngobrol-karier/recap/instagram",
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
      "id": "sigcn-gitops-argocd/announce/instagram",
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/instagram",
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/speakers/x",
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
      "id": "sigcn-gitops-argocd/speakers/linkedin",
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
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
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
      "id": "sigcn-gitops-argocd/sig-intro/x",
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
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
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
      "id": "sigcn-kubernetes-pemula/announce/instagram",
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/speakers/x",
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
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
        "ngobrol": 3,
        "pemula": 4,
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
        "ngobrol": 3,
        "pemula": 4,
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
        "ngobrol": 3,
        "pemula": 4,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
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
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
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
      "id": "sigcn-observability/sig-intro/instagram",
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
      "id": "sigcn-observability/sig-intro/x",
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
      "id": "sigcn-observability/sig-intro/linkedin",
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 5
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/x",
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
      "id": "sigcn-observability/recap/linkedin",
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
