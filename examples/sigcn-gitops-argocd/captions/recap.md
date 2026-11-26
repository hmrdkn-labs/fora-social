# GitOps dengan Argo CD · recap

## Instagram

Rekap "GitOps dengan Argo CD", Sab, 19 Des.

11 orang ikut ngobrol di voice channel. Makasih Dani (contoh).

1. Git jadi source of truth. Jumlah salinan aplikasi ditulis di file YAML dalam repo. Ganti angka 2 jadi 3 lalu commit, dan Argo CD, program yang menjaga servernya, menambah salinan ketiga. Tidak ada kubectl apply manual.
2. Argo CD membandingkan isi repo dengan yang jalan di server. Kalau beda, aplikasinya berstatus OutOfSync, dan sync menyamakannya dengan repo.
3. Pisahkan repo manifest dari repo kode aplikasi. Manifest, file YAML yang menjelaskan aplikasi di cluster, tinggal di repo sendiri. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.
4. Rollback config cukup dengan git revert. Revert commit yang mengubah manifest, lalu sync, dan riwayatnya tetap tercatat. Batasnya, migrasi database tidak ikut mundur, jadi itu dipikirkan terpisah.

Bagian mana dari GitOps yang masih bikin kamu bingung?

Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Mau dengerin aja boleh, mau nyalain mic juga boleh.

#FORA #SIGCN #GitOps #ArgoCD

## X 1/3

Rekap "GitOps dengan Argo CD". 11 orang ngobrol di voice channel. Makasih Dani (contoh).

## X 2/3

Pisahkan repo manifest dari repo kode aplikasi. Manifest, file YAML yang menjelaskan aplikasi di cluster, tinggal di repo sendiri. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.

## X 3/3

Bagian mana dari GitOps yang masih bikin kamu bingung?
Dokumentasi Argo CD https://argo-cd.readthedocs.io/
Sesi berikutnya diumumkan di Discord FORA. Dengerin aja nggak apa-apa, ngomong juga silakan.
https://discord.gg/rSepJu7Wb
#GitOps

## LinkedIn

Rekap "GitOps dengan Argo CD" (Sab, 19 Des).

Terima kasih Dani (contoh). 11 orang ikut ngobrol di voice channel.

1. Git jadi source of truth. Jumlah salinan aplikasi ditulis di file YAML dalam repo. Ganti angka 2 jadi 3 lalu commit, dan Argo CD, program yang menjaga servernya, menambah salinan ketiga. Tidak ada kubectl apply manual.
2. Argo CD membandingkan isi repo dengan yang jalan di server. Kalau beda, aplikasinya berstatus OutOfSync, dan sync menyamakannya dengan repo.
3. Pisahkan repo manifest dari repo kode aplikasi. Manifest, file YAML yang menjelaskan aplikasi di cluster, tinggal di repo sendiri. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.
4. Rollback config cukup dengan git revert. Revert commit yang mengubah manifest, lalu sync, dan riwayatnya tetap tercatat. Batasnya, migrasi database tidak ikut mundur, jadi itu dipikirkan terpisah.

Bagian mana dari GitOps yang masih bikin kamu bingung?

Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya akan kita umumkan di Discord FORA, di voice channel sig-cn-voice. Boleh dengarkan saja, boleh juga ikut bicara. https://discord.gg/rSepJu7Wb

#GitOps #CloudNative #Kubernetes
