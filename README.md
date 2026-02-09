# Mohammad's Personal Website

A personal website built with Next.js, Tailwind CSS, and deployed on Cloudflare Pages.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Font:** Space Grotesk
- **Hosting:** Cloudflare Pages
- **Forms:** Configurable endpoint (Formspree, Web3Forms, or Cloudflare Workers)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mohdayyubi.git
cd mohdayyubi
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

## Building for Production

Build the static site:
```bash
npm run build
```

This generates a static export in the `out` directory.

## Deploying to Cloudflare Pages

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" > "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 18 or higher
6. Deploy

Cloudflare will automatically rebuild and deploy on every push to the main branch.

### Option 2: Direct Upload

1. Build the site locally:
```bash
npm run build
```

2. Go to Cloudflare Pages dashboard
3. Create a new project with direct upload
4. Upload the `out` folder

## Environment Variables

For the contact form to work, set the following environment variable:

- `NEXT_PUBLIC_FORM_ENDPOINT`: Your form submission endpoint (Formspree, Web3Forms, etc.)

### Setting Up Forms

**Formspree:**
1. Create a form at [formspree.io](https://formspree.io)
2. Set `NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID`

**Web3Forms:**
1. Get an access key at [web3forms.com](https://web3forms.com)
2. Set `NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit`
3. Add your access key to the form data

## Customization

### Adding Substack Embed

Replace the placeholder in these files with your actual Substack embed code:
- `src/app/page.tsx` (homepage)
- `src/app/content/page.tsx` (content hub)
- `src/app/contact/page.tsx` (contact page)

### Adding Podcast Embed

Replace the placeholder in `src/app/content/page.tsx` with your Spotify/Apple Podcasts embed code.

### Updating Social Links

Edit the following files to update your social links:
- `src/components/Footer.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`

### Changing the Domain

Update the sitemap base URL in `src/app/sitemap.ts`:
```typescript
const baseUrl = "https://yourdomain.com";
```

## Project Structure

```
src/
├── app/
│   ├── about/
│   ├── contact/
│   ├── content/
│   ├── projects/
│   ├── services/
│   ├── speaking/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
└── components/
    ├── Footer.tsx
    ├── Navigation.tsx
    ├── ThemeProvider.tsx
    └── ThemeToggle.tsx
```

## Features

- Dark mode by default with light mode toggle
- Responsive design (mobile-first)
- Smooth animations and transitions
- SEO optimized (meta tags, sitemap, robots.txt)
- Fast page loads (static export)
- Contact form with configurable backend

## License

Private - All rights reserved.
