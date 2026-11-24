// Stress fixtures shared by the caption and style tests.
import type { Community, Session, Sig } from "../types.ts";

export const community: Community = {
  name: "FORA",
  fullName: "Forum Rangkai",
  discord: "https://discord.gg/rSepJu7Wb",
  handles: {},
  hashtags: ["FORA", "KomunitasTech"],
  logo: "brand/logos/fora-mark.svg",
};

export const sigcn: Sig = {
  id: "sig-cn",
  short: "SIG CN",
  code: "CN",
  name: "Cloud Native",
  color: "#0A84FF",
  colorInk: "#FFFFFF",
  lockup: "brand/logos/sigcn.svg",
  tagline: "Belajar Kubernetes dan ekosistem cloud native bareng-bareng.",
  description:
    "SIG CN adalah ruang belajar Cloud Native di FORA. Kita ngobrol soal Kubernetes, GitOps, observability, dan praktik deploy sehari-hari. Semua level boleh ikut.",
  hashtags: ["SIGCN", "CloudNative", "Kubernetes"],
};

export const foraSig: Sig = {
  id: "fora",
  short: "FORA",
  code: "FORA",
  name: "FORA",
  color: "#111111",
  colorInk: "#FFFFFF",
  lockup: "brand/logos/fora-mark.svg",
  tagline: "Komunitas tech yang ngobrol santai di Discord.",
  description: "FORA adalah komunitas tech kecil di Discord. Kita ngobrol soal banyak hal di voice channel, dari karier sampai open source.",
  hashtags: ["FORA"],
};

export const base: Session = {
  id: "x",
  sig: "sig-cn",
  theme: "Kubernetes",
  title: "Kubernetes untuk Pemula",
  date: "2026-12-12",
  time: "19:30",
  durationMinutes: 90,
  voiceChannel: "sig-cn-voice",
  host: { name: "Rina (contoh)" },
  speakers: [],
  description: "Kenalan dengan Kubernetes dari nol.",
  topics: ["Pod", "Deployment", "Service"],
  recap: { points: [{ title: "Pod adalah unit terkecil", body: "Berisi satu atau beberapa container." }] },
};

export const person = (n: string) => ({ name: `${n} (contoh)`, role: "Engineer", handle: `${n.toLowerCase()}_contoh` });

export const variants: Record<string, { session: Session; sig: Sig }> = {
  "two speakers, role and handle everywhere": {
    sig: sigcn,
    session: {
      ...base,
      series: "Cloud Native 101",
      host: person("Rina"),
      speakers: [person("Bima"), person("Sari")],
      recap: {
        attendees: 14,
        points: [
          { title: "Pod adalah unit terkecil yang dijadwalkan", body: "Satu Pod berisi satu atau beberapa container." },
          { title: "Deployment menjaga jumlah replika" },
          { title: "Service memberi alamat yang stabil" },
          { title: "Mulai debug dari kubectl describe dan logs" },
        ],
        links: [{ label: "Dokumentasi Kubernetes", url: "https://kubernetes.io/docs/home/" }],
      },
    },
  },
  "long title, one speaker": {
    sig: sigcn,
    session: {
      ...base,
      theme: "GitOps",
      title: "GitOps dengan Argo CD: dari commit di Git sampai deploy",
      speakers: [{ name: "Dani (contoh)", handle: "dani_contoh" }],
      hashtags: ["ArgoCD", "DevOps"],
    },
  },
  "six topics, five recap points": {
    sig: sigcn,
    session: {
      ...base,
      theme: "Observability",
      title: "Observability: Logs, Metrics, Traces",
      speakers: [{ name: "Eko (contoh)" }],
      topics: [
        "Monitoring vs observability",
        "Logs terstruktur",
        "Metrics dan Prometheus",
        "Distributed tracing",
        "OpenTelemetry sebagai standar",
        "Alert yang tidak bikin lelah",
      ],
      recap: {
        attendees: 16,
        points: [
          { title: "Logs menjawab apa yang terjadi", body: "Pakai format terstruktur seperti JSON." },
          { title: "Metrics menjawab seberapa sering dan seberapa lama" },
          { title: "Traces menjawab di mana waktunya habis" },
          { title: "OpenTelemetry memisahkan instrumentasi dari backend" },
          { title: "Alert pada gejala yang dirasakan pengguna" },
        ],
        links: [{ label: "Dokumentasi OpenTelemetry", url: "https://opentelemetry.io/docs/" }],
      },
    },
  },
  "no speakers, general FORA session": {
    sig: foraSig,
    session: {
      ...base,
      sig: "fora",
      theme: "Karier",
      title: "Ngobrol Karier di Tech",
      voiceChannel: "fora-voice",
      host: person("Dika"),
      topics: [],
      recap: { points: [{ title: "Proyek kecil yang selesai lebih berguna daripada banyak kursus" }] },
    },
  },
  "host note, no attendee count": {
    sig: sigcn,
    session: {
      ...base,
      note: "Dulu saya baru paham Pod setelah sengaja mematikan satu dan lihat Deployment membuat gantinya.",
      recap: { points: [{ title: "Pod adalah unit terkecil" }, { title: "Deployment menjaga replika" }] },
    },
  },
  "no topics, custom invite, bare names": {
    sig: sigcn,
    session: { ...base, topics: [], discord: "https://discord.gg/custom123" },
  },
};

