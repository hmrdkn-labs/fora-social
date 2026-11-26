# Newcomer · Round 1

## Overall

Saya mahasiswa tahun kedua, belum pernah memakai Kubernetes atau masuk voice Discord.
Kalimat boleh mendengarkan membuat saya merasa boleh datang tanpa harus bicara; carousel cara ikut menjelaskan urutan server lalu channel.
GitOps terasa ditujukan ke orang yang sudah bekerja; Kubernetes menyebut pemula tetapi belum menjembatani istilah pertamanya.
Cover kehilangan jadwal/channel pada gambar tunggal; reminder mencampur undangan nanti dengan klaim sudah live.
Karier paling mudah saya pahami; recap observability sudah menjelaskan fungsi tiga jenis data dengan cukup konkret.

## Patterns

Cakupan: empat session, enam post type, tiga platform; semua 24 contact sheet di `out/sheets/` dan semua caption dibaca. Instagram mencakup feed, carousel, story; LinkedIn mencakup link dan document. Skor menilai paket itu, bukan caption saja. `*` berarti setiap nilai pada dimensi tersebut. Recap dinilai sebagai catatan acara lampau, bukan diwajibkan mempunyai jadwal acara baru. Nama `(contoh)` diperlakukan sebagai data contoh, bukan kesalahan identitas acara sungguhan. Tidak menguji tujuan invite atau mengklaim alur onboarding server sudah diverifikasi.

### P1 · major · GitOps tanpa pijakan untuk orang yang belum pernah deploy

- **Where:** `sigcn-gitops-argocd/*/*`; caption dan poster. Announcement/cover carousel slide 02 memuat alur yang sama; speakers/recap tetap mengandaikan istilahnya dikenal.
- **Quote:** "Pernah ada yang kubectl apply langsung ke prod jam 11 malam?"; "Deploy lewat merge pull request, rollback lewat git revert"; "Argo CD Application dan sync"; "Git jadi source of truth".
- **Why:** `pemula`. Saya boleh diam, tetapi belum tahu masalah apa yang dibicarakan atau pengetahuan minimum untuk mengikuti. Subtitle mengganti satu istilah asing dengan beberapa istilah lain; versi X dan speakers bahkan tidak memberi konteks masalah.
- **Direction:** Jelaskan tujuan sesi dalam bahasa sehari-hari sebelum perintahnya: perubahan aplikasi mengikuti perubahan yang disetujui di Git. Nyatakan bekal yang memang diperlukan, atau bahwa alurnya akan diperagakan dari awal. Pada recap, beri satu contoh perubahan konkret untuk menambatkan istilah.

### P2 · major · Kubernetes menyambut pemula tetapi membuka dengan istilah yang belum diajarkan

- **Where:** `sigcn-kubernetes-pemula/*/*`; caption dan poster, terutama subtitle announcement/speakers, topik carousel, dan recap point 01.
- **Quote:** "Satu cluster lokal, dari nol"; "Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya."; "Kenapa container butuh orkestrasi"; "Pod adalah unit terkecil yang dijadwalkan"; "Ngobrol soal Kubernetes dan cloud native di voice channel."
- **Why:** `pemula`. Kata "pemula" memberi izin datang, tetapi cluster, Pod, Deployment dan orkestrasi belum punya arti bagi saya. Saya juga belum tahu apakah perlu menyiapkan laptop/minikube atau cukup menyimak percobaan host. Intro ramah secara sosial, tetapi tidak menjelaskan bidangnya melalui pekerjaan yang bisa saya bayangkan.
- **Direction:** Tambahkan satu pijakan konkret tentang menjalankan aplikasi dan mengganti bagian yang gagal; jelaskan istilah pertama lewat percobaannya. Pastikan copy membedakan demonstrasi yang dapat ditonton dari praktik yang membutuhkan persiapan, sesuai format sebenarnya. Jangan menambah janji tanpa memastikan format.

