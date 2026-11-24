# GitOps dengan Argo CD: dari commit di Git sampai deploy · recap

## Instagram

✅ Rangkuman sesi
GitOps dengan Argo CD: dari commit di Git sampai deploy

Makasih Dani (contoh)! Ada 11 orang yang ikut ngobrol di voice channel.

Poin-poin yang kita bawa pulang:
1. Git adalah sumber kebenaran: Kondisi yang diinginkan ditulis di repo; controller yang menyamakan cluster dengan repo, bukan orang yang menjalankan kubectl apply.
2. Argo CD membandingkan live state dengan Git: Kalau berbeda, aplikasi berstatus OutOfSync, dan sync akan menerapkan perubahan.
3. Pisahkan repo manifest dari repo kode aplikasi: Dengan begitu perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih bersih.
4. Rollback adalah git revert: Commit baru yang membatalkan perubahan lalu disinkronkan, jadi riwayatnya tetap tercatat.

Bacaan lanjutan:
• Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya diumumkan di Discord FORA. Gabung dulu lewat link di bio atau discord.gg/rSepJu7Wb, biar nggak ketinggalan.

Simpan postingan ini buat dibaca ulang.

#FORA #KomunitasTech #SIGCN #CloudNative #Kubernetes #DevOps #ArgoCD #GitOps

## X 1/3

Rangkuman "GitOps dengan Argo CD: dari commit di Git sampai deploy". 11 orang ngobrol di voice channel. Makasih Dani (contoh)!

## X 2/3

Poin-poin utamanya:
1. Git adalah sumber kebenaran
2. Argo CD membandingkan live state dengan Git
3. Pisahkan repo manifest dari repo kode aplikasi
4. Rollback adalah git revert

## X 3/3

Bacaan: Dokumentasi Argo CD https://argo-cd.readthedocs.io/
Sesi berikutnya diumumkan di Discord FORA. Gabung dulu, siapa pun boleh ikut ngobrol dan bertanya:
https://discord.gg/rSepJu7Wb
#SIGCN #FORA

## LinkedIn

Rangkuman sesi SIG CN × FORA
GitOps dengan Argo CD: dari commit di Git sampai deploy

Terima kasih Dani (contoh). 11 orang ikut ngobrol di voice channel.

Beberapa poin yang kami bawa pulang:
1. Git adalah sumber kebenaran: Kondisi yang diinginkan ditulis di repo; controller yang menyamakan cluster dengan repo, bukan orang yang menjalankan kubectl apply.
2. Argo CD membandingkan live state dengan Git: Kalau berbeda, aplikasi berstatus OutOfSync, dan sync akan menerapkan perubahan.
3. Pisahkan repo manifest dari repo kode aplikasi: Dengan begitu perubahan konfigurasi tidak ikut memicu build, dan histori deploy lebih bersih.
4. Rollback adalah git revert: Commit baru yang membatalkan perubahan lalu disinkronkan, jadi riwayatnya tetap tercatat.

Bacaan lanjutan:
• Dokumentasi Argo CD: https://argo-cd.readthedocs.io/

Sesi berikutnya akan diumumkan di Discord FORA. Format tetap sama: talk santai di voice channel, terbuka untuk siapa pun. https://discord.gg/rSepJu7Wb

#SIGCN #CloudNative #Kubernetes #DevOps #GitOps
