# CQ Digital Studio

## Overview

CQ Digital Studio is a modern, dark-themed photography and videography studio website built with React, TypeScript, and TailwindCSS. The application showcases professional photography and videography services through a cinematic, visually-rich interface with smooth animations and responsive design. The site features multiple pages including home, about, services, portfolio, packages, testimonials, and contact sections, all connected through a cohesive design system inspired by premium creative agency aesthetics.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- **React 18+** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (file-based navigation without React Router)
- **TailwindCSS** for utility-first styling with custom dark theme configuration

**UI Component System:**
- **ShadCN UI** components provide the foundational UI elements (buttons, cards, forms, dialogs, etc.)
- **Radix UI** primitives power the accessible, unstyled components underneath ShadCN
- Custom component architecture with reusable cards for services, portfolio items, testimonials, and packages
- Design system follows a "new-york" style variant with custom dark theme variables

**Animation & Interaction:**
- **Framer Motion** handles page transitions and component-level animations
- **GSAP with ScrollTrigger** plugin for scroll-based animations and parallax effects
- Custom hooks (`useScrollAnimation`, `useParallax`) encapsulate animation logic
- Smooth scroll effects throughout the application

**State Management:**
- **TanStack Query (React Query)** for server state management and API data fetching
- **React Hook Form** with Zod validation for form handling
- Local component state with React hooks for UI interactions

**Styling Architecture:**
- Custom CSS variables defined for light/dark theme support (though primarily dark-themed)
- Tailwind configuration extended with custom colors, border-radius values, and spacing
- Design guidelines specify cinematic dark theme with purple primary accent and teal secondary
- Typography system uses Google Fonts: Space Grotesk (headers), Inter (body), JetBrains Mono (accents)

### Backend Architecture

**Server Framework:**
- **Express.js** REST API server with TypeScript
- Modular route registration pattern in `server/routes.ts`
- Custom middleware for request logging and error handling
- Development-only Vite middleware integration for HMR

**Data Layer:**
- **In-memory storage** implementation (`MemStorage` class) as default storage mechanism
- Abstracted storage interface (`IStorage`) allows for easy database integration
- **Drizzle ORM** configured with PostgreSQL schema definitions (ready for database connection)
- Schema includes tables for users and contact inquiries

**API Endpoints:**
- `POST /api/contact` - Submit contact form inquiries with validation
- `GET /api/contact/inquiries` - Retrieve all contact submissions (admin endpoint)

**Validation & Type Safety:**
- **Zod schemas** for runtime validation of API requests
- **Drizzle-Zod** integration generates type-safe schemas from database tables
- Shared types between client and server via `@shared` module path alias

### Data Storage Solutions

**Current Implementation:**
- Memory-based storage using JavaScript Maps for development/demo purposes
- UUID-based ID generation for entities

**Database Schema (PostgreSQL Ready):**
- **users** table: id (UUID), username (unique), password (text)
- **contact_inquiries** table: id (UUID), name, email, phone (optional), message, created_at timestamp
- Drizzle configuration points to PostgreSQL with migrations folder setup

**Migration Strategy:**
- Drizzle Kit configured for schema management (`drizzle.config.ts`)
- Command `npm run db:push` available to sync schema to database
- Expects `DATABASE_URL` environment variable for Neon/PostgreSQL connection

### External Dependencies

**Third-Party UI Libraries:**
- **Lucide React** - Icon library for consistent vector icons throughout the UI
- **React Icons** (specifically `react-icons/si` for SiVimeo) - Additional brand icons
- **Embla Carousel** - Touch-enabled carousel for testimonials section
- **cmdk** - Command palette component framework

**Database & ORM:**
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon
- **Drizzle ORM** (v0.39.1) - Type-safe SQL query builder
- **connect-pg-simple** - PostgreSQL session store (configured but not actively used)

**Development Tools:**
- **@replit/vite-plugin-runtime-error-modal** - Enhanced error overlay for Replit environment
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling
- **@replit/vite-plugin-dev-banner** - Development environment banner

**Utilities:**
- **date-fns** - Date formatting and manipulation
- **clsx** + **tailwind-merge** - Conditional className composition
- **class-variance-authority** - Type-safe variant API for component styling
- **nanoid** - Compact unique ID generator

**Build & Bundling:**
- **esbuild** - Fast JavaScript bundler for server-side code
- **tsx** - TypeScript execution for development server
- **Autoprefixer** + **PostCSS** - CSS processing pipeline