### P3 · major · Observability memberi situasi nyata, lalu kembali ke daftar istilah

- **Where:** `sigcn-observability/*/*`; caption dan poster, termasuk topics announcement/intro/cover/reminder carousel dan recap point 04.
- **Quote:** "Aplikasi jalan tapi lambat, dan kita nggak tahu kenapa."; "Distributed tracing"; "OpenTelemetry dan OTLP"; "OpenTelemetry memisahkan instrumentasi dari backend"; "Eko (contoh), SRE".
- **Why:** `pemula`. Masalah aplikasi lambat bisa saya pahami; daftar berikutnya tidak menjelaskan apa yang akan saya lihat. Recap menjelaskan logs/metrics/traces dengan baik, tetapi instrumentasi, backend dan OTLP kembali menjadi prasyarat tak dijelaskan. X/speakers tidak membawa konteks aplikasi lambat dalam caption; subtitle poster membantu, belum menjelaskan tingkat sesinya.
- **Direction:** Pertahankan masalah aplikasi lambat sebagai jangkar; pilih contoh yang akan ditelusuri, dan jelaskan peran alat/protokol saat pertama disebut. Pada intro, jelaskan cloud native lewat contoh kegiatan, bukan contoh istilah lain.

### P4 · major · Cover tidak berdiri sendiri sebagai undangan

- **Where:** `*/cover/*`; `ig-feed/cover.png`, `ig-story/cover.png`, `x/cover.png`, `li-link/cover.png`; slide pertama ig-carousel/li-doc juga belum memuat jadwal. Semua empat session.
- **Quote:** "Voice channel · Discord · dengerin aja boleh"; headline "Karier", "GitOps", "Kubernetes", "Observability".
- **Why:** `jelas`. Gambar tunggal tidak menampilkan tanggal, waktu WIB atau nama channel. Caption dan slide berikutnya menyelamatkan informasi, tetapi tidak memenuhi syarat poster saja dalam tiga detik. Link mengundang saya ke server tanpa menunjukkan ruang sesi yang harus saya cari.
- **Direction:** Bawa jadwal dan nama channel ke gambar tunggal serta slide pembuka; jangan bergantung pada caption atau swipe untuk informasi inti. Tetap boleh menonjolkan tema.

### P5 · blocking · Reminder mengatakan sudah live sekaligus baru akan mulai

- **Where:** `*/reminder/*`; semua empat session, caption dan poster. `ig-story/reminder.png` menyatakan sudah berjalan; ig-feed/x/li-link memakai badge LIVE dan instruksi masuk sekarang. Carousel/doc cara ikut juga menyuruh masuk sekarang.
- **Quote:** poster "LIVE SEKARANG", "Masuk sekarang ke"; caption career "hari ini jam 19.30 WIB", Kubernetes X "Hari ini jam 19.30 WIB", GitOps X "mulai 19.30 WIB", observability X "Jam 20.00 WIB nanti".
- **Why:** `konsisten`, `jelas`. Saya tidak bisa memastikan harus masuk sekarang atau menunggu jam mulai. Ini pertentangan status waktu, bukan soal gaya; jika diposting sebelum mulai, gambar menyatakan fakta yang belum benar. Jika diposting saat sudah mulai, kata "nanti" pada observability X tetap salah.
- **Direction:** Pisahkan status sebelum mulai dan sudah berjalan; tiap paket caption/format harus memilih status yang sama. Untuk reminder sebelum sesi, hapus klaim live/sekarang; untuk live, nyatakan sudah mulai. Jangan mengandalkan jam pembaca menebak maksudnya.
- **Counting:** satu pola blocking, 12 post-platform terdampak; machine summary memberi `blocking: 1` pada masing-masing.

### P6 · major · Label menggantikan kalimat pada thread recap X

