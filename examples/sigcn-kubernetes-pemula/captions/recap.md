# Kubernetes untuk Pemula · recap

## Instagram

Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya. Kita ulangi percobaan itu bareng-bareng.

- Pod adalah unit terkecil yang dijadwalkan. Satu Pod bisa berisi beberapa container yang berbagi network dan storage.
- Deployment menjaga jumlah replika. Kalau satu Pod mati, Deployment langsung membuat gantinya sampai jumlah replika sesuai.
- Service memberi alamat yang stabil. IP Pod berubah tiap kali dibuat ulang, jadi akses aplikasi lewat Service. Jangan pakai IP Pod langsung.
- Mulai debug dari kubectl describe dan logs. Event di describe dan output logs biasanya sudah cukup untuk tahu kenapa Pod gagal jalan.

Dokumentasi Kubernetes: https://kubernetes.io/docs/home/
Tutorial minikube: https://minikube.sigs.k8s.io/docs/start/

14 orang ikut ngobrol di voice channel. Makasih Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh, sampai ketemu lagi. Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Dengerin aja boleh, nyalain mic juga boleh.

#FORA #SIGCN #Kubernetes #Container

## X 1/4

Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya. Kita ulangi percobaan itu bareng-bareng.

## X 2/4

Rekap "Kubernetes untuk Pemula". 14 orang ngobrol di voice channel. Makasih Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh.

## X 3/4

Intinya:
1. Pod adalah unit terkecil yang dijadwalkan
2. Deployment menjaga jumlah replika
3. Service memberi alamat yang stabil
4. Mulai debug dari kubectl describe dan logs

## X 4/4

Dokumentasi Kubernetes https://kubernetes.io/docs/home/
Sesi berikutnya diumumkan di Discord FORA. Dengerin aja boleh, mic juga boleh.
https://discord.gg/rSepJu7Wb
#Kubernetes

## LinkedIn

Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya. Kita ulangi percobaan itu bareng-bareng.

Terima kasih Bima (contoh) @bima_contoh dan Sari (contoh) @sari_contoh. 14 orang ikut ngobrol di voice channel.

1. Pod adalah unit terkecil yang dijadwalkan. Satu Pod bisa berisi beberapa container yang berbagi network dan storage.
2. Deployment menjaga jumlah replika. Kalau satu Pod mati, Deployment langsung membuat gantinya sampai jumlah replika sesuai.
3. Service memberi alamat yang stabil. IP Pod berubah tiap kali dibuat ulang, jadi akses aplikasi lewat Service. Jangan pakai IP Pod langsung.
4. Mulai debug dari kubectl describe dan logs. Event di describe dan output logs biasanya sudah cukup untuk tahu kenapa Pod gagal jalan.

Dokumentasi Kubernetes: https://kubernetes.io/docs/home/
Tutorial minikube: https://minikube.sigs.k8s.io/docs/start/

Sesi berikutnya akan kami umumkan di Discord FORA. Boleh dengarkan saja di voice channel sig-cn-voice, boleh juga ikut bicara. https://discord.gg/rSepJu7Wb

#Kubernetes #CloudNative #DevOpsIndonesia
