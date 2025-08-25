# Offbeat Travel Trove

<p align="center">
  <img src="public/images/offbeatpic.png" alt="Offbeat Travel Trove cover" />
</p>

Discover lesser-known destinations, activities, and travel ideas. This project is a small, fast React + Vite app showcasing curated offbeat trips with a clean UI and snappy UX.

If you're browsing the code: welcome! This README keeps things short and practical.

## Features

- Minimal, modern UI with Tailwind and shadcn/ui
- Curated destinations and activities from `src/data/`
- Fast dev experience via Vite
- Mobile-friendly layout

## Contributing

Contributions are welcome! To propose a change:

1. Fork the repository and create a new branch.
2. Make your changes with clear commit messages.
3. Run and verify locally: `npm install && npm run dev`.
4. Open a pull request with a brief description of the change and screenshots if UI is affected.
5. Please keep PRs focused and small where possible.

## Tech stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS

## Getting started

Prereqs: Node.js (LTS) and npm installed.

```bash
git clone <YOUR_GIT_URL>
cd offbeat-travel-trove2
npm install
npm run dev
```

Open the local URL shown in your terminal (usually http://localhost:5173).

## Useful scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

## Project structure

Key directories:

- `src/components/` — UI components (e.g., `destination/`, `state/`, `transport/`)
- `src/data/` — content data sources (e.g., `destinations.ts`, `activities.ts`)
- `public/images/` — destination media assets

## Deploy

Any static host works (the app builds to `dist/`):

- Netlify: connect repo or deploy `dist/`
- Vercel: import repo (Framework: Vite)
- GitHub Pages: push the `dist/` output or use an action

Basic build:

```bash
npm run build
```

Then upload the `dist/` folder to your hosting provider.

---

Questions or ideas? Feel free to open an issue or PR.
