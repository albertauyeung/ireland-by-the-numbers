# Réalachas — Ireland by the numbers

A small web app that turns Irish open data into something you can read on
the bus. Daily fact, story explorations, and a chart explorer that talks
directly to the CSO PxStat JSON-stat API.

## Features

- **Today** — A daily Ireland fact, sourced and shareable as an image.
- **Stories** — Short, chart-led explainers (population since 1841,
  languages of Ireland, county comparisons, cattle vs. people).
- **Explorer** — Pick any CSO PxStat table by code, slice by category,
  visualise the time series.
- **Share-as-image** — Save fact and chart cards as PNG.
- **Live data** — Charts hit `data.cso.ie` via the JSON-stat 2.0 endpoint.
  CORS is enabled by the CSO so this is a fully client-side app.

## Tech

- Vite + React 19 + TypeScript
- Tailwind CSS 3
- Recharts for visualisations
- `html-to-image` for PNG export
- React Router 7 for routing

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Data sources

All data is reused under CC BY 4.0 / Irish PSI licence with attribution shown
in the UI:

- CSO PxStat — https://data.cso.ie
- Census 2022 — https://www.cso.ie/en/statistics/population/census2022/
- Met Éireann Open Data — https://www.met.ie/about-us/specialised-services/open-data
- SEAI energy statistics — https://www.seai.ie

## Layout

```
src/
  main.tsx               # Router root
  index.css              # Tailwind base + design tokens
  components/            # Layout, Nav, Footer, FactCard, StatChart, ShareButton, ...
  data/                  # Curated facts, stories, and explorer table list
  lib/
    pxstat.ts            # JSON-stat 2.0 client + slicing helpers
    useTable.ts          # React hook for fetching a CSO table
  pages/
    Home.tsx
    Stories.tsx
    Story.tsx
    Explorer.tsx
    About.tsx
    NotFound.tsx
    stories/             # Per-story content
```
