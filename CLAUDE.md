# Mohammad's Personal Website

## Project Overview
A personal portfolio website for Mohammad, an enterprise technology sales professional based in Riyadh, Saudi Arabia. The site showcases his work in enterprise tech sales, AI products, and historical insights.

## Tech Stack
- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS with CSS custom properties
- **Font**: Plus Jakarta Sans
- **Deployment**: Static export for Cloudflare Pages
- **Theme**: Dark mode by default with light mode toggle

## Design Philosophy
- **Minimalist**: Clean, focused design with ample whitespace
- **Monochrome**: Black/white color scheme with subtle grays
- **Typography-first**: Large, impactful headlines
- **Scroll-snap sections**: Full-screen sections with smooth snap scrolling
- **Geometric accents**: Subtle geometric shapes (circles, squares) as background decorations
- **Grain texture**: Subtle noise overlay for visual depth

## Site Structure
Single-page layout with 7 sections:
1. **Hero** - Name, tagline, location
2. **About** - Professional background, expertise areas
3. **Services** - Enterprise Transformation, AI Products, GTM & Revenue
4. **Projects** - Current builds (Stock Screener, SMB CRM, AI Marketing Agent, TravelX, SecureScan GCC)
5. **Content** - Newsletter "Chips for Thought" (Substack) and Podcast "The Hittin Files"
6. **Speaking** - Topics and formats
7. **Contact** - Form with Formspree/Web3Forms integration

## Key Components
- `Navigation.tsx` - Floating nav with section links, handles cross-page navigation
- `ThemeProvider.tsx` - Dark/light mode context
- `ThemeToggle.tsx` - Theme switcher button
- `Footer.tsx` - Centered footer with social links

## Content Details
- **Newsletter**: Chips for Thought on Substack (https://mohdayyubi.substack.com)
- **Podcast**: The Hittin Files - historical lessons
- **LinkedIn**: https://linkedin.com/in/mohdayyubi
- **Email**: hello@mohdayyubi.com

## Important Files
- `src/app/page.tsx` - Main content (edit this to change text/sections)
- `src/app/globals.css` - Design system (colors, typography, animations)
- `src/app/layout.tsx` - Root layout with geometric background elements
- `next.config.ts` - Static export configuration

## Design Decisions
1. **Scroll-snap**: Each section takes full viewport height, snaps when scrolling
2. **Reveal animations**: Content fades in and slides up when sections enter view
3. **Section dots**: Fixed navigation dots on right side to indicate current section
4. **Status pills**: Color-coded badges (green=Active, blue=In Development, gray=Planning)
5. **No images**: Design relies on typography and geometric shapes only
6. **Mobile-first**: Responsive design, geometric shapes hidden on mobile

## Form Configuration
Set `NEXT_PUBLIC_FORM_ENDPOINT` environment variable to your Formspree or Web3Forms endpoint.

## How to Edit Content
1. Open `src/app/page.tsx`
2. Find the section you want to edit (each section is clearly labeled with comments)
3. Modify the text content directly in the JSX
4. For projects, update the array in the Projects section
5. For services, update the array in the Services section

## Running Locally
```bash
npm run dev    # Development server at localhost:3000
npm run build  # Build for production
```

## Last Updated
February 2026 - Full redesign with scroll-snap sections and minimalist geometric aesthetic.
