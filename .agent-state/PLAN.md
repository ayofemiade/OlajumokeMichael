# Production Implementation Plan: Olajumoke Michael Portfolio

## Master 10-Step Plan

### 1. Contact Form Transmission & Error Handling (Item 1)
- Target: `src/app/contact/page.tsx` & `src/app/api/contact/route.ts`
- Destination Email: `omichael@ethnoirconsulting.com`
- Features: Anti-spam honeypot + timestamp check, API handler, true success state upon delivery, clear failure fallback state with direct email link.

### 2. Home Hero Supporting Sentence & Mobile Layout (Item 2)
- Target: `src/components/sections/HeroSection.tsx`
- Restoration: Add approved supporting sentence beneath headline.
- Mobile Layout: Set typography `order-1` and portrait `order-2 lg:order-2` so proposition text appears first on mobile.

### 3. Bpeace Role Title Update (Item 3)
- Target: `src/app/page.tsx` & `src/app/experience/page.tsx`
- Change: Update "Program Manager" to "U.S. Program Manager (Contract)".

### 4. Selected Work Preview Card Restoration (Item 4)
- Target: `src/app/page.tsx` & `src/app/selected-work/page.tsx`
- Title: "Designing a Founder Support Pilot—and Learning from Its Limits"
- Text: Full approved evidence-bounded preview copy.

### 5. VRL Case-Study Page Full Fidelity Restoration (Item 5)
- Target: `src/app/selected-work/venture-readiness-lab/page.tsx`
- Title, opening challenge, all 5 capability items, synthesis, NC IDEA acknowledgment, and em-dash heading update matching `doc/Olajumoke Michael — Venture Readiness Lab — Professional Portfolio Case.md`.

### 6. Clean Résumé Filename & Path Confirmation (Item 6)
- Target: `/public/Olajumoke-Michael-Resume.pdf`
- Update all download links across `src/app/experience/page.tsx`.

### 7. Venture Readiness Check-In Routing Architecture (Item 7)
- Destination URL: `https://ethnoirconsulting.com/venture-readiness-check-in`
- Update all Check-In CTA links to point to this Ethnoir landing page.

### 8. Scalable Case Study Card Grid (Item 8)
- Target: `src/app/selected-work/page.tsx`
- Structural capacity for Bpeace, Winston-Salem WBC, British High Commission, and Shalom case study cards.

### 9. Photographic Variety & Curation (Item 9)
- Primary Studio Headshot for Hero: `/images/Olajumoke-Michael-Professional-Headshot.jpg`
- Contextual Working Photo for Home Strategy: `/images/Olajumoke-Michael-Contextual-Working-Desk.jpg`
- Facilitation Photo for About Page: `/images/03_Olajumoke-Michael_Shalom-Facilitation.jpg`

### 10. SEO Metadata & Technical Production Setup (Item 10)
- Canonical URLs, Open Graph tags, page-specific titles/descriptions.
- `app/robots.ts`, `app/sitemap.ts`, Skip-to-content accessible link, Mobile menu keyboard traps, reduced-motion fallbacks.
