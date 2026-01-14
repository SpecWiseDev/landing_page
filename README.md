# I'm QA - Landing Page

A modern, premium landing page for **I'm QA** — an AI-powered QA testing platform that helps developers ship software with confidence.

Built with Next.js 14+, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Geist](https://vercel.com/font)
- **Deployment**: [Vercel](https://vercel.com)

## Features

- Dark theme with premium aesthetic
- Smooth scroll animations
- Responsive design (mobile-first)
- Glassmorphism dropdown navigation
- Interactive FAQ accordion
- Optimized for performance (90+ Lighthouse score)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SpecWiseDev/landing_page.git
   cd landing_page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── public/
│   ├── im-qa-icon.svg          # Brand icon
│   ├── im-qa-logo-dark.svg     # Logo (dark theme)
│   ├── im-qa-logo-light.svg    # Logo (light theme)
│   └── screenshots/            # Product screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles
│   │   └── icon.svg            # Favicon
│   └── components/
│       └── sections/
│           ├── navigation.tsx  # Header navigation
│           ├── hero.tsx        # Hero section
│           ├── problem-solution.tsx
│           ├── features.tsx
│           ├── testimonial.tsx
│           ├── full-cycle.tsx
│           ├── state-of-art.tsx
│           ├── faq.tsx
│           ├── final-cta.tsx
│           └── footer.tsx
├── tailwind.config.ts
└── package.json
```

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#121212` | Page background |
| Surface | `#1a1a1a` | Cards, dropdowns |
| Accent | `#d4a574` | CTAs, highlights |
| Text Primary | `rgba(250, 249, 246, 0.9)` | Headings |
| Text Secondary | `rgba(250, 249, 246, 0.5)` | Body text |

## License

This project is proprietary software. All rights reserved.

---

Built with care by the I'm QA team.
