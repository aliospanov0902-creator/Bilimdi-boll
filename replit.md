# Bilimdi - Educational Platform for Kazakhstani Students

## Overview

Bilimdi is a bilingual educational platform designed for Kazakhstani students in grades 6-11. The platform provides educational content in both Russian and Kazakh languages, featuring subject-based learning modules and an AI chat assistant. The application emphasizes accessibility, clean design, and a seamless bilingual experience with instant language switching.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing

**UI Component System**
- Shadcn/UI components built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants
- Custom theme system supporting light/dark modes with CSS variables

**State Management**
- React Context API for global state (Language and Theme contexts)
- TanStack Query (React Query) for server state management and data fetching
- Local component state with React hooks

**Design System**
- Typography: Inter (UI), Montserrat (headings), Georgia (content)
- Custom spacing system based on Tailwind's 4-unit grid
- Elevation system using CSS custom properties for hover/active states
- Bilingual-first design with instant language switching without page reload

**Component Architecture**
- Atomic design pattern with reusable UI primitives
- Feature-based components (SubjectCard, TopicCard, ChatInterface)
- Layout components (Header, Hero, Footer)
- Context providers for cross-cutting concerns

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- HTTP server creation via Node's native http module
- Middleware for JSON parsing, URL encoding, and request logging

**Development Environment**
- Vite middleware integration for HMR in development
- Custom logging system with timestamps
- Hot module replacement with Vite's dev server

**API Design**
- RESTful API structure (routes prefixed with /api)
- Storage abstraction layer with interface-based design
- In-memory storage implementation (MemStorage) for development
- Prepared for database integration via storage interface

**Data Layer**
- Drizzle ORM configured for PostgreSQL
- Schema-first approach with Zod validation
- Database schema includes subjects and topics tables
- Support for bilingual content (Russian and Kazakh fields)

### Data Storage Solutions

**Database**
- PostgreSQL as the primary database (configured via Drizzle)
- Neon serverless PostgreSQL driver for cloud deployment
- Migration system via Drizzle Kit

**Schema Design**
- Subjects table: bilingual names, icons, grade ranges
- Topics table: bilingual titles/descriptions/content, difficulty levels, grade-specific content
- UUID primary keys with PostgreSQL's gen_random_uuid()

**Validation**
- Drizzle-Zod integration for runtime schema validation
- Type-safe database operations with TypeScript inference

### Authentication and Authorization

Currently not implemented - the platform appears to be designed for open access without user accounts. The storage interface includes user-related methods (getUser, createUser) suggesting future authentication may be planned.

### Internationalization (i18n)

**Language Support**
- Custom LanguageContext providing translation function (t)
- Runtime language switching between Russian (ru) and Kazakh (kk)
- No external i18n library - simple key-based translation system
- Language preference stored in component state (not persisted)

**Content Strategy**
- All user-facing strings use the `t(ru, kk)` translation function
- Database content stored in separate language-specific columns
- UI components render appropriate language based on context

### Theme System

**Implementation**
- Custom ThemeContext managing light/dark mode
- Theme preference persisted in localStorage
- CSS custom properties for dynamic theming
- Tailwind's dark mode class strategy

**Design Tokens**
- HSL-based color system for granular control
- Separate tokens for backgrounds, borders, text, and interactive states
- Custom elevation variables for hover/active states
- Flat design with subtle shadows and borders

## External Dependencies

### UI Component Libraries
- **Radix UI**: Headless component primitives for accessibility (@radix-ui/react-*)
- **Shadcn/UI**: Component system built on Radix
- **Lucide React**: Icon library for consistent iconography
- **Embla Carousel**: Carousel/slider functionality
- **cmdk**: Command palette component
- **Vaul**: Drawer component primitives
- **React Day Picker**: Calendar/date picker
- **Recharts**: Charting library

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Class name utilities

### Form Management
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Validation resolver integration
- **Zod**: Schema validation

### Data Fetching & State
- **TanStack Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database queries
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across the stack
- **Drizzle Kit**: Database migration management
- **ESBuild**: JavaScript bundler for production builds
- **Replit Plugins**: Development environment enhancements (@replit/vite-plugin-*)

### Session Management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)

### Future Integrations
The platform appears prepared for:
- AI chat functionality (UI exists, backend integration pending)
- User authentication system (storage interface includes user methods)
- Real-time features (session management infrastructure in place)