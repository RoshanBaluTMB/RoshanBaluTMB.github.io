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
