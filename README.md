# Arayan Savaliya — Portfolio

A modern, dark-themed, glassmorphism portfolio for **Arayan Savaliya**, Graphic Designer & UI/UX Designer based in Rajkot, Gujarat, India.

Built with **React + Vite + Tailwind CSS + Framer Motion + React Icons**.

## ✨ Features

- Dark navy/golden theme with glassmorphism cards throughout
- Cursor-reactive ambient spotlight in the hero (signature interaction)
- Smooth scroll navigation with an active-section indicator pill
- Animated skill bars, tabbed by category (Graphic Design / UI/UX / Development)
- Filterable project grid with 3D tilt-on-hover cards and a case-study modal
- 5-step design process timeline (Research → Wireframe → Prototype → Testing → Final Design)
- Certificates grid, full contact section with working form UI, footer with social links
- Scroll progress bar + back-to-top button
- Fully responsive, mobile-first, keyboard-accessible (visible focus rings)
- Respects `prefers-reduced-motion`
- SEO meta tags + JSON-LD structured data in `index.html`

## 📁 Project Structure

```
arayan-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── ProjectVisual.jsx
│   │   ├── Process.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── BackToTop.jsx
│   ├── data/
│   │   └── content.js      ← all site copy lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The site runs at `http://localhost:5173` by default.

## ✏️ Customizing Content

Almost everything — name, tagline, skills, projects, certificates, contact info — lives in **`src/data/content.js`**. Edit that one file to update the entire site's copy without touching component code.

### Replacing placeholder visuals

- **Profile photo**: in `src/components/Hero.jsx`, replace the `src` on the `<img>` tag (currently a placeholder avatar) with your own photo, e.g. `/profile.jpg` placed in `public/`.
- **Project screenshots**: `src/components/ProjectVisual.jsx` currently renders abstract SVG placeholder art per project so the site works out of the box with zero assets. Swap these for real `<img>` screenshots in `ProjectCard.jsx` and `ProjectModal.jsx` once you have them — drop images in `public/projects/` and reference them by path.
- **Resume / CV**: update `resumeUrl` in `content.js` and wire up a download link wherever needed.
- **Social links**: update `linkedin`, `github`, and the Instagram URL in `Footer.jsx` / `content.js`.

## 🎨 Design Tokens

| Token | Hex | Usage |
|---|---|---|
| Primary | `#F59E0B` | CTAs, highlights, active states |
| Secondary | `#0F172A` | Card surfaces, glass backgrounds |
| Background | `#020617` | Page base |
| Accent | `#38BDF8` | Secondary highlights, links |
| Text | `#FFFFFF` | Primary text |

Fonts: **Space Grotesk** (display/headings), **Inter** (body), **JetBrains Mono** (labels, eyebrows, stats).

## ♿ Accessibility

- All interactive elements have visible focus states (`focus-ring` utility)
- Semantic HTML landmarks (`header`, `main`, `footer`, `section`)
- Reduced-motion media query disables animations for users who prefer it
- Form inputs have associated `<label>` elements

## 📦 Deployment

This is a static Vite build — deploy the `dist/` folder to **Vercel**, **Netlify**, **GitHub Pages**, or any static host.

```bash
npm run build
# upload the generated dist/ folder
```
