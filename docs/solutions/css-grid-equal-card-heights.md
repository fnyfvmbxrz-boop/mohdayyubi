---
title: "CSS Grid Cards with Unequal Heights"
category: ui-bugs
module: layout
tags: [css, grid, tailwind, cards]
symptoms:
  - Grid cards have different heights
  - Cards don't align vertically
  - Content pushes cards to different sizes
date_solved: 2026-02-09
severity: low
---

# CSS Grid Cards with Unequal Heights

## Problem

Cards in a CSS grid have unequal heights because content varies in length:

```tsx
<div className="grid grid-cols-2 gap-4">
  {cards.map((card) => (
    <div className="card">
      <h3>{card.title}</h3>      {/* varies in length */}
      <p>{card.description}</p>  {/* varies in length */}
    </div>
  ))}
</div>
```

## Symptoms

- Cards in the same row have different heights
- Visual misalignment in grid layouts
- Hover effects look inconsistent

## Root Cause

CSS Grid by default sizes rows to fit their content. Without explicit row sizing, cards with more content are taller.

## Solution

Use `auto-rows-fr` on the grid and `h-full` on cards:

```tsx
// Grid container: equal row heights
<div className="grid grid-cols-2 gap-5 auto-rows-fr">
  {cards.map((card) => (
    // Card: fill entire grid cell
    <div className="card h-full flex flex-col">
      <h3>{card.title}</h3>
      <p className="flex-1">{card.description}</p>  {/* flex-1 pushes footer down */}
      <footer>...</footer>
    </div>
  ))}
</div>
```

### Key Classes

| Class | Purpose |
|-------|---------|
| `auto-rows-fr` | Makes all grid rows equal height |
| `h-full` | Card fills entire grid cell |
| `flex flex-col` | Card uses flexbox for internal layout |
| `flex-1` | Content area expands to fill space |

## Prevention

1. **Default to equal heights** - Always add `auto-rows-fr` to card grids
2. **Use flexbox inside cards** - Helps distribute internal space evenly
3. **Set min-height if needed** - For very short content, add `min-h-[120px]`

## Related

- Tailwind CSS Grid documentation
- CSS `grid-auto-rows` property
