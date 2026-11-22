# Critical review, pass 4: de-fsp B1 (Grundlagen, pharmacy German basics)

Slice: `content/de-fsp/B1/u01.json` … `u06.json`. Read against `content/CURRICULUM_FSP.md`, `content/AUTHOR_BRIEF_FSP.md`,
`content/FSP_HANDBOOK_SOURCE.md` and `content/SCHEMA.md`. There was no earlier pass-3 review of this slice in `review/`.
I checked every word (t, s, pl, ex, emoji), phrase, dialogue line, grammar explanation, table, example, exercise and its answer,
reading sentence and question, sentence (including `alts`), goal and title.

## 1. Verdict

This is a careful, accurate level. Every pharmaceutical statement I checked is correct for Germany and names the patient group
it applies to: ibuprofen 400 mg for adults (one tablet, at least 6 h apart, at most 3 a day, at most 4 days for pain and 3 for
fever without a doctor, not in the last trimester or with an active ulcer), paracetamol at most 4 g a day for adults, the
ibuprofen and low-dose ASS interaction, grapefruit with simvastatin, milk with some antibiotics, decongestant nasal spray at
most 7 days, insulin at 2–8 °C, no copayment under 18, the E-Rezept (mandatory since 2024; card, app or printout), AMK reporting,
and Rezeptur made by the PTA and released by the pharmacist. The German is natural Apotheken-German, the English is American, the
grammar explanations are right and well chosen for the job (Sie imperative, dative with body parts, seit and vor, modal verbs with
the *must not* trap, passive), and the dialogues follow the handbook's seven steps in miniature. The main weakness is level:
the learner is A1–A2 in general German and this is real B1, with long dialogue lines. The units also leave out some everyday legal
basics (prescription types, the exact copayment rule, aut idem and Rabattvertrag exchanges).

## 2. Fixed

| Unit | Path | Before → After | Reason |
|---|---|---|---|
| u04 | `grammar[0].exercises[7].alts` | `["Tut der Rücken Ihnen weh?"]` → `[]` | An unstressed pronoun after the full subject is unnatural (it only works with contrastive stress), so the alt taught a wrong default order. `Tut Ihnen der Rücken weh?` stays the only answer. |
| u01 | `sentences[3].alts` | none → `["Leider ist dieses Medikament verschreibungspflichtig."]` | A correct, natural order was missing from this order task (sentences of 8 words or fewer are used as word-order tasks). |
| u01 | `sentences[5].alts` | none → `["Bitte geben Sie mir Ihre Gesundheitskarte."]` | A correct, natural order was missing. |
| u01 | `sentences[6].alts` | none → `["Bitte warten Sie einen Moment, ich schaue nach."]` | A correct, natural order was missing. |
| u02 | `sentences[1].alts` | none → `["Bitte eine Packung mit zwanzig Filmtabletten."]` | A correct, natural order was missing. |
| u03 | `sentences[2].alts` | none → `["Wie oft nehmen Sie das Medikament am Tag?"]` | A correct, natural order was missing. |
| u04 | `sentences[0].alts` | added `"Der Magen tut mir seit gestern weh."` (the 2 existing alts kept) | A correct, natural order was missing. |
| u04 | `sentences[1].alts` | added `"Halsschmerzen habe ich seit drei Tagen."` | A correct, natural order (fronted object, very common in speech) was missing. |
| u05 | `sentences[2].alts` | none → `["Das Antibiotikum müssen Sie bis zum Ende nehmen."]` | A correct, natural order was missing. |
| u06 | `sentences[5].alts` | none → `["Von der Zuzahlung sind Kinder und Jugendliche befreit."]` | A correct order was missing. |

All files print OK with `tools/validate.py`. `tools/audit.py` reports nothing for de-fsp B1.

## 3. Remaining issues (need a decision or bigger work)

