---
title: "SPA 404 Page Links to Non-Existent Routes"
category: ui-bugs
module: navigation
tags: [nextjs, spa, routing, 404]
symptoms:
  - 404 page links lead to more 404s
  - Links to /about, /services return not found
  - Single-page app navigation broken
date_solved: 2026-02-09
severity: medium
---

# SPA 404 Page Links to Non-Existent Routes

## Problem

In a single-page application (SPA) with scroll-snap sections, the 404 page contained links like:

```tsx
<Link href="/about">About</Link>
<Link href="/services">Services</Link>
<Link href="/contact">Contact</Link>
```

These routes don't exist because the app is a single page with anchor sections (`#about`, `#services`, etc.).

## Symptoms

- Clicking links on 404 page leads to another 404
- Users stuck in 404 loop
- Navigation appears broken

## Root Cause

The 404 page was designed as if the site had multiple routes, but it's actually a single-page app where sections are accessed via anchor links on the home page.

## Solution

Change route links to anchor links that navigate to the home page sections:

```tsx
// Before (broken)
<Link href="/about">About</Link>
<Link href="/contact">Contact</Link>

// After (working)
<Link href="/#about">About</Link>
<Link href="/#contact">Contact</Link>
```

Full fix in `src/app/not-found.tsx`:

```tsx
<Link href="/#about">About</Link>
<Link href="/#services">Services</Link>
<Link href="/#projects">Projects</Link>
<Link href="/#content">Content</Link>
<Link href="/#speaking">Speaking</Link>
```

## Prevention

1. **Audit link targets** - When building SPAs, verify all internal links point to valid routes or anchors
2. **Test 404 page** - Click every link on your 404 page to ensure they work
3. **Use consistent navigation** - Use the same link format throughout (anchors for SPA sections)

## Related

- Next.js App Router documentation
- Single-page application navigation patterns
