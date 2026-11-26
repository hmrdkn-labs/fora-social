# Observability: Logs, Metrics, Traces · recap

## Instagram

Rekap "Observability: Logs, Metrics, Traces", Kam, 14 Jan.

16 orang ikut ngobrol di voice channel. Makasih Eko (contoh).

1. Log yang terstruktur bisa dicari. Dengan format seperti JSON, field seperti duration_ms bisa disaring, jadi request yang lambat gampang ditemukan.
2. Metrics merangkum request menjadi angka. Misalnya jumlah request dan lama respons dirangkum per menit, jadi satu angka mewakili banyak request. Ringkasan begini jauh lebih kecil daripada log tiap request, jadi biasanya bisa disimpan lebih lama untuk dashboard dan alert.
3. Trace menunjuk service mana yang menghabiskan waktu. Satu request diikuti dari service ke service, lalu bagian yang lambat kelihatan.
4. OpenTelemetry, pasang kode pencatat sekali. Datanya dikirim lewat OTLP, format standar OpenTelemetry untuk mengirim data, jadi backend-nya bisa diganti tanpa mengubah kode aplikasi.
5. Alert dari yang dirasakan pengguna. Error rate dan latency yang jadi patokan. CPU tinggi sebentar belum tentu masalah.

Kalau aplikasi proyekmu lambat, kamu mau mulai cari dari mana?

Dokumentasi OpenTelemetry: https://opentelemetry.io/docs/
Dokumentasi Prometheus: https://prometheus.io/docs/introduction/overview/

Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Dengerin aja nggak apa-apa, ngomong juga silakan.

#FORA #SIGCN #Observability #OpenTelemetry

## X 1/3

Rekap "Observability: Logs, Metrics, Traces". 16 orang ngobrol di voice channel. Makasih Eko (contoh).

## X 2/3

OpenTelemetry, pasang kode pencatat sekali. Datanya dikirim lewat OTLP, format standar OpenTelemetry untuk mengirim data, jadi backend-nya bisa diganti tanpa mengubah kode aplikasi.

## X 3/3

Kalau aplikasi proyekmu lambat, kamu mau mulai cari dari mana?
Dokumentasi OpenTelemetry https://opentelemetry.io/docs/
Sesi berikutnya diumumkan di Discord FORA. Mau dengerin aja boleh, mau nyalain mic juga boleh.
https://discord.gg/rSepJu7Wb
#Observability

## LinkedIn

16 orang ikut ngobrol di voice channel. Terima kasih Eko (contoh).

Catatan dari "Observability: Logs, Metrics, Traces":

1. Log yang terstruktur bisa dicari. Dengan format seperti JSON, field seperti duration_ms bisa disaring, jadi request yang lambat gampang ditemukan.
2. Metrics merangkum request menjadi angka. Misalnya jumlah request dan lama respons dirangkum per menit, jadi satu angka mewakili banyak request. Ringkasan begini jauh lebih kecil daripada log tiap request, jadi biasanya bisa disimpan lebih lama untuk dashboard dan alert.
3. Trace menunjuk service mana yang menghabiskan waktu. Satu request diikuti dari service ke service, lalu bagian yang lambat kelihatan.
4. OpenTelemetry, pasang kode pencatat sekali. Datanya dikirim lewat OTLP, format standar OpenTelemetry untuk mengirim data, jadi backend-nya bisa diganti tanpa mengubah kode aplikasi.
5. Alert dari yang dirasakan pengguna. Error rate dan latency yang jadi patokan. CPU tinggi sebentar belum tentu masalah.

Dokumentasi OpenTelemetry: https://opentelemetry.io/docs/
Dokumentasi Prometheus: https://prometheus.io/docs/introduction/overview/

Kalau aplikasi proyekmu lambat, kamu mau mulai cari dari mana?

Sesi berikutnya akan kita umumkan di Discord FORA, di voice channel sig-cn-voice. Mau dengarkan saja atau ikut bicara, dua-duanya boleh. https://discord.gg/rSepJu7Wb

#Observability #CloudNative #Kubernetes
