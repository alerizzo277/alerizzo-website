# Alessandro Rizzo — Portfolio

Portfolio personale statico, migrato da Angular/Ionic ad **Astro, TypeScript, HTML semantico e CSS nativo**. Include biografia espandibile, timeline e modali accessibili, progetto Motory e carosello delle tecnologie. Nessun backend o framework UI aggiuntivo.

## Requisiti e comandi

Node.js **>=22.23.4** e npm; i workflow utilizzano Node 24.

```sh
npm ci
npm run dev -- --background
npm run build
npm run preview
```

Il server di sviluppo usa normalmente http://localhost:4321; `preview` serve la build locale. Per gestire il server in background: `npm run astro -- dev status`, `npm run astro -- dev logs`, `npm run astro -- dev stop`.

La build statica viene generata in **dist/**. Dopo la build, eseguire i test esistenti con:

```sh
node --test tests/*.test.ts
```

## Organizzazione

- `src/components/`: layout, profilo, timeline/modali, Motory e tecnologie.
- `src/data/`: contenuti strutturati e metadati.
- `src/i18n/`: dizionari tipizzati IT/EN e runtime leggero.
- `src/layouts/`, `src/pages/`, `src/styles/`: struttura Astro e CSS condivisi.
- `src/utils/`: calcolo e formattazione delle durate.
- `public/`: foto, loghi, favicon e tesi PDF; asset serviti localmente.
- `tests/`: verifiche delle durate e della copertura i18n.

Lingue disponibili: `it-IT` e `en-GB`, con fallback italiano. La scelta manuale resta compatibile con il sito precedente tramite `aleRizzoWebsiteSelectedLanguage`: preferenza salvata, poi lingua browser, poi italiano. Lo sfondo definitivo D1 non utilizza preferenze grafiche.

## Firebase Hosting

Il progetto Firebase esistente **alerizzo** e il dominio attuale sono mantenuti. `firebase.json` pubblica `dist/`, senza rewrite SPA; non servono adapter o servizi Firebase aggiuntivi. Le credenziali restano nei GitHub Secrets.

I workflow esistenti installano con `npm ci`, compilano e verificano i test: un push su `master` pubblica live, mentre una PR dallo stesso repository genera una preview. Un futuro push a una PR aperta può quindi avviare un deploy di preview. La migrazione locale non esegue commit, push o deploy.

Il repository e lo storico Git originali sono conservati. La precedente applicazione resta consultabile nello storico; la directory Astro temporanea adiacente rimane una copia di riferimento fino alla pubblicazione definitiva. Le convenzioni di sviluppo sono in [AGENTS.md](AGENTS.md).
