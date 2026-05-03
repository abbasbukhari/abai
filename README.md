# ABAI Consulting — Website

Private, on-premise AI for Ontario small businesses. This is the marketing website for ABAI Consulting.

**Live:** https://abai.consulting

---

## About ABAI

ABAI Consulting installs custom AI systems that run entirely on your hardware. Your data never leaves your office. We work with law firms, medical practices, accounting firms, and other regulated businesses in Ontario that require strict data privacy.

**Services:**

- Initial setup & installation (same-day delivery)
- Ongoing support & optimization
- Custom AI training for your specific workflows

---

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** CSS (global, not modules) with CSS custom properties
- **Fonts:** Instrument Serif (display), Inter (UI), JetBrains Mono (technical)
- **Icons:** Custom line-icon SVG component
- **Hosting:** GitHub Pages with custom domain
- **CI/CD:** GitHub Actions (auto-deploy on push)

---

## Project Structure

```
src/
  components/
    Navbar.jsx          # Fixed nav with hamburger menu
    Hero.jsx            # Full-viewport hero with IDE pane
    Coverage.jsx        # Ontario service regions
    Benefits.jsx        # 3 value propositions
    Industries.jsx      # SQL query table display
    HowItWorks.jsx      # 4-step process timeline
    Services.jsx        # Expandable service pricing
    About.jsx           # Founder credentials + resume card
    Trust.jsx           # Compliance/security highlights
    Contact.jsx         # Contact form with validation
    Footer.jsx          # Footer with nav links

    SystemBar.jsx       # Fixed top system bar (UTC clock)
    IDEPane.jsx         # IDE-style component with tabs
    TechChrome.jsx      # Terminal, code blocks, syntax highlighting
    TechLogos.jsx       # 12 tech stack SVG logos
    Icon.jsx            # 7-icon set (arrow, check, mail, phone, pin, clock, plus)
    Logo.jsx            # ABAI logomark + lockup
    Breadcrumb.jsx      # Path navigation display

  styles/
    base.css            # Design tokens, buttons, typography
    logos.css           # ABAI branding, tech stack grid
    tech.css            # Terminal, status ribbon, syntax
    tech2.css           # System bar, IDE pane, JSON viewer, query table
    site.css            # Section layouts + mobile responsive (comprehensive)

  hooks/
    useReveal.js        # IntersectionObserver scroll reveal
    useScrolled.js      # Scroll position tracker for nav

  data.js              # All content constants (pricing, credentials, tech stack)
  App.jsx              # Root component
  main.jsx             # Vite entry point

public/
  favicon.svg          # Professional hexagon + A monogram
  CNAME                # Custom domain file for GitHub Pages
  assets/
    founder-final.png  # Abbas Bukhari portrait
    icons.svg          # Icon spritesheet (legacy, not used)

.github/workflows/
  deploy.yml           # Auto-deploy workflow (Vite build → GitHub Pages)
```

---

## Development

### Setup

```bash
git clone https://github.com/abbasbukhari/abai.git
cd abai
npm install
npm run dev
```

Opens at `http://localhost:5174`

### Build

```bash
npm run build    # Creates optimized dist/ folder
npm run preview  # Test production build locally
```

---

## Responsive Design

- **Desktop (880px+):** Full multi-column layouts, IDE pane visible, nav links shown
- **Tablet (540–880px):** Hamburger menu, single-column grids, IDE pane hidden
- **Mobile (320–540px):** Compact spacing, larger touch targets (44–50px), font scaling with `clamp()`
- **Landscape:** Optimized hero height, adjusted padding

All section spacing, font sizes, and button heights scale smoothly across breakpoints.

---

## Deployment

The site auto-deploys via GitHub Actions on every push to `main`.

### Initial Setup (one-time)

1. **DNS Configuration** (Dynadot or your registrar):

   ```
   A records:  185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   CNAME (www): abbasbukhari.github.io
   ```

2. **GitHub Pages Settings:**
   - Repo → Settings → Pages
   - Enable "GitHub Actions" as source
   - Set custom domain to `abai.consulting`
   - Enforce HTTPS (auto-issued by Let's Encrypt)

3. **DNS takes 10–30 minutes to propagate.** Check at [dnschecker.org](https://dnschecker.org).

### Updating the Site

```bash
# Make your changes
git add .
git commit -m "your message"
git push
```

GitHub Actions builds and deploys to GitHub Pages automatically (~1 minute).

---

## Security

- **HTTPS:** Free SSL via Let's Encrypt, auto-renews
- **CSP:** Content Security Policy prevents XSS and mixed content
- **X-Frame-Options:** Blocks clickjacking
- **Referrer Policy:** Limits referer leakage
- **Static host:** No server-side code = no backend vulnerabilities

See `index.html` `<meta>` tags for full security headers.

---

## Content

All copy, pricing, and credentials are in `src/data.js`. Update here to refresh the entire site:

```javascript
export const CREDENTIALS = [
  { org: "Microsoft", role: "Senior Platform Engineer", year: "2018–2021" },
  // ...
];

export const SERVICE_GROUPS = [
  {
    id: "setup",
    label: "Setup",
    items: [
      { n: 1, name: "Basic Installation", price: "Starting at $500" /* ... */ },
      // ...
    ],
  },
];
```

---

## Performance

- **Build size:** ~243KB (JS) + 37KB (CSS), gzips to 73KB + 8KB
- **Page load:** <1s on 4G (GitHub Pages CDN)
- **Images:** Single founder photo, all SVG (scalable)
- **Fonts:** Google Fonts (preconnect), system fallbacks
- **Accessibility:** WCAG 2.1 AA (semantic HTML, ARIA, color contrast)

---

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

---

## Contact

**Abbas Bukhari** — Founder, ABAI Consulting  
📧 abbas@abai.consulting  
📞 905 462 8072  
📍 Ontario, Canada

---

## License

Private. All rights reserved.
