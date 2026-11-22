// Everything that differs between the two sites (Zabanyar and Lernpfad); the rest of the engine is shared and identical.
export const SITE = {
  id: "lp",                                   // prefix of local storage keys and caches
  name: "Lernpfad",
  defaultUi: "en",
  multiLogin: false,
  ownApi: h => h.endsWith("workers.dev") || h === "localhost" || h === "127.0.0.1",
  apiServers: ["https://lernpfad.zabanyar.workers.dev"],
  strings: {
    fa: { appName: "Lernpfad", tagline: "مسیر شما به زبان‌های تازه", unknownName: "این اسم در فهرست نیست." },
    en: { appName: "Lernpfad", tagline: "Your path to new languages", unknownName: "This name is not on the list." },
    tr: { appName: "Lernpfad", tagline: "Yeni dillere giden yolunuz", unknownName: "Bu ad listede yok." },
  },
  credits: [
    "Lernpfad — your path to new languages. A private project.",
    "Pictures: Microsoft Fluent Emoji (MIT) and Twemoji (CC-BY 4.0, © Twitter/X and contributors).",
    "Voices: Piper neural text-to-speech voices (thorsten, kerstin) via sherpa-onnx.",
    "Font: Vazirmatn by Saber Rastikerdar (SIL Open Font License).",
  ],
  version: "v2 · 2026-11",
};
