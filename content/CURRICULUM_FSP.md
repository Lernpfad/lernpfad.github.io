# Lernpfad — Pharmazie-Deutsch (course `de-fsp`): pharmacy German for the Fachsprachprüfung (FSP)

Learner: Sanaz, a foreign-trained (non-EU) pharmacist moving to Berlin. General German now A1–A2 (she does the general German
course `de-en` in parallel); goal: the C1 **Fachsprachprüfung** of the Apothekerkammer Berlin. Explanations in **English**.
Source material (read it — it is the basis of this course): `content/FSP_HANDBOOK_SOURCE.md` (the FSP handbook Ehsan made with Claude:
exam format, the seven-step consultation, Redemittel, documentation structure, SBAR case talk, Fachsprache → Laiensprache list,
core vocabulary, grammar toolkit, three mock exams with answer keys).

Same JSON schema as the other courses (`content/SCHEMA.md`); German has no `pr` fields. Files `content/de-fsp/B1/u01…u06.json`
(level "B1", Basics) and `content/de-fsp/C1/u01…u08.json` (level "C1", Exam). Format models: `content/de-en/B2/u01.json` (C1 style) and
`content/de-en/A2/u04.json` (simpler style).

## Content rules (pharmacy specific)
- **Pharmaceutical accuracy is critical.** Only standard, uncontroversial facts (as in the handbook and the official Fachinformation);
  doses only where they are the well-known standard OTC/label doses (e.g. ibuprofen 400 mg, max. 1200 mg/day in self-medication for adults,
  max. 4 days for pain without a doctor); always say "simplified for language practice" in the reading's English line where a
  Fachinformation is quoted. No individual medical advice; never present a dose without the patient group it applies to.
- Use correct German pharmacy terminology: Arzneimittel, Wirkstoff, Darreichungsform, Filmtablette, Brausetablette, Suspension,
  Zäpfchen (Suppositorium), Fachinformation, Packungsbeilage (Beipackzettel), rezeptpflichtig / verschreibungspflichtig, apothekenpflichtig,
  Selbstmedikation, Wechselwirkung, Nebenwirkung / UAW, Kontraindikation, AMK (Arzneimittelkommission der Deutschen Apotheker),
  Medikationsplan, Lieferengpass, Großhandel, Rezeptur, BtM, Kühlkette …
- **Words**: technical term in `t` (nouns with article and `pl`); `s` = English meaning + " · Laie: <plain German>" where a lay term exists
  (e.g. t "die Mykose", s "fungal infection · Laie: die Pilzerkrankung"). Lay terms themselves can also be headwords at B1.
- Patient talk always in polite **Sie**-form and in lay language; colleague/doctor talk in technical language.
- Dialogues: B1 = short, clear pharmacy scenes; C1 = exam-like (Beratungsgespräch ~12 lines, Fachgespräch on the phone, etc.).
  Speakers: Apothekerin Frau Ahmadi / Apotheker Herr Ahmadi (the pharmacist), patients Frau Richter, Herr Klein, Frau Becker,
  Frau M. (mother of Ben, 4), Dr. Weber (doctor), PTA Lena. One `f` and one `m` speaker per dialogue.
- `reading`: B1 = simple texts (a Packungsbeilage extract, a pharmacy notice, a short email); C1 = Fachinformation extracts,
  documentation notes, UAW reports, an opinion text for the monologue. 4–5 questions in German.
- Exercises (6–8 per grammar point): `choice`, `type`, `order`; plus **lay-translation** items as `type` exercises
  ("Mykose = ___ (Laiensprache)") listing all acceptable answers.
- Sizes as in CURRICULUM_NEW_LEVELS.md (words 12–16, phrases 6–8, dialogue 8–12 lines, grammar 2 points, reading, 7–8 sentences, goals 3–4 in English).
- Avoid "/", "=", "→" and abbreviations in sentences the voice reads (write "zum Beispiel", "dreimal täglich", "Milligramm" in sentences;
  "mg" is fine in headword `t` only if natural).

