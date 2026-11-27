# Round 5 · slop

## Overall

84 post diperiksa: empat sesi × tujuh POST_TYPES × tiga platform; bukan 72 seperti angka lama di reviewer.md.
Caption dibaca seluruhnya; 28 contact sheet dibuka, termasuk semua format, serta tiga gambar detail untuk memastikan kutipan.
Hook lamaran 40 kali dan percobaan mematikan Pod terasa punya pengalaman; instruksi masuk dan status live umumnya jelas.
Observability paling terasa diputar ulang: cover mengulang announce, spotlight mengulang masalah yang sama tanpa memberi alasan konkret memilih orangnya.
24 post punya nilai di bawah 4; 6 berverdict slop; 0 blocking. Tidak membaca review ronde sebelumnya.

## Patterns

Cakupan di bawah menggunakan ID sesi lengkap; `instagram, linkedin` berarti dua post, bukan semua platform. Lokasi poster relatif terhadap `examples/<session>/`.

### P1 · major · Orang berbicara “di depan” pada obrolan suara

- **Where:** `sigcn-gitops-argocd/announce/{instagram,linkedin}`, `sigcn-kubernetes-pemula/announce/{instagram,linkedin}`, `sigcn-observability/announce/{instagram,linkedin}`; poster `ig-carousel/announce-03.png`, `li-doc/announce-03.png`.
- **Quote:** “Yang bakal cerita di depan.”
- **Why:** manusia 3. Kalimat stok panggung ini tidak cocok dengan obrolan voice yang pesertanya bisa nimbrung. Nada “depan” mengembalikan kesan pembicara menghadapi audiens, padahal kopinya menjanjikan obrolan bersama.
- **Direction:** Sebut orang yang memulai obrolan atau langsung tampilkan nama; tidak perlu metafora panggung. Label metadata seperti TANGGAL bukan masalah yang sama dengan label-kolon dalam prosa.

### P2 · major · Cover Observability memutar hook announce

- **Where:** `sigcn-observability/cover/{instagram,x,linkedin}`, caption; poster `ig-feed/cover.png`, `ig-carousel/cover-01.png`, `ig-story/cover.png`, `x/cover.png`, `li-doc/cover-01.png`.
- **Quote:** “Aplikasinya jalan tapi lambat, dan nggak ada yang tahu mulai cari dari mana.” Bandingkan announce IG/LinkedIn: “Pernah aplikasi lambat, dashboard hijau semua, dan nggak ada yang tahu mulai cari dari mana? Sesi ini mulai dari situ.”
- **Why:** manusia 3, spesifik 3; slop. Ini pengulangan hook dengan sedikit penggantian kata, bukan sudut baru untuk memperkenalkan seri/tema. Dalam urutan feed, pembuka terasa dihasilkan dari satu prompt yang sama.
- **Direction:** Beri cover tugas memperkenalkan tema seri dan satu pertanyaan yang dijawab tema itu; simpan kasus lambat/dashboard hijau untuk announce. Jangan sekadar memparafrase hook lagi.

### P3 · major · Spotlight Observability belum menjelaskan kenapa orang ini

- **Where:** `sigcn-observability/speakers/{instagram,x,linkedin}`, caption; poster profil Eko dan Rina pada feed/story/X/link serta `ig-carousel/speakers-02.png`, `ig-carousel/speakers-03.png` dan slide li-doc yang sama.
- **Quote:** “Kasus aplikasi lambat yang pernah Eko tangani dibedah dari awal, termasuk dari mana dia mulai mencari.” / “Rina punya contoh dashboard yang hijau semua padahal aplikasinya lambat.”
- **Why:** manusia 3, spesifik 3; slop. Kalimat pasif “dibedah dari awal” menjanjikan isi tanpa menyebut isinya. Dua bio mengulang hook announce/cover; ganti nama dan keduanya tetap bisa dipakai untuk hampir setiap pembicara observability.
- **Direction:** Sebut satu gejala atau petunjuk yang benar-benar mereka temukan dan apa peran masing-masing dalam kasus itu. Gunakan fakta yang tersedia, jangan mengarang pengalaman agar terdengar personal.

### P4 · major · Repo “kosong berisi”

