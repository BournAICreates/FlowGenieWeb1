# Flowgenie Web

A modern, professional website for Flowgenie - a team specializing in AI-powered workflows, lead generation automations, and custom chatbot widgets.

## Features

- **Modern Design**: Clean white and blue theme with professional typography
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Built with Next.js 14 and optimized for search engines
- **Performance**: Fast loading with optimized images and code splitting

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Fonts**: Inter & Poppins from Google Fonts

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services section
│   ├── Team.tsx             # Team section
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Sections

### Hero Section
- Compelling headline and subheadline
- Call-to-action buttons
- Animated background graphics
- Feature highlights

### Services Section
- Lead Generation Workflows
- AI Chatbot Widgets
- Automation Setup
- Interactive service cards with hover effects

### Team Section
- Team member profiles with photos
- Professional bios and roles
- Social media links
- Contact information

### Contact Section
- Contact form with validation
- Contact information cards
- Quick response promise
- Professional layout

## Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- Primary: Blue shades (#3b82f6 to #1e3a8a)
- Royal: Sky blue shades (#0ea5e9 to #0c4a6e)
- Custom gradients and hover states

### Fonts
- **Inter**: Used for body text and general content
- **Poppins**: Used for headings and display text

### Animations
- Fade-in animations on scroll
- Hover effects on interactive elements
- Smooth transitions throughout
- Floating background elements

## Deployment

The site is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

Build the production version:
```bash
npm run build
```

## Team

- **Tanner**: Automation Architect & Workflow Designer
- **Desi**: Sales & Marketing
- **Steve Grimm**: Business Strategy & Client Relations

## Contact

- Email: contactflowgenie@gmail.com
- Location: 3776 N. 1st Ave. Suite #200, Tucson, AZ 85719

---

Built with ❤️ by the Flowgenie team
