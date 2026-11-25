# Observability: Logs, Metrics, Traces · recap

## Instagram

Rekap "Observability: Logs, Metrics, Traces", Kam, 14 Jan.

16 orang ikut ngobrol di voice channel. Makasih Eko (contoh).

1. Log yang terstruktur bisa dicari. Dengan format seperti JSON, satu field duration_ms cukup untuk menemukan request yang menggantung di aplikasi lambat tadi.
2. Metrics itu angka murah yang tahan lama. Jumlah request dan lama respons ringan disimpan berbulan-bulan, jadi cocok untuk dashboard dan alert.
3. Trace menunjuk service mana yang menghabiskan waktu. Satu request diikuti dari service ke service, lalu bagian yang lambat kelihatan.
4. OpenTelemetry, pasang instrumentasi sekali. Datanya bisa dikirim ke backend apa pun yang bisa menerima OTLP.
5. Alert dari yang dirasakan pengguna. Error rate dan latency yang jadi patokan. CPU tinggi sebentar belum tentu masalah.

Soal "Log yang terstruktur bisa dicari", gimana di tempat kamu?

Dokumentasi OpenTelemetry: https://opentelemetry.io/docs/
Dokumentasi Prometheus: https://prometheus.io/docs/introduction/overview/

Sesi berikutnya kita umumkan di Discord FORA (link di bio atau discord.gg/rSepJu7Wb). Dengerin aja nggak apa-apa, ngomong juga silakan.

#FORA #SIGCN #Observability #OpenTelemetry

## X 1/3

Rekap "Observability: Logs, Metrics, Traces". 16 orang ngobrol di voice channel. Makasih Eko (contoh).

## X 2/3

OpenTelemetry, pasang instrumentasi sekali. Datanya bisa dikirim ke backend apa pun yang bisa menerima OTLP.

## X 3/3

Kamu setuju sama "OpenTelemetry, pasang instrumentasi sekali"? Kalau di tempatmu beda, ceritain.
Dokumentasi OpenTelemetry https://opentelemetry.io/docs/
Sesi berikutnya diumumkan di Discord FORA. Mau dengerin aja boleh, mau nyalain mic juga boleh.
https://discord.gg/rSepJu7Wb
#Observability

## LinkedIn

16 orang ikut ngobrol di voice channel. Terima kasih Eko (contoh).

Catatan dari "Observability: Logs, Metrics, Traces":

1. Log yang terstruktur bisa dicari. Dengan format seperti JSON, satu field duration_ms cukup untuk menemukan request yang menggantung di aplikasi lambat tadi.
2. Metrics itu angka murah yang tahan lama. Jumlah request dan lama respons ringan disimpan berbulan-bulan, jadi cocok untuk dashboard dan alert.
3. Trace menunjuk service mana yang menghabiskan waktu. Satu request diikuti dari service ke service, lalu bagian yang lambat kelihatan.
4. OpenTelemetry, pasang instrumentasi sekali. Datanya bisa dikirim ke backend apa pun yang bisa menerima OTLP.
5. Alert dari yang dirasakan pengguna. Error rate dan latency yang jadi patokan. CPU tinggi sebentar belum tentu masalah.

Dokumentasi OpenTelemetry: https://opentelemetry.io/docs/
Dokumentasi Prometheus: https://prometheus.io/docs/introduction/overview/

Soal "Metrics itu angka murah yang tahan lama", gimana di tempat kamu?

Sesi berikutnya akan kita umumkan di Discord FORA, di voice channel sig-cn-voice. Mau dengarkan saja atau ikut bicara, dua-duanya boleh. https://discord.gg/rSepJu7Wb

#Observability #CloudNative #Kubernetes
