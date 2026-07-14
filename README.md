# Tenute Arena — Sito vetrina statico

Sito vetrina di **Tenute Arena** — Olio Extra Vergine di Oliva Biologico,
Piazza Armerina (Sicilia). *Dove l'olio è arte.*

Ricostruzione **pulita, statica e responsive** del sito, realizzata usando le
risorse reali recuperate dall'originale (foto dei prodotti, logo, font, colori
e testi). Il sito originale era un'app del builder Flazio che si montava nel
browser tramite un motore JavaScript proprietario collegato ai loro server:
non era riutilizzabile in modo autonomo. Questa versione riproduce lo **stesso
aspetto** con codice HTML/CSS/JS semplice, **senza dipendenze esterne**,
completamente di tua proprietà e pubblicabile ovunque.

## Pagine

Il **negozio / e-commerce è escluso** come richiesto: è un sito vetrina.

| Pagina | File |
|--------|------|
| Home | `index.html` |
| Tenute Arena (storia) | `tenute-arena.html` |
| Linee Olio (panoramica) | `linee-olio.html` |
| Linea Sigillo | `linea-sigillo.html` |
| Linea Alta Ristorazione (HERES) | `linea-horeca.html` |
| Oli Aromatizzati | `oli-aromatizzati.html` |
| Linea GDO | `linea-gdo.html` |
| Gift Box (Keramos) | `box-regalo.html` |
| Certificazioni | `certificazioni.html` |
| Contatti | `contatti.html` |
| Privacy Policy | `privacy-policy.html` |
| Cookie Policy | `cookie-policy.html` |
| Condizioni di vendita e resi | `condizioni-vendita.html` |

## Struttura

```
index.html + pagine .html      → le 13 pagine del sito
assets/styles.css              → design system (tema scuro, oro, tipografia)
assets/app.js                  → menu mobile + animazioni allo scroll
assets/img/                    → immagini reali (logo, hero, bottiglie, foto)
font/                          → i web-font reali (Bodoni Moda, TeX Gyre Heros)
img/                           → favicon e immagine social (OG)
```

Tutto è **self-contained**: nessuna chiamata a server esterni, nessun database,
nessun framework. Le immagini di contenuto sono state recuperate dal CDN
originale tramite l'Internet Archive e rese locali.

## Vederlo in locale

Apri tramite un server locale (non con doppio clic sul file):

```bash
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Pubblicarlo

Sito statico → pubblicabile gratis su **GitHub Pages**, **Netlify** o
**Vercel**. Su GitHub Pages: *Settings → Pages → Deploy from a branch*,
cartella `/ (root)`. Il file `.nojekyll` garantisce che le cartelle `assets/`,
`font/` e `img/` vengano servite correttamente.

## Personalizzazione rapida

- **Colori e tipografia**: variabili CSS in cima ad `assets/styles.css`
  (`--gold`, `--cream`, `--bg`…).
- **Testi**: direttamente nei file `.html`.
- **Immagini**: sostituisci i file in `assets/img/` mantenendo gli stessi nomi.
- **Contatti**: nella sezione footer di ogni pagina e in `contatti.html`.

## Dati aziendali

- **Tenute Arena** — S.S. Agricola · P.IVA 01208380863
- C.da Grottacalda SP4 km 13,5 · 94015 Piazza Armerina (EN) — Sicilia
- Tel. 0935 959638 · 0935 1976468 · info@tenutaarena.com
