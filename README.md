# Tenute Arena — Sito vetrina (clone statico)

Clone statico **fedele** della parte vetrina del sito ufficiale
[tenutaarena.com](https://www.tenutaarena.com/) — Olio Extravergine di Oliva
Biologico, Piazza Armerina (Sicilia).

A differenza della versione precedente (ricostruita a mano), questo è un clone
dell'**HTML, CSS, font e struttura reali** scaricati direttamente dal sito
online. È completamente statico: nessun database, nessun server OpenCart,
nessuna piattaforma Flazio. Solo file che puoi pubblicare ovunque.

## Cosa contiene

13 pagine vetrina reali (il **negozio / e-commerce è escluso** come richiesto):

| Pagina | File |
|--------|------|
| Home | `index.html` |
| Tenute Arena (l'azienda) | `tenute-arena.html` |
| Contatti | `contatti.html` |
| Certificazioni | `certificazioni.html` |
| Linee Olio (panoramica) | `linee-olio.html` |
| Linea Sigillo | `linea-sigillo.html` |
| Linea GDO | `linea-gdo.html` |
| Linea Ho.Re.Ca. | `linea-horeca.html` |
| Oli Aromatizzati | `oli-aromatizzati.html` |
| Box Regalo | `box-regalo.html` |
| Privacy Policy | `privacy-policy.html` |
| Cookie Policy | `cookie-policy.html` |
| Condizioni di vendita e resi | `condizioni-vendita.html` |

Risorse locali:

- `fontstyle.css`, `customstyle.css` — i CSS reali del sito.
- `font/` — i 9 web-font reali (Bodoni Moda, TeX Gyre Heros, Benton Sans,
  Roboto…) scaricati dal sito.
- `img/` — favicon e immagine social (OG) reali.

Cosa è stato tolto per renderlo autonomo: il motore JavaScript di Flazio, i
widget chat/cookie, e tutti i link del **negozio** (shop, carrello, schede
prodotto, area privata) sono stati neutralizzati. I link social
(Facebook/Instagram) e la navigazione tra le pagine vetrina funzionano.

## ⚠️ Nota sulle immagini dei prodotti

Le **46 immagini di contenuto** (logo, foto degli oli, sfondi, icone) sono
ospitate sul CDN pubblico di Flazio **`globaluserfiles.com`**. Nell'ambiente in
cui è stato costruito questo clone quell'host era **bloccato dalla policy di
rete** (errore 403) e non risultava archiviato su Wayback, quindi non è stato
possibile scaricarle e renderle locali.

Per questo motivo le immagini nel codice puntano ancora agli URL pubblici
`https://globaluserfiles.com/...`: **si vedono correttamente in qualsiasi
browser con connessione normale**, ma non sono ancora incluse tra i file del
repository.

Per rendere il sito **100% self-contained** (consigliato) basta scaricare quelle
immagini una volta che l'host è raggiungibile e sostituire gli URL
`https://globaluserfiles.com/...` con percorsi locali `img/...`. Tutto il resto
(HTML, CSS, font, testi, layout) è già completamente locale e identico
all'originale.

## Vederlo in locale

```bash
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Pubblicarlo

Sito statico → pubblicabile gratis su **GitHub Pages**, **Netlify** o
**Vercel**. Su GitHub Pages: *Settings → Pages → Deploy from a branch*,
cartella `/ (root)`. Il file `.nojekyll` è già presente perché le cartelle
`font/` e `img/` vengano servite correttamente.

## Dati aziendali

- **Tenute Arena** — C.da Grottacalda SP4 km 13,5 · 94015 Piazza Armerina (EN)
- Tel. 0935 959638 · info@tenutaarena.com
