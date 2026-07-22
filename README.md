# Tasnim Jubaier — Portfolio

Personal portfolio website for Tasnim Jubaier, software engineer and AI code evaluator based in Dhaka, Bangladesh.

**Live site:** _coming soon_  
**Repo:** https://github.com/tasnimjubaier/portfolio

---

## Stack

- React 19 + React Router v6
- CSS Modules
- No UI framework — built from scratch
- Dark / light theme (CSS custom properties, persisted to `localStorage`)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Hero, stats, featured project |
| `/about` | Bio, work history, education, skills — sidebar TOC |
| `/work` | Project case studies (expandable) |
| `/cp` | Competitive programming record — platforms, contests, awards |
| `/contact` | Open-to list + all contact/profile links |

## Running locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

Output goes to `build/`. Ready to deploy to any static host (Vercel, Netlify, GitHub Pages).

## Project structure

```
src/
├── App.js                  # Router + theme state
├── index.css               # Theme tokens (CSS vars), reset, dot-grid bg
├── components/
│   └── Nav/                # Fixed pill nav — icons, live clock, theme toggle
└── pages/
    ├── Home/               # Hero + stats + featured project card
    ├── About/              # Two-column layout with sticky sidebar TOC
    ├── Work/               # Case study cards (expandable)
    ├── CP/                 # Competitive programming record
    └── Contact/            # Links + open-to section
```

## Adding your headshot

Drop `headshot.jpg` into `/public/` and update `About/index.js`:

```js
// In the avatarCircle div, replace the "TJ" text with:
style={{ backgroundImage: "url('/headshot.jpg')", backgroundSize: 'cover' }}
```

---

Built by [Tasnim Jubaier](mailto:tasnimjubaier@gmail.com)