- **Where:** `sigcn-gitops-argocd/speakers/{instagram,x,linkedin}`. Caption IG/LinkedIn; poster profil Rina di feed/story/X/link, `ig-carousel/speakers-03.png` dan `li-doc/speakers-03.png`. Caption X tidak memuatnya, tetapi gambar X memuat bio Rina.
- **Quote:** “Rina menyiapkan repo kosong berisi manifest (file YAML yang menjelaskan aplikasi di cluster) dan Argo CD, lalu alurnya dibangun bareng dari nol.”
- **Why:** spesifik 3. “Kosong berisi” bertabrakan dalam satu frasa; “Argo CD” juga tidak jelas berarti konfigurasi instalasi atau aplikasinya. Penjelasan dalam kurung menambah panjang tanpa membereskan kontradiksi utama.
- **Direction:** Putuskan kondisi awal repo dan sebut apa yang sudah disiapkan versus yang akan dibuat bersama.

## Per post

Nilai 4 berarti layak, bukan pujian otomatis; 5 hanya diberikan untuk keunggulan yang terlihat. Recap dinilai sebagai catatan sesi lampau, live sebagai ajakan masuk sekarang: keduanya tidak diturunkan hanya karena tidak menampilkan jadwal acara mendatang. Struktur daftar pada recap teknis dan tiga kata dalam judul “Logs, Metrics, Traces” punya fungsi nyata, bukan triad kosong. Identitas `(contoh)` dinilai sebagai data sampel sesuai konteks repo.

| session/post-type/platform | jelas | manusia | ngobrol | pemula | spesifik | platform | konsisten | verdict | issues |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| fora-ngobrol-karier/announce/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/announce/x | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/announce/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 3 | fix | I1 |
| fora-ngobrol-karier/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 3 | fix | I1 |
| fora-ngobrol-karier/live/instagram | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/live/x | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/live/linkedin | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/recap/instagram | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/recap/x | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/recap/linkedin | 4 | 4 | 5 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| fora-ngobrol-karier/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-gitops-argocd/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/live/instagram | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/live/x | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/live/linkedin | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/recap/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | I2 |
| sigcn-gitops-argocd/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/recap/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | I2 |
| sigcn-gitops-argocd/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-gitops-argocd/speakers/instagram | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-gitops-argocd/speakers/x | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-gitops-argocd/speakers/linkedin | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | P4 |
| sigcn-kubernetes-pemula/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/announce/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-kubernetes-pemula/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/live/instagram | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/live/x | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/live/linkedin | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/recap/instagram | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | I3 |
| sigcn-kubernetes-pemula/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/recap/linkedin | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | I3 |
| sigcn-kubernetes-pemula/cover/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/cover/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/cover/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/speakers/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/speakers/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-kubernetes-pemula/speakers/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/announce/instagram | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/announce/x | 4 | 4 | 3 | 4 | 4 | 4 | 4 | fix | I5 |
| sigcn-observability/announce/linkedin | 4 | 3 | 4 | 4 | 4 | 4 | 4 | fix | P1 |
| sigcn-observability/reminder/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/reminder/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/reminder/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/live/instagram | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/live/x | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/live/linkedin | 5 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/recap/instagram | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | I4 |
| sigcn-observability/recap/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/recap/linkedin | 4 | 4 | 4 | 4 | 3 | 4 | 4 | fix | I4 |
| sigcn-observability/cover/instagram | 4 | 3 | 4 | 4 | 3 | 4 | 4 | slop | P2 |
| sigcn-observability/cover/x | 4 | 3 | 4 | 4 | 3 | 4 | 4 | slop | P2 |
| sigcn-observability/cover/linkedin | 4 | 3 | 4 | 4 | 3 | 4 | 4 | slop | P2 |
| sigcn-observability/sig-intro/instagram | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/sig-intro/x | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/sig-intro/linkedin | 4 | 4 | 4 | 4 | 4 | 4 | 4 | ok | - |
| sigcn-observability/speakers/instagram | 4 | 3 | 4 | 4 | 3 | 4 | 4 | slop | P3 |
| sigcn-observability/speakers/x | 4 | 3 | 4 | 4 | 3 | 4 | 4 | slop | P3 |
| sigcn-observability/speakers/linkedin | 4 | 3 | 4 | 4 | 3 | 4 | 4 | slop | P3 |

### Issues khusus

#### I1 · major · Detail praktis karier berbeda antara caption dan poster

