# Design Guidelines: Educational Platform for Kazakhstani Students

## Design Approach

**Reference-Based Approach**: Drawing inspiration from successful educational platforms like Khan Academy (content organization), Duolingo (gamification elements), and Notion (clean information hierarchy), adapted for a younger audience (grades 6-11) with bilingual support.

**Core Principles**:
- Playful professionalism: Engaging without being childish
- Clear information hierarchy for easy content discovery
- Bilingual-first design with seamless language switching
- Welcoming, approachable aesthetic that reduces learning anxiety

## Typography System

**Font Families**:
- Primary: Inter (via Google Fonts) - clean, readable for UI elements
- Content: Georgia - warm, readable for educational content
- Accent: Montserrat - friendly, modern for headings

**Hierarchy**:
- Hero Headlines: text-5xl to text-6xl, font-bold (Montserrat)
- Section Headers: text-3xl to text-4xl, font-semibold (Montserrat)
- Subsection Headers: text-xl to text-2xl, font-medium (Inter)
- Body Text: text-base to text-lg, font-normal (Georgia for content, Inter for UI)
- Metadata/Labels: text-sm, font-medium (Inter)
- Buttons/CTAs: text-base, font-semibold (Inter)

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-6 to p-8
- Section spacing: py-16 to py-24
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8

**Container Strategy**:
- Full-width sections: w-full with max-w-7xl mx-auto px-6
- Content areas: max-w-6xl
- Reading content: max-w-4xl
- Chat interface: max-w-3xl

**Grid Systems**:
- Subject cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Topic lists: grid-cols-1 md:grid-cols-2
- Feature highlights: grid-cols-1 md:grid-cols-3

## Page Structure

### Hero Section (80vh)
- Split layout: Left side with headline and CTA, right side with illustration/image
- Headline emphasizing bilingual learning support
- Language toggle prominently placed (top-right)
- Primary CTA: "Начать обучение / Оқуды бастау"
- Image: Cheerful illustration of diverse students studying together with books and devices

### Subject Catalog Section
- Card-based grid (3 columns desktop, 2 tablet, 1 mobile)
- Each card includes subject icon (use Heroicons), subject name in both languages, grade range
- Hover effect with subtle lift (transform scale-105)
- Clear visual hierarchy showing 6-11 grade organization

### Topic Library Preview
- Tabbed interface for grade selection
- Nested structure: Grade → Subject → Topics
- Each topic card shows title (bilingual), brief description, "изучить/оқу" button
- Breadcrumb navigation for deep content

### AI Chat Feature Highlight
- Two-column layout: Left shows chat interface preview, right explains benefits
- Chat bubble design with student/AI avatar distinction
- Sample conversation showing bilingual support
- "Попробовать чат / Чатты сынап көру" CTA

### Search & Navigation Section
- Prominent search bar with autocomplete
- Filter chips for grade, subject, language
- Quick links to popular topics
- Visual hierarchy emphasizing ease of finding content

### Footer
- Multi-column layout (4 columns desktop, stack on mobile)
- Subjects quick links, grade navigation, language resources, about/contact
- Newsletter signup for learning tips
- Social proof: "Помогаем тысячам школьников / Мыңдаған оқушыларға көмектесеміз"

## Component Library

### Navigation Header
- Sticky positioning (sticky top-0)
- Logo left, main navigation center, language toggle + search right
- Mobile: Hamburger menu with drawer
- Height: h-16 to h-20
- Include quick access to "Все предметы / Барлық пәндер" and "AI Чат"

### Subject Cards
- Rounded corners (rounded-xl)
- Padding: p-6
- Icon at top (h-12 w-12)
- Subject name in both languages (primary language larger)
- Grade range indicator
- Subtle shadow with hover enhancement

### Topic Cards
- Compact design (p-4 to p-6)
- Topic title (text-lg font-semibold)
- Brief description (text-sm, 2-3 lines)
- Difficulty indicator (Базовый/Орта/Сложный badges)
- "Изучить" button aligned right

### AI Chat Interface
- Chat container with rounded-xl borders
- Message bubbles: Student (aligned right, rounded-2xl), AI (aligned left, rounded-2xl)
- Avatar circles (h-8 w-8) with initials
- Input field at bottom with send button (Heroicons paper-airplane)
- Typing indicator animation
- Language detection badge showing which language AI is responding in

### Language Toggle
- Pill-shaped switch (rounded-full)
- Labels: "РУС" | "ҚАЗ"
- Sliding indicator with smooth transition
- Positioned in header (top-right)

### Breadcrumb Navigation
- Horizontal layout with separators (Heroicons chevron-right)
- Links with hover underline
- Current page emphasized (font-semibold)
- Compact spacing (gap-2)

### Search Component
- Large input field with icon (Heroicons magnifying-glass)
- Autocomplete dropdown with categorized results
- Recent searches and popular topics
- Keyboard navigation support

### Grade Selector
- Tab-style interface or dropdown
- Clear visual indication of selected grade
- Numbers: 6, 7, 8, 9, 10, 11
- Responsive: Tabs on desktop, dropdown on mobile

### Filter Chips
- Rounded-full pill design
- Checkable states with visual feedback
- Categories: Subject, Grade, Difficulty
- Clear all button

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2 columns, condensed spacing)
- Desktop: > 1024px (full grid layouts, expanded spacing)

**Mobile Optimizations**:
- Hamburger menu for navigation
- Single-column card layouts
- Collapsible filter sections
- Bottom-anchored chat input for comfortable typing
- Larger tap targets (min-h-12) for all interactive elements

## Interaction Patterns

- Card hover: Subtle lift with shadow enhancement
- Button states: Scale on active (scale-95), no custom hover (let Button component handle)
- Smooth page transitions between sections
- Loading states: Skeleton screens for content, spinner for AI responses
- Error states: Friendly messages in both languages with retry options

## Accessibility

- Semantic HTML throughout (nav, main, section, article)
- ARIA labels for bilingual content
- Keyboard navigation for all interactive elements
- Focus indicators (ring-2 with offset)
- Sufficient contrast ratios for readability
- Alt text for all images and icons

## Images

**Hero Image**: Right side of hero - vibrant illustration showing diverse group of students (ages 11-17) engaged with tablets/laptops, books open, bright and encouraging atmosphere. Should feel modern and inclusive.

**Subject Icons**: Use Heroicons for consistent iconography - academic-cap, beaker, calculator, globe-alt, book-open, etc.

**AI Chat Section**: Left side - screenshot or illustration of chat interface in action, showing sample Q&A exchange in both Kazakh and Russian

**Decorative Elements**: Subtle background patterns or illustrations in section backgrounds to add visual interest without distraction

This design creates an approachable, organized educational platform that welcomes students, makes content easily discoverable, and integrates AI assistance seamlessly into the learning experience.