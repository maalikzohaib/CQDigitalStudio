# CQ Digital Studio - Design Guidelines

## Design Approach: Cinematic Dark Theme

**Reference Direction**: Drawing inspiration from premium photography studios (Awwwards-featured creative agencies), VSCO's minimalist aesthetic, and cinematic video production sites. The design prioritizes showcasing visual work with minimal distraction.

**Core Principle**: Let the photography and videography speak for themselves - elegant restraint with dramatic moments.

---

## Color Palette

**Dark Theme Foundation**:
- Background Primary: `220 15% 8%` (deep charcoal, not pure black)
- Background Secondary: `220 12% 12%` (elevated surfaces)
- Background Tertiary: `220 10% 16%` (cards, modals)

**Accent Colors**:
- Primary Accent: `280 60% 65%` (refined purple - creative energy)
- Secondary Accent: `190 70% 55%` (teal - complementary highlight)
- Neutral Text: `220 10% 90%` (off-white for readability)
- Muted Text: `220 8% 60%` (secondary information)

**Interactive States**:
- Borders/Dividers: `220 12% 20%` (subtle separation)
- Hover States: Subtle glow using primary accent at 20% opacity
- Focus Rings: Primary accent with blur

---

## Typography

**Font System** (Google Fonts):
- **Display/Headers**: "Clash Display" or "Space Grotesk" - 500-700 weight, modern geometric
- **Body/UI**: "Inter" - 400-600 weight, exceptional readability
- **Accents**: "JetBrains Mono" - 400 weight for package details/pricing

**Type Scale**:
- Hero Display: `text-6xl md:text-7xl lg:text-8xl` (96-128px)
- Page Headers: `text-4xl md:text-5xl lg:text-6xl` (48-72px)
- Section Titles: `text-2xl md:text-3xl lg:text-4xl` (32-48px)
- Body Large: `text-lg md:text-xl` (18-20px)
- Body Default: `text-base` (16px)
- Small/Captions: `text-sm` (14px)

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24, 32**
- Micro spacing: `p-2, gap-4` (element padding, small gaps)
- Component spacing: `p-6, p-8, gap-8` (card interiors, moderate gaps)
- Section spacing: `py-16, py-20, py-24` (vertical rhythm)
- Major sections: `py-32` (hero, major breaks)

**Grid System**:
- Container: `max-w-7xl mx-auto px-6 lg:px-8`
- Portfolio grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-6 lg:gap-8`
- Services/Features: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-8`
- Asymmetric layouts for visual interest on About/Services pages

---

## Component Library

**Navigation**:
- Sticky navbar with blur backdrop (`backdrop-blur-xl bg-background/80`)
- Logo left, navigation center, CTA right on desktop
- Mobile: Hamburger with full-screen overlay menu
- Smooth scroll-triggered appearance/disappearance

**Hero Section** (Home):
- Full-viewport video background with dark overlay (40% opacity)
- Centered content with animated display typography
- Primary CTA: Solid purple button with glow effect
- Secondary CTA: Outline button with blurred background (`backdrop-blur-md`)
- Scroll indicator with animated chevron

**Cards** (Services, Packages, Testimonials):
- Dark background (`bg-background-secondary`) with subtle border
- Hover: Lift effect (`hover:scale-105 transition-transform`)
- Service cards: Lucide icon (48px), title, description, "Learn More" link
- Package cards: Tier name, price (large mono font), feature list with checkmarks, prominent CTA
- Testimonial cards: Star rating, quote, client name/role, optional photo

**Portfolio Grid**:
- Masonry-inspired layout with varied aspect ratios
- Filter tabs: All / Photography / Videography / Events (pill-style toggles)
- Image cards with gradient overlay on hover revealing title
- Lightbox modal: Dark backdrop, large preview, navigation arrows, close button

**Forms** (Contact):
- Dark input fields with subtle borders (`border-gray-700`)
- Focus state: Purple ring with glow
- Labels above inputs, helper text below
- Submit button: Full-width purple gradient with loading state

**Footer**:
- Three-column layout: Brand/tagline | Quick links | Contact info
- Social icons row (Instagram, Facebook, YouTube, Vimeo)
- Copyright and policies at bottom
- Background: Slightly darker than page (`bg-background-primary`)

---

## Animations & Interactions

**Page Transitions** (Framer Motion):
- Fade in with slight upward motion (`initial={{ opacity: 0, y: 20 }}`)
- Stagger children for grid layouts
- 0.5s duration with ease-out curve

**Scroll Animations** (GSAP):
- Hero parallax: Video/background moves slower than content (0.5x speed)
- Fade-in-up on scroll for section headers and cards
- Trigger: When element reaches 80% viewport height
- Portfolio images: Subtle scale on scroll into view

**Hover States**:
- Buttons: Scale 105% with smooth transition
- Cards: Lift with shadow increase
- Images: Slight brightness increase (110%)
- Links: Underline slide-in animation

**Navbar Behavior**:
- Transparent initially, solid background after 100px scroll
- Hide on scroll down, show on scroll up
- Active page indicator with accent color bottom border

---

## Images

**Hero Video Background**:
- Cinematic b-roll footage of photography/videography work (4K, muted, loop)
- Dark overlay to ensure text legibility
- Mobile: Replace with high-quality static image for performance

**Portfolio Content**:
- High-resolution photography samples (weddings, events, portraits, products)
- Video thumbnails with play icons linking to Vimeo/YouTube
- Mix of horizontal and vertical orientations for visual rhythm

**About Page**:
- Team photo in candid studio setting (authentic, not overly posed)
- Behind-the-scenes images of shoots
- Equipment/studio space hero image

**Service Icons**:
- Use Lucide React icons (Camera, Video, Users, Package, etc.)
- 48px size in accent purple color with subtle glow

---

## Page-Specific Layouts

**Home**: Video hero → Featured services (3-column cards) → Portfolio preview (6-image grid) → CTA banner → Testimonials carousel

**Portfolio**: Filter tabs → Masonry grid (20-30 items) → Load more button

**Packages**: Hero with tagline → 3 pricing cards (equal height, centered) → Comparison table → FAQ accordion

**Contact**: Split layout - Form (60%) | Map + Info (40%) on desktop, stacked mobile

**Services**: Hero image → Service categories (large cards with icons) → Process timeline → Related packages

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (3-column grids, full navigation)

All spacing reduces by 33% on mobile (e.g., `py-24 → py-16 → py-12`)