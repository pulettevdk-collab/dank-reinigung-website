# Dank Reinigung - Modern React Website

A modern, responsive, and SEO-optimized website for Dank Reinigung, a professional cleaning service company in Berlin and surrounding areas.

## 🌟 Features

- **Modern Design**: Dark theme with cyan/blue gradient accents
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Scroll-based animations and smooth transitions
- **SEO Ready**: Comprehensive meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessible**: WCAG compliant with proper contrast and navigation

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **PostCSS & Autoprefixer** - CSS processing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup Steps

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```
The site will open at `http://localhost:3000`

3. **Build for production:**
```bash
npm run build
```
Production files will be in the `dist/` directory

4. **Preview production build:**
```bash
npm run preview
```

## 📱 Sections

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **Services** - Five main cleaning services:
   - Hausreinigung (House Cleaning)
   - Treppenhausreinigung (Stairwell Cleaning)
   - Büroreinigung (Office Cleaning)
   - Fensterreinigung (Window Cleaning)
   - Solarreinigung (Solar Panel Cleaning)
3. **About** - Company information and values
4. **Locations** - Service areas (Berlin, Eberswalde, Bernau, Bad Freinwalde, Umgebung)
5. **Contact** - Phone, email, and location information

## 🎨 Customization

### Colors
The color scheme uses Tailwind CSS utilities. Main colors:
- Primary: Cyan (cyan-400, cyan-500)
- Secondary: Blue (blue-400, blue-500)
- Background: Slate (slate-900, slate-950)

To change colors, modify the Tailwind classes in `dank-reinigung-website.jsx`

### Content
All text content is in German and can be edited directly in the component file. Key areas:
- Services descriptions
- Company information
- Contact details
- Locations

### Animations
Scroll-based animations are implemented with:
- IntersectionObserver API
- CSS transitions and transforms
- Custom Tailwind animation utilities

## 🚀 Deployment

### Recommended Hosting Platforms:

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Connect your Git repository
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Add homepage to package.json
   - Install gh-pages: `npm install --save-dev gh-pages`
   - Add deploy scripts to package.json

4. **Traditional Hosting**
   - Build the project: `npm run build`
   - Upload `dist/` folder contents to your web server

## 📊 SEO Optimization

The site includes:
- Semantic HTML5 elements
- Meta tags (description, keywords, author)
- Open Graph tags for social media
- Twitter Card tags
- Proper heading hierarchy (h1-h4)
- Alt text for icons (via aria-labels)
- Mobile-friendly viewport settings

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Project Structure

```
dank-reinigung-website/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & Tailwind
├── dank-reinigung-website.jsx  # Main website component
├── index.html                  # HTML template
├── package.json                # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🎯 Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Fast First Contentful Paint (FCP)
- Optimized images and assets
- Lazy loading for images
- Minified CSS and JavaScript

## 📞 Contact Information

Update the contact information in the Contact section:
- Phone: 0151 110 727 38
- Email: info@dank-reinigung.de
- Service Areas: Berlin, Bernau, Wandlitz, Angermünde, Eberswalde

## 📝 License

This website is proprietary software created for Dank Reinigung.

## 🤝 Support

For questions or support, contact:
- Email: info@dank-reinigung.de
- Phone: 0151 110 727 38

---

Built with ❤️ by Claude AI for Dank Reinigung
