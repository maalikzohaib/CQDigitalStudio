# CQ Digital Studio - Premium Design Guidelines

## Design Approach: Luxurious Cinematic Dark

**Reference Direction**: Drawing from Awwwards-featured luxury creative agencies (e.g., Active Theory, Resn), high-end fashion photography portfolios, and premium cinema production houses. The design emphasizes opulent restraint—sophisticated darkness punctuated by metallic warmth.

**Core Principle**: Cinematic luxury where visual work commands attention through rich contrasts, metallic accents, and deliberate negative space.

---

## Color Palette

### Dark Foundation
- **Background Primary**: `230 20% 6%` (rich charcoal with subtle blue undertone)
- **Background Secondary**: `230 18% 10%` (elevated surfaces, cards)
- **Background Tertiary**: `230 15% 14%` (modals, overlays)
- **True Black Accents**: `0 0% 0%` (deep shadows, dramatic separation)

### Metallic Accent System
- **Primary (Rose Gold)**: `15 65% 68%` (warm metallic, hero CTAs)
- **Secondary (Copper)**: `25 75% 58%` (rich complement, hover states)
- **Tertiary (Deep Purple)**: `270 60% 45%` (regal depth, secondary actions)
- **Accent Glow**: Use rose gold at 15% opacity for halos and ambient lighting effects

### Text Hierarchy
- **Primary Text**: `0 0% 96%` (crisp white for headers)
- **Body Text**: `230 10% 85%` (off-white, optimal readability)
- **Muted Text**: `230 12% 55%` (captions, metadata)
- **Borders/Dividers**: `230 15% 18%` (subtle architectural lines)

---

## Typography

**Font Stack** (Google Fonts CDN):
- **Display**: "Cormorant Garamond" (serif, 500-600 weight) - editorial elegance for hero headlines
- **Headers**: "Outfit" (sans-serif, 400-700 weight) - modern luxury for section titles
- **Body/UI**: "Inter" (400-500 weight) - precision readability
- **Monospace**: "JetBrains Mono" (400 weight) - package pricing, technical details

**Scale**:
- **Hero Display**: `text-7xl md:text-8xl lg:text-9xl` (112-160px) with tight tracking
- **Page Headers**: `text-5xl md:text-6xl lg:text-7xl` (60-96px)
- **Section Titles**: `text-3xl md:text-4xl lg:text-5xl` (36-60px)
- **Body Large**: `text-xl md:text-2xl` (20-24px) for introductions
- **Body**: `text-base md:text-lg` (16-18px)
- **Captions**: `text-sm` (14px) with increased letter spacing

---

## Layout System

**Spacing Framework**: Tailwind units **2, 4, 8, 12, 16, 20, 32**
- **Micro**: `p-2, gap-4` (tight groupings)
- **Component**: `p-8, p-12, gap-8` (card interiors)
- **Section**: `py-20, py-32` (major content blocks)
- **Dramatic Breaks**: `py-32 md:py-40` (hero, portfolio transitions)

