# Tenute Arena — Sito web

Sito vetrina statico di **Tenute Arena** — Olio Extravergine di Oliva Biologico, Piazza Armerina (Sicilia).

Realizzato in **HTML, CSS e JavaScript puri**: nessun framework, nessuna build, nessun database. Questo lo rende leggerissimo, veloce e pubblicabile praticamente ovunque (l'infrastruttura più semplice e portabile possibile).

## File del progetto

| File | Descrizione |
|------|-------------|
| `index.html` | Struttura e contenuti del sito (una sola pagina, con sezioni) |
| `styles.css` | Grafica, colori e layout responsive |
| `script.js` | Menu mobile, animazioni, switch lingua IT/EN, form contatti |

## Come vederlo in locale

Apri semplicemente `index.html` con un doppio clic, oppure avvia un server locale:

```bash
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Come pubblicarlo (nuova infrastruttura)

Essendo un sito statico puoi metterlo online **gratis** su una qualsiasi di queste piattaforme:

### GitHub Pages
1. Vai su **Settings → Pages** del repository.
2. In *Build and deployment* scegli **Deploy from a branch**.
3. Seleziona il branch e la cartella `/ (root)`, poi **Save**.
4. Il sito sarà online su `https://<utente>.github.io/<repo>/`.

### Netlify / Vercel
- Collega il repository e pubblica: rilevano automaticamente un sito statico, nessuna configurazione necessaria.
- Poi collega il dominio **www.tenutaarena.com** dalle impostazioni DNS del dominio.

## Personalizzazione

- **Foto reali**: il sito usa illustrazioni SVG al posto delle fotografie (non erano recuperabili in fase di ricostruzione). Per un risultato ottimale, sostituisci l'illustrazione nella sezione "La Tenuta" e aggiungi immagini dei prodotti reali. Metti i file in una cartella `images/` e sostituisci i blocchi `<svg>` / `.card-bottle` con tag `<img>`.
- **Testi**: tutti i contenuti sono in `index.html`. Ogni testo bilingue usa gli attributi `data-it` / `data-en`.
- **Colori**: modificabili in cima a `styles.css` (variabili `--olive-*`, `--gold`, `--cream`).
- **Contatti**: indirizzo, telefono ed email sono nella sezione `#contatti` e nel footer di `index.html`.

## Dati aziendali

- **Tenute Arena** — Società Semplice Agricola · P.IVA 01208380863
- C.da Grottacalda SP4 km 13,5 · 94015 Piazza Armerina (EN) — Sicilia
- Tel. 0935 959638 · 0935 1976468 · info@tenutaarena.com
