# Design Guidelines: Vibhanshu Shukla - Professional Portfolio

## Design Approach
**Reference-Based with Material Design Foundation**
- Primary inspiration: Linear's clean typography + Stripe's professional restraint + Material Design principles
- Focus: Technical credibility meets visual polish - showcasing 10+ years of senior mobile engineering expertise
- Personality: Confident, modern, technically sophisticated without being flashy

## Layout System
**Spacing Units**: Use Tailwind spacing scale focused on 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: `py-20` desktop, `py-12` mobile
- Component spacing: `gap-8` for grids, `space-y-6` for vertical stacks
- Container: `max-w-7xl mx-auto px-6` for all sections

## Typography Hierarchy
**Font Stack**: 
- Primary: Inter or DM Sans (Google Fonts) - clean, professional, highly readable
- Accent: JetBrains Mono or Fira Code for tech tags/code references

**Scale**:
- H1 (Hero): `text-5xl lg:text-7xl font-bold` - commanding presence
- H2 (Section): `text-3xl lg:text-4xl font-bold` - clear hierarchy
- H3 (Subsection): `text-xl lg:text-2xl font-semibold`
- Body: `text-base lg:text-lg` - enhanced readability
- Small/Tags: `text-sm font-medium`

## Component Library

### Hero Section
**Structure**: Full-screen impact with centered content
- Large hero heading with name
- Subtitle showing role titles (3 specializations)
- Compelling tagline: "Architecting scalable mobile solutions across Android, React Native & Flutter ecosystems"
- Dual CTAs: "View Projects" (primary) + "Download Resume" (secondary with blur background)
- Social icons row (LinkedIn, GitHub, Email) - subtle, not competing with CTAs
- Subtle animated gradient background or abstract geometric pattern
- **Hero Image**: Large, professional headshot or abstract tech-themed illustration on right side (desktop) or background overlay (mobile)

### About Section
**Layout**: Two-column on desktop (`lg:grid-cols-2 gap-12`)
- Left: Engaging narrative (3-4 paragraphs highlighting journey, expertise, impact)
- Right: Quick stats cards showcasing "10+ Years Android", "4+ Years React Native", "2+ Years Flutter", "Led 10+ Teams"
- Stats in bordered cards with subtle hover lift effect

### Skills Section
**Grid Layout**: Multi-column taxonomy (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`)
- Category cards: "Languages", "Android", "React Native", "Flutter", "Tools & DevOps", "Testing"
- Each card: Category title + skill pills/tags in flex wrap
- Skill pills: Rounded badges with medium weight text, subtle borders
- No icons in tags - clean text-only for professional feel

### Experience Timeline
**Layout**: Vertical timeline with alternating alignment (desktop) / stacked (mobile)
- Timeline connector line on left with company logo placeholders (circles)
- Each entry: Company name (bold) + Role + Date range + 3-4 bullet achievements
- Expandable cards on click for full details (initially show 2-3 bullets)
- Chronological order: Accenture → Infinite → CubeSquare → Pensar

### Projects Showcase
**Hero of Portfolio**: 3-column grid desktop (`lg:grid-cols-3 gap-8`), 1-column mobile
**10+ Project Cards** featuring:
- Card structure: Image placeholder at top (400x250) → Title → 2-line description → Tech stack tags (flex wrap) → View details link
- Hover interaction: Lift effect (`hover:shadow-xl transition-all`) + subtle scale
- Tech stack: Inline pills showing 4-6 key technologies per project
- Featured projects (Compre Ahora, Tindanhan Club, Ucube.AI): Larger cards or highlighted borders
- Project categories visible: B2B Commerce, Healthcare, Real-time Tracking, Legal Tech

### Education & Achievements
**Split Layout**: (`lg:grid-cols-2 gap-12`)
- Left: Education card (B.Tech, university, years)
- Right: Achievement badges in grid (3 certifications with subtle icons or borders)

### Contact Section
**Centered Layout**: Clean, accessible form alternative
- Large heading: "Let's Build Something Amazing"
- Contact methods in grid: Email (clickable) + Phone + LinkedIn + GitHub (all as prominent linked cards)
- Resume download CTA prominently featured
- Optional: Simple contact form (Name, Email, Message, Submit) if space allows

## Animations & Interactions
**Minimal, Purposeful Motion**:
- Scroll-triggered fade-in for sections (using Intersection Observer)
- Smooth scroll navigation between sections
- Card hover: lift + shadow (no wild transforms)
- Button hover: subtle brightness shift
- No parallax, no complex animations - professional restraint

## Navigation
**Sticky Header**: 
- Logo/Name on left, nav links center/right
- Links: About, Skills, Experience, Projects, Contact
- Mobile: Hamburger menu with slide-in drawer
- Semi-transparent background with backdrop blur when scrolled

## Responsive Strategy
**Breakpoints**:
- Mobile-first approach
- Key shift at `md:` (768px) and `lg:` (1024px)
- Hero: Stack on mobile, side-by-side desktop
- Grids: 1 column mobile → 2-3 columns desktop
- Typography: Scale down ~20% on mobile

## Images
**Hero Section**: Professional headshot or abstract mobile technology illustration (code patterns, device mockups) - positioned right side on desktop, subtle overlay on mobile

**Project Cards**: Placeholder images for each of 10+ projects showing app screenshots, UI mockups, or relevant project visuals (400x250 aspect ratio, rounded corners)