- **Where:** `fora-ngobrol-karier/reminder/{instagram,linkedin}`; caption vs `ig-carousel/reminder-02.png`, `li-doc/reminder-02.png`.
- **Quote:** Caption IG “Pakai headset kalau ada. Dari HP juga bisa.”; LinkedIn “Headset membantu, dan dari ponsel juga bisa.” Poster “Buka Discord sepuluh menit lebih awal buat cek suara.”
- **Why:** konsisten 3. Bukan pertentangan fakta, tetapi satu-satunya detail yang menjadi tugas reminder berbeda antara caption dan gambar. Poster masih memakai detail default tiga sesi CN; versi karier di caption sudah memilih detail lain.
- **Direction:** Pakai detail praktis karier yang sama di kedua permukaan, bukan menambah keduanya sebagai daftar instruksi.

#### I2 · major · Anak kalimat menggantung pada catatan GitOps

- **Where:** `sigcn-gitops-argocd/recap/{instagram,linkedin}`, caption poin 1; `ig-carousel/recap-02.png`, `li-doc/recap-02.png`.
- **Quote:** “Kondisi yang diinginkan ditulis di repo, dan controller yang menyamakan cluster dengan repo.”
- **Why:** manusia 3. Setelah “dan”, “controller yang …” menjadi frasa nomina tanpa predikat utama. Ini terdengar seperti dua rumusan yang ditempel, terutama di slide yang hanya berisi paragraf pendek ini.
- **Direction:** Jadikan controller subjek dengan predikat langsung. Tidak perlu mengganti istilah source of truth.

#### I3 · major · Pod seolah dipindahkan

- **Where:** `sigcn-kubernetes-pemula/recap/{instagram,linkedin}`, caption poin 1; `ig-carousel/recap-02.png`, `li-doc/recap-02.png`.
- **Quote:** “Kubernetes menjalankan dan memindahkan aplikasi per Pod.”
- **Why:** spesifik 3. Kata “memindahkan” mengaburkan bahwa Pod terikat pada node; penggantian di node lain membuat Pod baru, bukan memindahkan Pod lama. Ini justru perbedaan yang penting ketika sesi mengajarkan percobaan Pod mati.
- **Direction:** Jelaskan unit penjadwalan/penggantian dengan satu kalimat sederhana yang tidak mengesankan migrasi Pod hidup. Caption X dan gambar ringkas X tidak memuat klaim ini.

#### I4 · major · Penjelasan metrics terlalu mutlak

- **Where:** `sigcn-observability/recap/{instagram,linkedin}`, caption poin 2; `ig-carousel/recap-03.png`, `li-doc/recap-03.png`.
- **Quote:** “Yang disimpan jumlah request dan lama respons per menit, satu angka untuk banyak request. Datanya kecil, jadi bisa disimpan berbulan-bulan untuk dashboard dan alert.”
- **Why:** spesifik 3. Interval per menit dan penyimpanan berbulan-bulan bukan sifat bawaan metrics. Jumlah request dan distribusi lama respons juga tidak otomatis menjadi satu angka; cardinality menentukan ukuran data. Penyederhanaan disajikan sebagai definisi universal.
- **Direction:** Tandai sebagai contoh agregasi dan batasi klaim ukuran/retensi; tetap bandingkan ringkasan dengan log per request tanpa janji mutlak. Tidak menurunkan X yang hanya menampilkan judul poin ini dan isi OpenTelemetry.

#### I5 · major · Announce X Observability kehilangan alasan untuk menyahut

- **Where:** `sigcn-observability/announce/x`, caption.
- **Quote:** “Observability: Logs, Metrics, Traces” diikuti “Kam, 14 Jan jam 20.00 WIB.” dan instruksi masuk.
- **Why:** ngobrol 3. Seluruh post menjadi judul-jadwal-link. Hook aplikasi lambat yang membuat versi IG/LinkedIn terasa seperti ajakan tidak tersisa; poster juga hanya memberi judul/subtitle dan logistik.
- **Direction:** Sisakan satu situasi konkret yang dapat dikenali atau dijawab, dengan memangkas logistik yang sudah terbaca pada gambar. Thread tidak perlu bila bisa tetap satu tweet.

## Machine summary

