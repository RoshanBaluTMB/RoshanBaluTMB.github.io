# RoshanBaluTMB.github.io

Personal engineering portfolio for **Roshan Balu T M B** — Automation Systems
Engineer specializing in industrial machine vision, robotics integration, and
MES automation.

**Live site:** https://RoshanBaluTMB.github.io

Plain HTML5 / CSS3 / vanilla JavaScript — no build step, no framework, no
`npm install` required. Fonts are loaded from Google Fonts via CDN with a
system-font fallback stack, so the page still renders correctly if the CDN is
slow or blocked.

## File structure

```
index.html        Single page — all sections live here as anchor-linked <section>s
css/style.css     Design system (custom properties) + layout + responsive rules
js/main.js        Typewriter effect, mobile nav toggle, scroll-spy nav highlighting
assets/
  resume.pdf      Downloadable résumé (linked from the "Download Résumé" button)
  favicon.svg     Browser tab icon
```

## Local development

No server or build step is required — just open `index.html` directly in a
browser (double-click it, or drag it into a browser window). It also works
served locally if you prefer, e.g.:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Making common edits

**Change the rotating job titles in the hero typewriter:**
Edit the `roles` array near the top of [js/main.js](js/main.js):

```js
var roles = [
  "Mechatronics Engineer",
  "Automation Systems Engineer",
  // add, remove, or reorder strings here
];
```

Also update the matching screen-reader text in the `<span class="sr-only">`
inside the hero section of `index.html` so it still lists the same roles for
assistive tech.

**Add a new project card:**
Copy an existing `<article class="card">...</article>` block inside the
`#projects` section of `index.html` and edit the heading, description, and
`<li>` tags inside `.card-tags`.

**Update work experience:**
Each job is a `<article class="timeline-item">` inside the `#experience`
section. Copy/edit the block, keeping the `.timeline-header` (title + date),
`.timeline-org` (company/location), and the `<ul>` of bullet points.

**Update the résumé PDF:**
Replace `assets/resume.pdf` with your updated file (keep the same filename),
or update the `href` in the "Download Résumé" button in `index.html` if you
rename it.

**Update the footer "Last updated" line:**
Edit the text directly in the `<footer>` at the bottom of `index.html`.

## Git workflow

```bash
git add -A
git commit -m "Describe your change"
git push
```

Changes on the `main` branch are picked up by GitHub Pages automatically —
no manual deploy step. It typically goes live within a minute or two of the
push.

## Enabling GitHub Pages (first-time setup)

1. Repo name must be exactly `RoshanBaluTMB.github.io` (the `.github.io`
   suffix on a repo named after your username makes GitHub auto-publish it at
   the root domain, with no extra config).
2. On GitHub: **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. Wait 1–2 minutes, then visit `https://RoshanBaluTMB.github.io`.

If the repo is brand new and you haven't pushed yet, push first — the Pages
option only shows a deployment once there's at least one commit on the
branch you select.

## Verification checklist

- [x] Typewriter cycles through all 6 roles and loops without stalling or
      console errors
- [x] `prefers-reduced-motion` respected — static final role text, no
      animation, `scroll-behavior` also set to `auto`
- [x] Zero console errors opening `index.html` directly (`file://`) or via a
      local/live server
- [x] W3C Nu HTML validator: 0 errors, 0 warnings
- [x] No horizontal overflow at 375px / 768px / 1440px (verified via
      `scrollWidth`/`clientWidth` against every element in the page)
- [x] All in-page nav links scroll to the correct section
- [x] External links (GitHub, LinkedIn, email, phone, résumé PDF) all
      resolve with no 404s
- [x] Résumé PDF downloads and opens correctly
- [x] No `<img>` elements are used (no headshot supplied); all decorative
      SVG icons are `aria-hidden`, so there is nothing missing alt text
- [x] Heading order is logical — one `<h1>`, section `<h2>`s, card/timeline
      `<h3>`s, no skipped levels
- [x] Visible focus outline on every link, button, and interactive element
      via `:focus-visible`
- [x] Color contrast passes WCAG AA (4.5:1) for every text/background
      combination in both light and dark mode — verified by computing
      contrast ratios for each token pair, not just spot-checked
- [x] No placeholder/lorem-ipsum text — all copy is drawn from the résumé
- [ ] Lighthouse Performance ≥ 90 / Accessibility ≥ 95 / Best Practices ≥ 90 —
      Lighthouse/Chrome DevTools were not available in the build sandbox
      (no Node/Chrome-with-devtools-protocol access); please run this once
      via Chrome DevTools → Lighthouse on the deployed GitHub Pages URL
- [ ] Site auto-updates live within ~2 minutes of a push to `main` — depends
      on GitHub Pages being enabled per the steps above; verify after first
      deploy
