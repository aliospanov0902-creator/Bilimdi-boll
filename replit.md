# Bilim Bulak - Educational Platform for ENT Preparation

## Overview

Bilim Bulak is a bilingual (Russian/Kazakh) educational platform designed to help students in grades 6-11 prepare for the ENT (Unified National Testing) in Kazakhstan. The platform provides comprehensive subject lessons with an integrated AI tutor assistant powered by OpenAI's GPT-4.

**Core Purpose**: Deliver accessible, culturally-relevant education materials with AI-powered personalized tutoring for Kazakhstan's national standardized testing.

**Target Users**: Students in grades 6-11 preparing for ENT across 8 core subjects (Mathematics, Physics, Chemistry, Biology, Kazakhstan History, Geography, Literature, English).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**:
- React 18 with TypeScript for type safety
- Vite as build tool and development server
- Wouter for client-side routing (lightweight alternative to React Router)
- TanStack Query (React Query) for server state management and caching

**UI Component System**:
- shadcn/ui components built on Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Material Design principles adapted with Kazakhstan cultural identity (azure blue #00AFCA, gold #FFCB05)
- Component library includes custom educational components (SubjectCard, LessonCard, ProgressCard, AIChat)

**State Management Strategy**:
- React Context API for global state (LanguageContext for i18n, ProgressContext for learning progress)
- Local storage persistence for user progress tracking
- TanStack Query handles all server state with aggressive caching (staleTime: Infinity)

**Internationalization**:
- Custom translation system using React Context
- All content stored in bilingual format (ru/kz properties)
- Dynamic language switching without page reload

### Backend Architecture

**Server Framework**:
- Express.js with TypeScript running on Node.js
- RESTful API design pattern
- Custom Vite middleware integration for development HMR

**API Design**:
- Resource-based endpoints (/api/subjects, /api/lessons, /api/chat)
- Query parameter filtering (subjectId, grade)
- JSON request/response format
- Error handling with appropriate HTTP status codes

**Storage Layer**:
- In-memory storage implementation (MemStorage class)
- Interface-based design (IStorage) allows future database migration
- Static JSON files for educational content (subjects.json, lessons.json)
- Drizzle ORM configured for PostgreSQL (currently unused but prepared)

**Session Management**:
- connect-pg-simple configured for PostgreSQL session store
- Express session middleware for user authentication (infrastructure ready)

### Data Architecture

**Schema Design** (Drizzle ORM with PostgreSQL readiness):
- Users table: id (UUID), username (unique), password
- Educational content stored as typed interfaces (Subject, Lesson, ChatMessage)

**Data Models**:
```typescript
Subject: { id, name: {ru, kz}, icon, color, lessons, classes[] }
Lesson: { id, subjectId, number, grade, title: {ru, kz}, content: {ru, kz}, duration, difficulty }
ChatMessage: { role: 'user' | 'assistant', content }
```

**Content Organization**:
- Lessons organized by subject and grade level
- Markdown-formatted lesson content for rich text rendering
- Progress tracked by lesson IDs with completion state and streak calculation

### External Dependencies

**OpenAI Integration**:
- GPT-4o-mini model for AI tutoring functionality
- System prompts customized for educational context and bilingual support
- Separate prompts for Russian and Kazakh languages
- Temperature: 0.7, Max tokens: 1000 for balanced responses
- Error handling with fallback messages

**Database** (Configured but not actively used):
- Neon Database serverless PostgreSQL (@neondatabase/serverless)
- Drizzle ORM for type-safe database operations
- Migration system ready (drizzle-kit)
- Connection via DATABASE_URL environment variable

**Third-Party UI Libraries**:
- Radix UI primitives for accessible component foundations
- Lucide React for iconography
- Embla Carousel for content carousels
- React Hook Form with Zod for form validation (infrastructure ready)

**Development Tools**:
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- TypeScript for full-stack type safety
- ESBuild for production bundling

**Google Fonts**:
- Inter for body text and UI elements
- Poppins for headings and titles
- Architects Daughter, DM Sans, Fira Code, Geist Mono (configured but not primary)

### Authentication & Authorization

**Current State**: Infrastructure prepared but not implemented
- User schema defined with username/password
- Session management middleware configured
- No active authentication flow (public access to all content)

### Build & Deployment

**Development**:
- `npm run dev`: Runs Express server with Vite middleware for HMR
- TSX for TypeScript execution in development

**Production**:
- `npm run build`: Vite builds client, ESBuild bundles server
- `npm start`: Runs compiled server from dist/
- Client assets served from dist/public/

**Database Operations**:
- `npm run db:push`: Drizzle schema push to database (when DATABASE_URL is set)