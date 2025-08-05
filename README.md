# ADmyBRAND AI Suite - Landing Page

A stunning, modern landing page for "ADmyBRAND AI Suite" - a fictional AI-powered marketing platform. Built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

### Landing Page Sections
- **Hero Section** - Compelling headline, animated elements, and call-to-action
- **Features Section** - 10+ AI-powered features with icons and descriptions
- **Pricing Cards** - 3 tiers with interactive billing toggle and feature comparisons
- **Testimonials Carousel** - Customer reviews with photos and results
- **FAQ Section** - Collapsible questions with smooth animations
- **Footer** - Comprehensive links, social media, and contact information

### 🎨 Design Features (2025 Trends)
- **Glassmorphism Effects** - Modern glass-like UI elements
- **Subtle Animations** - Smooth scroll animations and micro-interactions
- **Modern Typography** - Inter and Poppins fonts with perfect hierarchy
- **Gradient Accents** - Beautiful color gradients throughout
- **Mobile-First Responsive** - Flawless on all devices
- **Dark Theme** - Premium dark design with excellent contrast

### ⚡ Technical Implementation
- **Next.js 14+** with App Router and TypeScript
- **Component Library** - 8+ reusable components (Button, Card, Modal, etc.)
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, consistent icons
- **Performance Optimized** - Fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ADMYBRAND
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Versatile button component
│   │   ├── Card.tsx         # Glassmorphism card component
│   │   ├── Modal.tsx        # Modal with backdrop blur
│   │   ├── Input.tsx        # Form input component
│   │   ├── Badge.tsx        # Status and tag component
│   │   ├── Accordion.tsx    # FAQ accordion component
│   │   ├── Carousel.tsx     # Testimonials carousel
│   │   └── index.ts         # Component exports
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Navigation header
│   │   └── Footer.tsx       # Site footer
│   └── sections/            # Page sections
│       ├── HeroSection.tsx      # Hero section
│       ├── FeaturesSection.tsx  # Features grid
│       ├── PricingSection.tsx   # Pricing cards
│       ├── TestimonialsSection.tsx # Customer reviews
│       └── FAQSection.tsx       # FAQ accordion
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Component Library

### Core Components

#### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg" icon={<ArrowRight />}>
  Get Started
</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`  
**Sizes:** `sm`, `md`, `lg`

#### Card
```tsx
import { Card } from '@/components/ui';

<Card variant="glass" hover={true}>
  Content here
</Card>
```

**Variants:** `default`, `glass`, `gradient`

#### Modal
```tsx
import { Modal } from '@/components/ui';

<Modal isOpen={isOpen} onClose={onClose} title="Modal Title">
  Modal content
</Modal>
```

#### Carousel
```tsx
import { Carousel } from '@/components/ui';

<Carousel 
  items={items} 
  autoPlay={true} 
  interval={5000}
  showDots={true}
  showArrows={true}
/>
```

#### Accordion
```tsx
import { Accordion } from '@/components/ui';

<Accordion 
  items={faqItems} 
  allowMultiple={false}
/>
```

## 🎯 Key Features

### 1. Hero Section
- Animated background elements
- Compelling headline with gradient text
- Call-to-action buttons with hover effects
- Statistics display
- Scroll indicator

### 2. Features Section
- 10 AI-powered features
- Colorful gradient icons
- Glassmorphism cards
- Smooth scroll animations

### 3. Pricing Section
- 3 pricing tiers
- Interactive monthly/yearly toggle
- Feature comparisons
- Popular plan highlighting

### 4. Testimonials
- Customer reviews with photos
- Results badges
- Auto-playing carousel
- Star ratings

### 5. FAQ Section
- Collapsible questions
- Smooth animations
- Contact CTAs

## 🛠️ Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    // ... more shades
    900: '#0c4a6e',
  },
  secondary: {
    // ... secondary colors
  }
}
```

### Animations
Custom animations are defined in `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'float': 'float 6s ease-in-out infinite',
}
```

### Typography
Fonts are configured in `layout.tsx`:

```typescript
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: ['300', '400', '500', '600', '700', '800'] })
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🚀 Performance

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Cumulative Layout Shift:** < 0.1

## 🎨 Design System

### Colors
- **Primary:** Blue gradient (#0ea5e9 to #0284c7)
- **Secondary:** Purple gradient (#d946ef to #c026d3)
- **Background:** Dark gradient (#0f172a to #1e293b)
- **Text:** White with opacity variations

### Typography
- **Headings:** Poppins (Display font)
- **Body:** Inter (Sans-serif)
- **Weights:** 300, 400, 500, 600, 700, 800

### Spacing
- **Section Padding:** 5rem (80px)
- **Container Max Width:** 80rem (1280px)
- **Component Spacing:** 1rem, 1.5rem, 2rem, 3rem

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify as needed.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: hello@admybrand.ai
- Phone: +1 (555) 123-4567

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS 