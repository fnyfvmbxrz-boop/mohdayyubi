# Mohammad's Personal Website

## Project Overview
A personal portfolio website for Mohammad, an enterprise technology sales professional based in Riyadh, Saudi Arabia. The site showcases his work in enterprise tech sales, AI products, and historical insights.

## Tech Stack
- **Framework**: Next.js 16+ with App Router
- **Styling**: Tailwind CSS with CSS custom properties
- **Fonts**: Inter (display headlines), Plus Jakarta Sans (body text)
- **Deployment**: Static export for Cloudflare Pages
- **Theme**: Dark mode by default with light mode toggle

## Design Philosophy (Ultra-Minimal, Linear/Vercel Inspired)
- **Ultra-minimal**: Clean, focused design inspired by Linear, Stripe, Vercel
- **Modern sans-serif**: Bold geometric Inter font for headlines (no italic serif)
- **Gold accent**: #D4A944 as the primary accent color in both modes
- **Scroll-snap sections**: Full-screen sections with smooth snap scrolling on desktop
- **Subtle interactions**: Hover states with transform and opacity, glow effects on buttons
- **No images**: Design relies purely on typography and spacing

## Color System
```
Dark Mode (Default):
- Background: #0a0a0a
- Foreground: #fafafa
- Accent: #D4A944 (gold)
- Muted: #171717
- Border: #262626

Light Mode:
- Background: #ffffff
- Foreground: #0a0a0a
- Accent: #D4A944 (gold - same in both modes)
- Muted: #f5f5f5
- Border: #e5e5e5
```

## Site Structure
Single-page layout with 7 sections:
1. **Hero** - Name, tagline, location (Riyadh, Saudi Arabia)
2. **About** - Professional background, 4 expertise cards
3. **Services** - 3 numbered service cards with "Best for" audience
4. **Projects** - 5 project cards with status pills (Active, In Development, Planning)
5. **Content** - Newsletter "Chips for Thought" and Podcast "The Hittin Files"
6. **Speaking** - Topics list and format pills
7. **Contact** - Form with direct contact options

## Key Components
- `Navigation.tsx` - Floating glass nav with section links, scroll-aware styling
- `ThemeProvider.tsx` - Dark/light mode context with localStorage persistence
- `ThemeToggle.tsx` - Theme switcher button (sun/moon icons)
- `Footer.tsx` - Minimal footer with brand, social icons, copyright
- `ContactForm.tsx` - Form with loading/success/error states
- `icons/index.tsx` - SVG icon components

## Content Details
- **Newsletter**: Chips for Thought on Substack (https://mohdayyubi.substack.com)
- **Podcast**: The Hittin Files - historical lessons
- **LinkedIn**: https://linkedin.com/in/mohdayyubi
- **Email**: hello@mohdayyubi.com

## Important Files
- `src/app/page.tsx` - Main content (edit this to change text/sections)
- `src/app/globals.css` - Complete design system (colors, typography, animations)
- `src/app/layout.tsx` - Root layout with font configuration
- `src/components/icons/index.tsx` - All SVG icon components
- `next.config.ts` - Static export configuration

## CSS Classes Reference
```css
/* Typography */
.display-text  - Large hero name (Inter, 700 weight, -0.03em tracking)
.headline      - Section headings (Inter, 600 weight, -0.02em tracking)
.subheadline   - Descriptive text (Plus Jakarta Sans, muted color)
.section-number - Small labels like "01 — About"

/* Layout */
.snap-container - Scroll-snap parent
.snap-section   - Full-viewport section
.reveal         - Fade-up animation on scroll
.stagger-children - Stagger children animations

/* Components */
.card        - Card with hover lift effect
.glass-card  - Frosted glass nav background
.btn         - Pill-shaped button base
.btn-primary - Gold accent button
.btn-secondary - Ghost/outline button
.btn-sm      - Smaller button variant
.status      - Status pill base
.status-active - Gold (Active)
.status-dev    - Blue (In Development)
.status-soon   - Gray (Planning)
.pill        - Tag/format pill
.icon-btn    - Square icon button
```

## Design Tokens (CSS Variables)
```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-full: 9999px;
--shadow-glow: 0 0 40px rgba(212, 169, 68, 0.15);
```

## Responsive Behavior
- **Desktop (>1024px)**: Scroll-snap enabled, section dots visible, 3-column grids
- **Tablet (640-1024px)**: Scroll-snap disabled, 2-column grids
- **Mobile (<640px)**: Section dots hidden, single-column, full-width buttons

## Form Configuration
Set `NEXT_PUBLIC_FORM_ENDPOINT` environment variable to your Formspree or Web3Forms endpoint.

## How to Edit Content
1. **Text/sections**: Edit `src/app/page.tsx` (arrays at top of file)
2. **Projects**: Update `projects` array in page.tsx
3. **Services**: Update `services` array in page.tsx
4. **Speaking topics**: Update `speakingTopics` array in page.tsx
5. **Colors**: Edit CSS variables in `globals.css`
6. **Icons**: Add to `src/components/icons/index.tsx`

## Running Locally
```bash
npm run dev    # Development server at localhost:3000
npm run build  # Build for production (outputs to /out)
```

## Project Structure
```
src/
├── app/
│   ├── globals.css      # Design system
│   ├── layout.tsx       # Root layout, fonts
│   └── page.tsx         # Main page content
├── components/
│   ├── icons/
│   │   └── index.tsx    # All SVG icons
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
```

## Maintenance Guidelines
**IMPORTANT**: This file is the single source of truth for this project. When making changes:
1. **After any design/styling changes**: Update the Color System, CSS Classes Reference, or Design Tokens sections
2. **After adding components**: Add them to Key Components and Project Structure
3. **After changing project structure**: Update the Project Structure section
4. **After changing content arrays**: Note the change in Site Structure if sections change
5. **Always update "Last Updated"**: Include date and brief description of changes

This ensures any future session has complete context without needing to explore the codebase.

## Last Updated
February 2026 - Complete redesign with ultra-minimal Linear/Vercel-inspired aesthetic, Inter display font, refined gold accent color system.
