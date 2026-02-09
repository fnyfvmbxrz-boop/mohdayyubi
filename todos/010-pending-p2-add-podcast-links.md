---
status: pending
priority: p2
issue_id: "010"
tags: [content, marketing, podcast]
dependencies: []
---

# Add Podcast Links When Ready

## Action Required

When "The Hittin Files" podcast launches, add Spotify and Apple Podcast links.

## Where to Update

**File:** `src/app/page.tsx` (Content section, around line 360)

Replace "Coming soon" text with buttons:

```tsx
<div className="flex gap-3">
  <a href="YOUR_SPOTIFY_URL" className="btn btn-secondary">
    Spotify
  </a>
  <a href="YOUR_APPLE_URL" className="btn btn-secondary">
    Apple
  </a>
</div>
```

## Notes

Currently shows "Coming soon" in place of podcast links.