**High**
- *Missing legal basics the learner needs from day one.* B1 never names the prescription types (Muster 16 "rosa" Kassenrezept, blue
  Privatrezept, green recommendation slip, yellow BtM-Rezept, T-Rezept), how long a prescription is valid (Kassenrezept and
  E-Rezept: 28 days at the expense of the health insurance), the copayment rule (10 %, at least 5 €, at most 10 €, never more than
  the price; exemption certificate), or why the patient often gets a different brand (Rabattvertrag, aut idem, "Warum sieht meine
  Tablette anders aus?"). Suggestion: add 3–4 words and one reading to u01 or u06, or a short u07 "Rezept und Kasse".

**Medium**
- *Level gap.* The curriculum puts the learner at A1–A2, but these units use genitive after während, passive with modal verbs and
  Konjunktiv II, and dialogue lines of up to 30 words (u01 L10, u03 L10, u05 L5/L7). Suggestion: split the longest lines into two
  turns, or mark B1 as "start after A2 of de-en", as the handbook route suggests.
- *AMK reporting described as optional.* u05 R9 says "Die Apotheke **kann** die Nebenwirkung … an die AMK melden". For a future
  pharmacist this is a professional duty (Berufsordnung of the chambers; § 21 ApBetrO for Arzneimittelrisiken). Suggestion: "Die
  Apotheke meldet Nebenwirkungen an die Arzneimittelkommission der Deutschen Apotheker." Check the wording of the Berlin
  Berufsordnung first, which is why I did not change it.
- *Slightly unsafe message in an exercise.* u05 `grammar[0].exercises[5]`: "Das Medikament gibt es ohne Rezept. Sie ___ nicht zum
  Arzt gehen." It is grammatically fine, but it suggests that an OTC medicine means no doctor is needed. Suggestion: "… Sie müssen
  nicht zuerst zum Arzt gehen, um es zu bekommen." (Keep the answer `müssen`.)
- *Only a few picture questions are possible.* About two thirds of the words have no emoji, so the "Which picture is it?" step
  rarely appears. That is the right choice for abstract terms, but basic objects could take one (die Tube, die Packung, die Haut,
  der Magen); check that the picture is unambiguous before adding it.

**Low**
- u01 `grammar[1].exercises[6].alts` "Nehmen Sie mit Wasser die Tablette ein." and u02 `grammar[0].exercises[7].alts` "Ich hätte eine
  Packung mit zwanzig Tabletten gern." are grammatical but marked. Consider removing them so learners copy the unmarked order.
- u06 `grammar[1].exercises[3]` (Könntest) and `[5]` (Würdest) do not accept the other polite form. The verb hint in `s` makes
  the intended form clear, so this is acceptable. Adding `Würdest` or `Könntest` would avoid frustration.
- The PTA is called "Lena" in B1 u06 and "PTA Lena" in C1 u04. Pick one speaker name.
- All B1 reading and choice answers have index 0. The app shuffles options, so this does not matter now, but it would show in any
  printed or exported version.

## 4. Improvement ideas (prioritized)

1. **Recycle the handbook's core vocabulary systematically.** Several core entries never appear in the course: *das Granulat,
   die Augentropfen, entsorgen, absetzen (B1), die Überdosierung, die Vergiftung, der Husten (trocken / verschleimt) as a headword,
   Halsschmerzen as Pharyngitis*. Cough and sore throat are the most frequent OTC consultations and a likely Teil-1A case. Add a
   cough scene (dry versus chesty, a cough syrup for a child, honey and fluids, when to see a doctor) to u04 or u05.
2. **Doses by ear.** The exam fails candidates who mix up numbers. Add more short dose sentences (8 words or fewer, so the app
   uses them for dictation and listening): "Dreimal täglich fünf Milliliter." "Alle acht Stunden eine Tablette."
3. **Cultural fit for an Iranian pharmacist.** (a) Explain the difference from Iran, where many antibiotics and other Rx drugs are
   in practice sold without a prescription. In Germany all systemic antibiotics are strictly Rx, which is a good hook for u01 and
   later the C1 resistance monologue. (b) Ramadan: a customer who fasts asks how to take a three-times-daily antibiotic, which is
   realistic in Berlin and good practice of time expressions in u03. (c) u02 already mentions gelatin capsules: a customer who asks
   about pork gelatin and wants a vegetarian alternative is a natural, respectful scene.
4. **One dialogue with friction per level.** All six dialogues run smoothly. Add a customer who does not understand, insists on a
   product or is annoyed about a shortage or the copayment, so the learner practices "Habe ich Sie richtig verstanden …?" and
   polite refusal at B1.
5. **A consistent lay/technical format in `s`.** Most words use "· Laie: …", some use "· Fach: …" (u02 w09, u03 w04, u04 w03–w14).
   Both are useful; state the convention once in u01, or always give both sides, so the learner sees the pairs the exam's Teil 3B
   asks for.
6. **A bridge to C1.** The B1 lay-translation exercises (Verschreibungspflichtig, Suppositorium, peroral, Cephalgie, Diarrhö,
   Kontraindikation, Lieferengpass) are excellent. Add one per grammar point for the terms C1 will use (Obstipation, Emesis,
   Pruritus, Exanthem, Zystitis are already headwords) so the 3B list starts here.
