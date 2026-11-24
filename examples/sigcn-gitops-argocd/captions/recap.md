# GitOps dengan Argo CD · recap

## Instagram

Rekap "GitOps dengan Argo CD", Sab, 19 Des.

11 orang ikut ngobrol di voice channel. Makasih Dani (contoh).

1. Git jadi source of truth. Kondisi yang diinginkan ditulis di repo, dan controller yang menyamakan cluster dengan repo. Tidak ada kubectl apply manual.
2. Argo CD membandingkan live state dengan Git. Kalau beda, aplikasi berstatus OutOfSync, dan sync menerapkan perubahannya.
3. Pisahkan repo manifest dari repo kode aplikasi. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.
4. Rollback cukup dengan git revert. Commit baru yang membatalkan perubahan, lalu disync. Riwayatnya tetap tercatat.

Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Mau dengerin aja boleh, mau nyalain mic juga boleh.

#FORA #SIGCN #GitOps #ArgoCD

## X 1/3

Rekap "GitOps dengan Argo CD". 11 orang ngobrol di voice channel. Makasih Dani (contoh).

## X 2/3

Intinya:
1. Git jadi source of truth
2. Argo CD membandingkan live state dengan Git
3. Pisahkan repo manifest dari repo kode aplikasi
4. Rollback cukup dengan git revert

## X 3/3

Dokumentasi Argo CD https://argo-cd.readthedocs.io/
Sesi berikutnya diumumkan di Discord FORA. Dengerin aja nggak apa-apa, ngomong juga silakan.
https://discord.gg/rSepJu7Wb
#GitOps

## LinkedIn

Rekap "GitOps dengan Argo CD" (Sab, 19 Des).

Terima kasih Dani (contoh). 11 orang ikut ngobrol di voice channel.

1. Git jadi source of truth. Kondisi yang diinginkan ditulis di repo, dan controller yang menyamakan cluster dengan repo. Tidak ada kubectl apply manual.
2. Argo CD membandingkan live state dengan Git. Kalau beda, aplikasi berstatus OutOfSync, dan sync menerapkan perubahannya.
3. Pisahkan repo manifest dari repo kode aplikasi. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.
4. Rollback cukup dengan git revert. Commit baru yang membatalkan perubahan, lalu disync. Riwayatnya tetap tercatat.

Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya akan kita umumkan di Discord FORA, di voice channel sig-cn-voice. Boleh dengarkan saja, boleh juga ikut bicara. https://discord.gg/rSepJu7Wb

#GitOps #CloudNative #Kubernetes
