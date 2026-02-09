---
status: pending
priority: p2
issue_id: "001"
tags: [code-review, architecture, refactoring]
dependencies: []
---

# Extract Section Components from page.tsx

## Problem Statement

The main page component (`src/app/page.tsx`) is 450+ lines containing 7 inline sections. This violates the Single Responsibility Principle and makes the code harder to maintain, test, and reason about.

## Findings

- **File**: `src/app/page.tsx`
- **Lines**: 115-449
- **Issue**: Monolithic component handling data, presentation, animations, and navigation
- **Impact**: Reduced maintainability, harder to test individual sections

## Proposed Solutions

### Option A: Extract to Section Components (Recommended)
Create `src/components/sections/` with individual section files.

**Pros:**
- Clear separation of concerns
- Easier to test and maintain
- Better code organization

**Cons:**
- More files to manage
- Slight increase in imports

**Effort:** Medium
**Risk:** Low

### Option B: Extract Data Only
Move data arrays to `src/data/content.ts`, keep sections inline.

**Pros:**
- Quick win
- Separates data from view

**Cons:**
- Still has large component
- Doesn't fully solve the issue

**Effort:** Small
**Risk:** Low

## Recommended Action

Option A - Create section components in `src/components/sections/`

## Technical Details

**Affected files:**
- `src/app/page.tsx`

**New files to create:**
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/AboutSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/ProjectsSection.tsx`
- `src/components/sections/ContentSection.tsx`
- `src/components/sections/SpeakingSection.tsx`
- `src/components/sections/ContactSection.tsx`

## Acceptance Criteria

- [ ] Each section is a separate component
- [ ] Main page.tsx is under 100 lines
- [ ] All animations still work
- [ ] No visual changes

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Identified during pattern analysis |

## Resources

- Code review finding from pattern-recognition-specialist agent
