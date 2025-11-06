# Bilim Bulak Design Guidelines

## Design Approach
**Design System Foundation**: Material Design principles adapted with Kazakhstan cultural identity
**Rationale**: Educational platforms require clarity, consistency, and accessibility. Material Design provides excellent patterns for content-heavy applications while allowing customization for brand identity.

## Core Design Principles
1. **Educational Clarity**: Information hierarchy supports learning objectives
2. **Cultural Pride**: Kazakhstan flag colors (azure blue #00AFCA, gold #FFCB05) as primary brand elements
3. **Bilingual Excellence**: Equal visual weight and treatment for Kazakh and Russian content
4. **Youth-Friendly**: Approachable, modern aesthetic that appeals to grades 6-11

## Typography System

**Font Stack**: 
- Primary: Inter (via Google Fonts) - clean, highly legible for body text and UI
- Headings: Poppins (via Google Fonts) - friendly, modern for section titles

**Hierarchy**:
- Hero/Page Titles: text-4xl md:text-5xl font-bold (Poppins)
- Section Headers: text-2xl md:text-3xl font-semibold (Poppins)
- Subject Cards: text-xl font-semibold (Poppins)
- Lesson Titles: text-lg font-medium (Inter)
- Body Content: text-base leading-relaxed (Inter)
- UI Labels: text-sm font-medium (Inter)
- Metadata/Helper: text-xs (Inter)

## Layout System

**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16
- Tight spacing: space-y-2, gap-2 (UI elements)
- Standard spacing: space-y-4, gap-4, p-4 (cards, sections)
- Generous spacing: space-y-8, gap-8, py-12 (major sections)
- Section padding: py-16 md:py-20 (desktop), py-8 md:py-12 (mobile)

**Grid System**:
- Subject Cards: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Lesson Lists: Single column with max-w-4xl for optimal reading
- Dashboard Stats: grid-cols-2 md:grid-cols-4

**Container Widths**:
- Main content: max-w-7xl mx-auto
- Reading content: max-w-4xl mx-auto
- Chat interface: max-w-3xl mx-auto

## Component Library

### Navigation
**Header**: Fixed top navigation with logo, language switcher (KZ/RU flags), subject dropdown, progress indicator, user profile
- Height: h-16
- Sticky positioning with subtle shadow on scroll
- Language toggle: Prominent pill-style switcher with flag icons

### Hero Section
**Landing Hero**: 
- Full-width gradient background (blue to gold diagonal)
- Centered content with max-w-4xl
- Large headline + supporting text + CTA buttons
- Illustration/image: Diverse Kazakhstan students studying together (right side on desktop, below text on mobile)

### Subject Cards
- Icon: Large circular container (w-16 h-16) with subject icon (Font Awesome)
- Title: Subject name in both languages
- Subtitle: "X классов • Y уроков"
- Hover state: Subtle lift (shadow-lg transform scale-105)
- Visual: Gradient border accent in subject-specific color

### Lesson Browser
- Sidebar: Grade selector (6-11 класс) with expandable topic tree
- Main area: Lesson cards with:
  - Visual thumbnail or icon
  - Lesson number and title (bilingual)
  - Duration estimate
  - Completion checkbox
  - Difficulty indicator (beginner/intermediate/advanced)

### AI Chat Interface
**Chat Window**: 
- Clean message bubbles: User (right-aligned, blue), AI (left-aligned, white with border)
- Avatar icons: Student icon vs AI assistant icon
- Input: Large textarea with "Задайте вопрос / Сұрақ қойыңыз" placeholder
- Send button with icon
- Suggestion chips above input: "Объясни тему", "Дай пример", "Проверь решение"

### Progress Indicators
- Linear progress bars for course completion
- Circular progress for overall subject mastery
- Badge system for achievements (icons with count)

### Content Blocks
**Lesson Content**:
- Theory sections: Card-based with rounded corners (rounded-lg), padding p-6
- Examples: Highlighted boxes with subtle background
- Practice problems: Numbered list with checkboxes
- Key concepts: Pill-style tags

## Visual Elements

### Icons
**Library**: Font Awesome via CDN
- Subject icons: fa-calculator (Math), fa-flask (Chemistry), fa-atom (Physics), fa-book (Literature), etc.
- UI icons: fa-language (language switch), fa-comments (AI chat), fa-chart-line (progress)

### Images
**Hero Section**: Illustration of diverse Kazakhstan students collaborating with laptops/tablets, modern and bright aesthetic (positioned right side on desktop, 40% width)

**Subject Headers**: Icon-based, no photos needed

**Lesson Content**: Diagrams and educational illustrations as needed within lessons (loaded dynamically per lesson)

## Accessibility
- Minimum touch targets: 44x44px for all interactive elements
- Focus indicators: Visible 2px outline with blue accent
- Color contrast: WCAG AA minimum for all text
- Bilingual labels: aria-label attributes for both languages
- Keyboard navigation: Full support for tab order through lessons and chat

## Responsive Behavior
**Breakpoints**:
- Mobile: Base styles (< 768px) - single column layouts
- Tablet: md: (768px+) - 2-column grids, visible sidebar
- Desktop: lg: (1024px+) - 3-4 column grids, full features

**Mobile-Specific**:
- Hamburger menu for subject navigation
- Bottom tab bar: Home, Subjects, AI Chat, Profile
- Collapsible lesson sidebar
- Full-width chat interface

## Animation Guidelines
**Minimal & Purposeful**:
- Page transitions: Simple fade (150ms)
- Card hovers: Subtle lift only
- AI chat: Typing indicator (animated dots)
- Progress updates: Smooth number counting
- NO scroll animations, parallax, or decorative motion

This design creates a professional, culturally-appropriate educational platform that balances functionality with visual appeal, ensuring students can focus on learning while enjoying a modern, engaging interface.