```json
{
  "role": "slop",
  "round": 5,
  "posts": [
    {
      "id": "fora-ngobrol-karier/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 5,
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
        "ngobrol": 5,
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
        "ngobrol": 5,
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
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 4,
        "platform": 4,
        "konsisten": 3
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
        "konsisten": 4
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
        "konsisten": 3
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "fora-ngobrol-karier/live/instagram",
      "scores": {
        "jelas": 5,
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
      "id": "fora-ngobrol-karier/live/x",
      "scores": {
        "jelas": 5,
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
      "id": "fora-ngobrol-karier/live/linkedin",
      "scores": {
        "jelas": 5,
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
      "id": "fora-ngobrol-karier/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 5,
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
        "ngobrol": 5,
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
        "ngobrol": 5,
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
      "id": "fora-ngobrol-karier/cover/x",
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
      "id": "fora-ngobrol-karier/cover/linkedin",
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
        "manusia": 3,
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
      "id": "sigcn-gitops-argocd/announce/x",
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
      "id": "sigcn-gitops-argocd/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-gitops-argocd/reminder/instagram",
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
      "id": "sigcn-gitops-argocd/reminder/x",
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
      "id": "sigcn-gitops-argocd/reminder/linkedin",
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
      "id": "sigcn-gitops-argocd/live/instagram",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-gitops-argocd/live/x",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-gitops-argocd/live/linkedin",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-gitops-argocd/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-gitops-argocd/recap/x",
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
      "id": "sigcn-gitops-argocd/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-gitops-argocd/cover/instagram",
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
      "id": "sigcn-gitops-argocd/cover/x",
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
      "id": "sigcn-gitops-argocd/cover/linkedin",
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
      "id": "sigcn-gitops-argocd/sig-intro/instagram",
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
      "id": "sigcn-gitops-argocd/sig-intro/x",
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
      "id": "sigcn-gitops-argocd/sig-intro/linkedin",
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
      "id": "sigcn-gitops-argocd/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
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
        "pemula": 4,
        "spesifik": 3,
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
        "pemula": 4,
        "spesifik": 3,
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
        "manusia": 3,
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
      "id": "sigcn-kubernetes-pemula/announce/x",
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
      "id": "sigcn-kubernetes-pemula/announce/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-kubernetes-pemula/reminder/instagram",
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
      "id": "sigcn-kubernetes-pemula/reminder/x",
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
      "id": "sigcn-kubernetes-pemula/reminder/linkedin",
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
      "id": "sigcn-kubernetes-pemula/live/instagram",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-kubernetes-pemula/live/x",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-kubernetes-pemula/live/linkedin",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-kubernetes-pemula/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
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
      "id": "sigcn-kubernetes-pemula/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
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
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-kubernetes-pemula/cover/x",
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
      "id": "sigcn-kubernetes-pemula/cover/linkedin",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/instagram",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/x",
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
      "id": "sigcn-kubernetes-pemula/sig-intro/linkedin",
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
      "id": "sigcn-kubernetes-pemula/speakers/instagram",
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
      "id": "sigcn-kubernetes-pemula/speakers/x",
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
      "id": "sigcn-kubernetes-pemula/speakers/linkedin",
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
      "id": "sigcn-observability/announce/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
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
      "id": "sigcn-observability/announce/x",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 3,
        "pemula": 4,
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
        "manusia": 3,
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
      "id": "sigcn-observability/reminder/instagram",
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
      "id": "sigcn-observability/reminder/x",
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
      "id": "sigcn-observability/reminder/linkedin",
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
      "id": "sigcn-observability/live/instagram",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-observability/live/x",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-observability/live/linkedin",
      "scores": {
        "jelas": 5,
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
      "id": "sigcn-observability/recap/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
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
      "id": "sigcn-observability/recap/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 4,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "fix",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/cover/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
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
        "konsisten": 4
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
        "konsisten": 4
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
        "konsisten": 4
      },
      "verdict": "ok",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/instagram",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/x",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    },
    {
      "id": "sigcn-observability/speakers/linkedin",
      "scores": {
        "jelas": 4,
        "manusia": 3,
        "ngobrol": 4,
        "pemula": 4,
        "spesifik": 3,
        "platform": 4,
        "konsisten": 4
      },
      "verdict": "slop",
      "blocking": 0
    }
  ]
}
```
