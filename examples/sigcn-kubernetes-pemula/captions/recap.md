# Kubernetes untuk Pemula · recap

## Instagram

Ini yang tercatat dari "Kubernetes untuk Pemula" (Sab, 12 Des).

- Pod adalah unit terkecil yang dijadwalkan. Satu Pod bisa berisi beberapa container yang berbagi network dan storage.
- Deployment menjaga jumlah replika. Kalau satu Pod mati, Deployment langsung membuat gantinya sampai jumlah replika sesuai.
- Service memberi alamat yang stabil. IP Pod berubah tiap kali dibuat ulang, jadi akses aplikasi lewat Service. Jangan pakai IP Pod langsung.
- Mulai debug dari kubectl describe dan logs. Event di describe dan output logs biasanya sudah cukup untuk tahu kenapa Pod gagal jalan.

Dokumentasi Kubernetes: https://kubernetes.io/docs/home/
Tutorial minikube: https://minikube.sigs.k8s.io/docs/start/

14 orang ikut ngobrol di voice channel. Makasih Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, sampai ketemu lagi.

Deployment membuat Pod pengganti sendiri. Waktu proses aplikasimu mati, siapa atau apa yang menyalakannya lagi?

Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Mau dengerin aja boleh, mau nyalain mic juga boleh.

#FORA #SIGCN #Kubernetes #Container

## X 1/3

Rekap "Kubernetes untuk Pemula". 14 orang ngobrol di voice channel. Makasih Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh.

## X 2/3

Service memberi alamat yang stabil. IP Pod berubah tiap kali dibuat ulang, jadi akses aplikasi lewat Service. Jangan pakai IP Pod langsung.

## X 3/3

Deployment membuat Pod pengganti sendiri. Waktu proses aplikasimu mati, siapa atau apa yang menyalakannya lagi?
Sesi berikutnya diumumkan di Discord FORA. Mau dengerin aja boleh, mau nyalain mic juga boleh.
https://discord.gg/rSepJu7Wb
#Kubernetes

## LinkedIn

Rekap "Kubernetes untuk Pemula" (Sab, 12 Des).

Terima kasih Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh. 14 orang ikut ngobrol di voice channel.

1. Pod adalah unit terkecil yang dijadwalkan. Satu Pod bisa berisi beberapa container yang berbagi network dan storage.
2. Deployment menjaga jumlah replika. Kalau satu Pod mati, Deployment langsung membuat gantinya sampai jumlah replika sesuai.
3. Service memberi alamat yang stabil. IP Pod berubah tiap kali dibuat ulang, jadi akses aplikasi lewat Service. Jangan pakai IP Pod langsung.
4. Mulai debug dari kubectl describe dan logs. Event di describe dan output logs biasanya sudah cukup untuk tahu kenapa Pod gagal jalan.

Deployment membuat Pod pengganti sendiri. Waktu proses aplikasimu mati, siapa atau apa yang menyalakannya lagi?

Dokumentasi Kubernetes: https://kubernetes.io/docs/home/
Tutorial minikube: https://minikube.sigs.k8s.io/docs/start/

Sesi berikutnya akan kita umumkan di Discord FORA, di voice channel sig-cn-voice. Boleh dengarkan saja, boleh juga ikut bicara. https://discord.gg/rSepJu7Wb

#Kubernetes #CloudNative #DevOpsIndonesia