**Grid Architecture**:
- **Container**: `max-w-7xl mx-auto px-6 lg:px-12`
- **Portfolio**: Asymmetric masonry—`grid-cols-1 md:grid-cols-12` with varied column spans (3-7 cols)
- **Services**: `grid-cols-1 lg:grid-cols-3 gap-8`
- **Testimonials**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12`

---

## Component Library

### Navigation
- **Floating navbar** with heavy backdrop blur (`backdrop-blur-2xl bg-background-primary/60`)
- Logo left (rose gold accent), centered navigation, "Book Now" CTA (rose gold gradient) right
- Active state: Rose gold underline with subtle glow
- Mobile: Full-screen overlay menu with staggered fade-in animations

### Hero Section (Large Image)
- **Full-viewport image** (1920x1080 min): Dramatic studio shot or cinematic portfolio piece
- Dark gradient overlay (60% opacity from bottom)
- Content: Serif display headline, refined subheading, dual CTAs
- Primary CTA: Solid rose gold button with copper hover
- Secondary CTA: Outline button with blurred background—no hover interactions (Button handles states)

### Portfolio Grid
- **Masonry layout** with 3-7 varied aspect ratios (16:9, 4:5, 1:1, 9:16)
- Filter system: Pill-style toggles with rose gold active state
- Image cards: Gradient overlay on hover (deep purple to transparent) revealing metadata
- Lightbox: Full-screen dark modal (`bg-black/95`) with navigation arrows, image counter

### Service Cards
- **Large format cards** (min-height 400px) with background images at 30% opacity
- Icon (Lucide, 64px) in rose gold with glow effect
- Service title (Outfit, bold), description (Inter)
- "Explore Service" link with animated arrow

### Package Pricing
- **Three-tier cards** with varied visual weight (middle tier elevated with rose gold border)
- Tier badge (ribbon style, copper gradient)
- Price: Large monospace font with currency symbol in rose gold
- Feature list with custom checkmark icons (rose gold)
- Prominent gradient CTA button

### Testimonial Cards
- Quote in large serif italic font
- Five-star rating (rose gold stars)
- Client name/role with optional circular photo (grayscale with rose gold border)
- Subtle card lift on hover with shadow glow

### Contact Form
- Dark input fields (`bg-background-tertiary border-border`)
- Focus: Rose gold ring with outer glow
- Labels above (small caps, letter-spaced)
- Submit: Full-width gradient button (rose gold to copper)

### Footer
- **Four-column layout**: Brand story | Services | Portfolio | Contact
- Social icons (Instagram, Vimeo, YouTube) with rose gold hover
- Newsletter signup with inline form
- Copyright with subtle divider above
- Background: `bg-background-primary` with top border gradient

---

## Animations

**Page Transitions** (Framer Motion):
- Fade-in with scale (`initial={{ opacity: 0, scale: 0.95 }}`)
- Stagger grid items (0.1s delay between)
- Duration: 0.6s with custom ease

**Scroll Behaviors** (GSAP):
- Parallax hero image (0.4x scroll speed)
- Section headers: Fade-up when 75% in viewport
- Portfolio images: Subtle zoom (1.0 to 1.05) on scroll reveal
- Navbar: Transform to solid after 120px scroll, hide on down-scroll, reveal on up-scroll

**Hover States**:
- Buttons: Scale 102% with rose gold glow expansion
- Cards: Lift (translateY -8px) with shadow increase
- Images: Brightness 110% with overlay fade
- Text links: Rose gold underline slide-in (left to right)

---

## Images

### Hero Image (Home)
**Description**: Cinematic wide shot of the studio at golden hour—soft ambient lighting, high-end camera equipment in foreground, elegant minimalist space. Shot with shallow depth of field, warm color grade.
**Placement**: Full viewport (100vh), dark gradient overlay from bottom (0% to 60% opacity)

### Portfolio Showcase
**Description**: 20-30 high-resolution samples—wedding ceremonies with dramatic lighting, corporate headshots with refined backgrounds, product photography with metallic accents, event coverage with candid moments, aerial drone footage thumbnails
**Placement**: Masonry grid after hero section, varied aspect ratios

### Services Page
**Description**: Behind-the-scenes images—photographer directing a shoot, videographer with cinema camera on gimbal, studio lighting setup, editing suite with color-graded footage on monitors
**Placement**: Full-width hero (70vh), service card backgrounds (blurred, 30% opacity)

### About Page  
**Description**: Team portrait in studio environment (authentic, not overly staged), candid shots of creative process, equipment showcase with shallow DOF, workspace with mood lighting
**Placement**: Split layout hero (50/50 image-text), scattered throughout content

### Package Cards
**Description**: Abstract backgrounds—bokeh light patterns, film grain textures, subtle rose gold gradient overlays
**Placement**: Card backgrounds at low opacity, decorative accents

---

## Page Structures

**Home**: Hero image → Featured services (3 large cards) → Portfolio preview (12-item masonry) → Testimonial grid (6 cards) → CTA banner with background image → Footer

**Portfolio**: Filter tabs → Masonry grid (20-30 items) with infinite scroll → Featured project spotlight section

**Packages**: Hero with pricing philosophy → 3 tiered cards (equal height, centered) → Feature comparison table → Add-ons grid → FAQ accordion

**Services**: Hero image → Service categories (large image cards, 3-column) → Process timeline (vertical on mobile, horizontal on desktop) → Related packages carousel

**Contact**: Split layout—Form (55%) | Map + studio info + hours (45%) on desktop, stacked on mobile

---

## Responsive Strategy

- **Mobile** (<768px): Single column, reduced spacing by 40%, stacked navigation
- **Tablet** (768-1024px): 2-column grids, hybrid navigation
- **Desktop** (>1024px): Full multi-column layouts, floating navigation

Critical: All metallic accents maintain vibrancy across viewports—no color desaturation on mobile.