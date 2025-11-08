# Vibhanshu Shukla - Professional Portfolio

A modern, responsive portfolio website showcasing 10+ years of mobile engineering expertise across Android, React Native, and Flutter.

## 🌟 Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark/Light Mode** - Toggle between themes with preference saved locally
- **Smooth Animations** - Elegant scroll animations and hover effects
- **SEO Optimized** - Meta tags and Open Graph support for better visibility
- **Modern Stack** - Built with React, TypeScript, and Tailwind CSS
- **Professional Sections**:
  - Hero section with professional headshot and tagline
  - About Me with key achievements and stats
  - Technical Skills organized by category
  - Work Experience timeline
  - Featured Projects showcase (10+ projects)
  - Education & Certifications
  - Contact information with social links
  - Downloadable resume

## 🚀 Quick Start

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone or open this project on Replit
2. The dependencies are already installed
3. Click the "Run" button or use the command:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the provided URL

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Portfolio.tsx
│   │   ├── App.tsx
│   │   └── index.css        # Tailwind styles
│   └── index.html           # SEO meta tags
├── attached_assets/         # Resume and images
├── design_guidelines.md     # Design system documentation
└── README.md
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `client/src/components/Hero.tsx`:
   - Update name, title, and tagline
   - Modify social media links (LinkedIn, GitHub, Email)

2. **About Section** - Edit `client/src/components/About.tsx`:
   - Update biography and stats

3. **Skills** - Edit `client/src/components/Skills.tsx`:
   - Add/remove skill categories and technologies

4. **Experience** - Edit `client/src/components/Experience.tsx`:
   - Update job history and achievements

5. **Projects** - Edit `client/src/components/Projects.tsx`:
   - Add your projects with descriptions and tech stacks

6. **Contact** - Edit `client/src/components/Contact.tsx`:
   - Update contact methods and links

### Replace Resume

Replace the file at `attached_assets/Vibhanshu_Shukla_Resume_1762594194133.pdf` with your own PDF resume.

### Change Colors

The color palette is defined in `client/src/index.css`. The primary blue color can be customized:
- Light mode: `--primary: 217 91% 35%`
- Dark mode: `--primary: 217 91% 35%`

### Add/Replace Images

Images are stored in `attached_assets/generated_images/`. You can replace:
- Professional headshot
- Project screenshots
- Background images

## 🌐 Deployment

### Deploy on Replit
1. Click the "Deploy" or "Publish" button in Replit
2. Your portfolio will be live at `your-repl-name.replit.app`

### Deploy on GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist/public` folder to your GitHub Pages repository
3. Configure GitHub Pages to serve from the correct directory

### Deploy on Vercel/Netlify
1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist/public`

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 SEO Features

- Descriptive title tags on all pages
- Meta descriptions for better search results
- Open Graph tags for social media sharing
- Twitter Card support
- Semantic HTML structure

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

## 🙏 Credits

Built with:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Shadcn UI](https://ui.shadcn.com/)

---

**Made with ❤️ by Vibhanshu Shukla**
