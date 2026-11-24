# GitOps dengan Argo CD · recap

## Instagram

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

11 orang ikut ngobrol di voice channel. Makasih Dani (contoh).

1. Git jadi source of truth. Kondisi yang diinginkan ditulis di repo, dan controller yang menyamakan cluster dengan repo. Tidak ada kubectl apply manual.
2. Argo CD membandingkan live state dengan Git. Kalau beda, aplikasi berstatus OutOfSync, dan sync menerapkan perubahannya.
3. Pisahkan repo manifest dari repo kode aplikasi. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.
4. Rollback cukup dengan git revert. Commit baru yang membatalkan perubahan, lalu disync. Riwayatnya tetap tercatat.

Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Dengerin aja boleh, nyalain mic juga boleh.

#FORA #SIGCN #GitOps #ArgoCD

## X 1/4

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

## X 2/4

Rekap "GitOps dengan Argo CD". 11 orang ngobrol di voice channel. Makasih Dani (contoh).

## X 3/4

Intinya:
1. Git jadi source of truth
2. Argo CD membandingkan live state dengan Git
3. Pisahkan repo manifest dari repo kode aplikasi
4. Rollback cukup dengan git revert

## X 4/4

Dokumentasi Argo CD https://argo-cd.readthedocs.io/
Sesi berikutnya diumumkan di Discord FORA. Dengerin aja boleh, mic juga boleh.
https://discord.gg/rSepJu7Wb
#GitOps

## LinkedIn

Pernah ada yang kubectl apply langsung ke prod jam 11 malam? Di tim saya pernah, dan dari situ saya pindah ke GitOps.

Terima kasih Dani (contoh). 11 orang ikut ngobrol di voice channel.

1. Git jadi source of truth. Kondisi yang diinginkan ditulis di repo, dan controller yang menyamakan cluster dengan repo. Tidak ada kubectl apply manual.
2. Argo CD membandingkan live state dengan Git. Kalau beda, aplikasi berstatus OutOfSync, dan sync menerapkan perubahannya.
3. Pisahkan repo manifest dari repo kode aplikasi. Perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih rapi.
4. Rollback cukup dengan git revert. Commit baru yang membatalkan perubahan, lalu disync. Riwayatnya tetap tercatat.

Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya akan kami umumkan di Discord FORA. Boleh dengarkan saja di voice channel sig-cn-voice, boleh juga ikut bicara. https://discord.gg/rSepJu7Wb

#GitOps #CloudNative #Kubernetes