- **Where:** `sigcn-{gitops-argocd,kubernetes-pemula,observability}/recap/x`, caption X 2/3.
- **Quote:** "Intinya:".
- **Why:** `manusia`. Label-colon yang dilarang voice guide muncul persis sama pada ketiga thread. Bukan alasan menyebut seluruh post slop: catatannya tetap spesifik, tetapi bentuk ini perlu diperbaiki.
- **Direction:** Langsung mulai dengan catatan yang berguna atau kalimat penghubung yang wajar; jangan ganti dengan label lain.

## Per post

Urutan skor sama dengan rubric. `fix` tidak berarti `slop`; tidak ada post yang saya nilai slop. Semua skor di bawah 4 mempunyai rujukan pola di kolom terakhir.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/reminder/instagram | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P5 |
| fora-ngobrol-karier/reminder/x | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P5 |
| fora-ngobrol-karier/reminder/linkedin | 3 | 4 | 4 | 4 | 4 | 4 | 2 | fix | P5 |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/cover/instagram | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P4 |
| fora-ngobrol-karier/cover/x | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P4 |
| fora-ngobrol-karier/cover/linkedin | 2 | 4 | 4 | 4 | 4 | 4 | 4 | fix | P4 |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | — |
| sigcn-gitops-argocd/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/reminder/instagram | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P1, P5 |
| sigcn-gitops-argocd/reminder/x | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P1, P5 |
| sigcn-gitops-argocd/reminder/linkedin | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P1, P5 |
| sigcn-gitops-argocd/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/recap/x | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P1, P6 |
| sigcn-gitops-argocd/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/cover/instagram | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-gitops-argocd/cover/x | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-gitops-argocd/cover/linkedin | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1, P4 |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/reminder/instagram | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-kubernetes-pemula/reminder/x | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-kubernetes-pemula/reminder/linkedin | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P2, P5 |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/recap/x | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P2, P6 |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/cover/instagram | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2, P4 |
| sigcn-kubernetes-pemula/cover/x | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2, P4 |
| sigcn-kubernetes-pemula/cover/linkedin | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2, P4 |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P2 |
| sigcn-observability/announce/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/announce/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/announce/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/reminder/instagram | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P3, P5 |
| sigcn-observability/reminder/x | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P3, P5 |
| sigcn-observability/reminder/linkedin | 3 | 4 | 4 | 3 | 4 | 4 | 2 | fix | P3, P5 |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/recap/x | 4 | 3 | 4 | 3 | 4 | 4 | 4 | fix | P3, P6 |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/cover/instagram | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3, P4 |
| sigcn-observability/cover/x | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3, P4 |
| sigcn-observability/cover/linkedin | 2 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3, P4 |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/speakers/instagram | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/speakers/x | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |
| sigcn-observability/speakers/linkedin | 4 | 4 | 4 | 3 | 4 | 4 | 4 | fix | P3 |

### Issues tambahan per post

Tidak ada di luar P1–P6. Izin diam tidak saya anggap kurang: "Dengerin aja boleh, mic juga boleh" sudah jelas. Tidak semua post harus berakhir dengan pertanyaan; topik, percobaan bersama dan undangan masuk cukup untuk skor `ngobrol: 4`, meski pertanyaan yang bisa dijawab mahasiswa akan membuat beberapa post lebih kuat. Skor `platform: 4` bukan verifikasi hyperlink atau penghitungan tertimbang karakter X.

## Machine summary

```json
{
  "role": "newcomer",
  "round": 1,
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
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
        "konsisten": 4
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
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/instagram",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/x",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-gitops-argocd/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-gitops-argocd/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-gitops-argocd/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/instagram",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/x",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-gitops-argocd/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "fix",
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/instagram",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "fix",
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
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
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/reminder/instagram",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-observability/reminder/x",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
    },
    {
      "id": "sigcn-observability/reminder/linkedin",
      "scores": {
        "jelas": 3,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 2
      },
      "verdict": "fix",
      "blocking": 1
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/recap/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 2,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 3,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    }
  ]
}
```