## B1 · Basics (Grundlagen) — simpler German (B1 grammar), pharmacy everyday language, lay terms first
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | In der Apotheke: Kundinnen und Kunden begrüßen, Rezept oder Selbstmedikation, „Für wen ist das Medikament?“ | W-Fragen und Ja/Nein-Fragen in der Sie-Form | Imperativ mit Sie (Nehmen Sie …, Kommen Sie bitte …) |
| u02 | Darreichungsformen: Tablette, Kapsel, Saft, Tropfen, Salbe, Creme, Zäpfchen, Spray, Pflaster | Plural und Mengenangaben (eine Packung mit 20 Tabletten, 100 Milliliter) | Adjektivendungen bei Darreichungsformen (eine kühlende Salbe, ein flüssiges Arzneimittel) |
| u03 | Einnahme und Dosierung: dreimal täglich, vor dem Essen, unzerkaut, mit Wasser | Zeitangaben: vor, nach, zu, während + Genitiv; morgens, abends | Zahlen und Mengen sprechen (eine halbe Tablette, zweimal täglich zehn Tropfen) |
| u04 | Körper und Beschwerden in Laiensprache: Kopf, Hals, Magen, Haut; Schmerzen, Husten, Fieber, Durchfall | „Mir tut … weh“ / „Ich habe …schmerzen“; Dativ bei Körperteilen | seit + Dativ und „Wie lange schon?“ |
| u05 | Wirkung, Nebenwirkung, Wechselwirkung einfach erklären | Modalverben für Ratschläge und Verbote (sollen, müssen, dürfen nicht, nicht müssen) | wenn-Sätze (Wenn das Fieber steigt, gehen Sie bitte zum Arzt.) |
| u06 | Apothekenalltag: bestellen, liefern, Kühlschrank, Haltbarkeit, Zuzahlung, Lieferengpass, PTA und Team | Passiv Präsens (Das Medikament wird bestellt.) | Höfliche Bitten im Team (Könntest du …? Würden Sie bitte …?) |

## C1 · Exam (Fachsprachprüfung) — exam parts, C1 German
| Unit | Theme | Grammar 1 | Grammar 2 |
|---|---|---|---|
| u01 | Die FSP im Überblick; Beratungsgespräch I: die sieben Schritte, Beschwerden und Risiken erfragen | Indirekte Fragen und höfliche Fragen (Darf ich fragen, ob …? Könnten Sie mir sagen, seit wann …?) | Fragen zu Risiken: Vorerkrankungen, Allergien, Schwangerschaft, andere Arzneimittel (Fragetechniken, Rückfragen) |
| u02 | Beratungsgespräch II: empfehlen, Anwendung erklären, Grenzen der Selbstmedikation nennen, Verständnis sichern | Konjunktiv II für Empfehlungen (Ich würde Ihnen … empfehlen; Es wäre besser, …) | Konditional- und Konzessivsätze (falls, sofern, solange, auch wenn) |
| u03 | Selbstmedikation bei Schmerzen (Mock 1, Ibuprofen 400 mg): Fachinformation lesen und in Laiensprache erklären | Partizipialattribute in der Fachinformation (die empfohlene Tageshöchstdosis, bei bestehender Schwangerschaft) | Nominalstil ↔ Verbalstil (bei Einnahme → wenn Sie … einnehmen) |
| u04 | Teil 1B – Monolog (Stellungnahme): Rx/OTC, Antibiotikaresistenz, Lieferengpässe, Rolle der Apotheke | Redemittel und Konnektoren für die Argumentation (einerseits … andererseits, zudem, dennoch, folglich) | Meinungen und Einschränkungen ausdrücken (Ich bin der Ansicht, dass …; Zwar …, aber …) |
| u05 | Teil 2 – Schriftstück I: Notiz über ein Beratungsgespräch (Kopfdaten, Anamnese, Arzneimittel, Beratung, Weiteres Vorgehen) | Passiv und Zustandspassiv in der Dokumentation (Es wurde empfohlen …; Der Patient wurde informiert …) | Satzverknüpfung im Fließtext statt Stichpunkte (daraufhin, anschließend, da, sodass) |
| u06 | Teil 2 – Schriftstück II: UAW-Meldung (Mock 2, Amoxicillin-Saft, Kind mit Exanthem) | Indirekte Rede mit Konjunktiv I (Die Mutter berichtet, das Kind habe …) | Zeitenfolge: Plusquamperfekt und temporale Konnektoren (nachdem, seitdem, bevor) |
| u07 | Teil 3A – Fachgespräch mit Ärztin/Arzt (SBAR; Clarithromycin + Simvastatin) | Höfliche Vorschläge und Rückfragen (Wäre es möglich, …? Käme … in Frage?) | Fachsprachliche Nominalgruppen (Erhöhung des Myopathierisikos, Pausierung der Therapie) |
| u08 | Teil 3B – Fachsprache ↔ Laiensprache; Mock 3 (Asthma-Inhalatoren, Lieferengpass, Inhalationstechnik) | Fachbegriffe erklären mit Relativsätzen und Umschreibungen (Das ist ein Mittel, das …) | Wortbildung: griechisch-lateinische Fachwörter und ihre deutschen Entsprechungen (-itis = Entzündung, Hyper-/Hypo-) |
