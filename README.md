# Tulas International School — Homepage Redesign

A modern, animated, responsive homepage redesign for the Tulas International School (TIS) frontend assessment. The experience preserves the school's core positioning while introducing a premium editorial visual system, clear conversion paths, and lightweight motion.

## Live Demo

- **Live URL:** Add the Vercel deployment URL after deployment.
- **Repository:** Add the public GitHub repository URL after pushing.

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** CSS with responsive design tokens and theme variables
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Standout Features

1. **Custom Cursor** — a spring-based pointer ring on fine-pointer devices; hidden for touch/coarse-pointer devices.
2. **Scroll-Triggered Reveals** — short, one-time viewport animations for sections and cards.
3. **Dark / Light Theme** — theme state is persisted with `localStorage` and applied through CSS variables.
4. **Scroll Progress Bar** — a smooth reading-progress indicator powered by Framer Motion.

## Page Sections

- Hero / primary conversion area
- About / Tulas philosophy
- Academics
- Life at TIS / sports and campus experience
- Student stories
- Admissions CTA
- Footer

## Component Architecture

```text
src/
├── components/
│   ├── ui/               # Reusable UI primitives
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   └── SectionHeading.jsx
│   ├── layout/           # Global page chrome
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/         # Page-level sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Academics.jsx
│   │   ├── Life.jsx
│   │   ├── Stories.jsx
│   │   └── Admissions.jsx
│   └── animation/        # Reusable motion drivers
│       ├── CustomCursor.jsx
│       ├── Reveal.jsx
│       ├── ScrollProgress.jsx
│       └── ThemeToggle.jsx
├── hooks/
│   ├── useMousePosition.js
│   └── useTheme.js
├── data/
│   └── siteData.js
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## Getting Started Locally

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

### 3. Create a production build

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

### 5. Run the code-quality check

```bash
npm run lint
```

## Responsive Testing

The layout is designed mobile-first and should be checked at:

- **375px** — mobile
- **768px** — tablet
- **1280px+** — desktop

The custom cursor is intentionally hidden for coarse-pointer/touch devices.

## Performance & UX Notes

- Entrance animations use short opacity/transform transitions.
- `whileInView` animations run once to avoid unnecessary repeated work.
- The cursor uses transform-based Framer Motion animation rather than layout properties.
- Theme changes use CSS variables rather than duplicating component styles.
- Interactive targets are designed for touch-friendly use on smaller screens.
- A reduced-motion media query reduces non-essential motion for users who request it at OS level.

## Brand Identity

The redesign retains TIS's school positioning, Dehradun context, CBSE curriculum messaging, boarding/day-school model, admissions CTA, and school-focused storytelling while presenting them through a modern visual hierarchy.

## Deployment

The project is configured for Vercel/Netlify-style static deployment. For Vercel, import the GitHub repository and use:

- **Build command:** `npm run build`
- **Output directory:** `dist`

The included `vercel.json` enables SPA fallback routing.

## Final Submission Checklist

- [ ] `npm run build` succeeds
- [ ] `npm run lint` succeeds without errors
- [ ] Custom cursor tested on desktop
- [ ] Scroll reveals tested
- [ ] Theme switcher tested
- [ ] Scroll progress tested
- [ ] 375px mobile tested
- [ ] 768px tablet tested
- [ ] 1280px+ desktop tested
- [ ] Browser console checked for errors
- [ ] No unused dependencies or dead code
- [ ] Public GitHub repository created
- [ ] Live Vercel/Netlify URL tested
- [ ] Google Form submitted
