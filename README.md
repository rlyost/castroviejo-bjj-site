# Castroviejo Brazilian Jiu Jitsu - Website

Static website for Castroviejo Brazilian Jiu Jitsu Academy, located at 701 Arguello St, Redwood City, CA 94063.

## About

This site replaces the previous Wix-hosted site at castroviejobjj.com. It's a fully static build with zero dependencies on external platforms or CMS tools.

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Fonts: Jost (headings), Cormorant Garamond (serif accents), Nunito Sans (body)
- CSS custom properties for theming
- Responsive design with mobile hamburger menu
- Hero image slideshow
- FAQ accordion
- Google Maps embed
- LocalBusiness structured data (JSON-LD)
- Open Graph meta tags
- Google Analytics placeholder (replace `G-XXXXXXXXXX` with your tracking ID)

## Pages

| File | Description |
|------|-------------|
| `index.html` | Homepage with hero slideshow, about, programs, schedule preview, testimonials, contact |
| `about.html` | Prof. Leandro Castroviejo bio, achievements, gallery |
| `adults-bjj.html` | Adult Gi and No-Gi program details and schedule |
| `kids-bjj.html` | Kids programs for ages 4-6, 7-10, 11-15 |
| `self-defense.html` | Men & Women Self Defense class info |
| `schedule.html` | Full weekly schedule table with class legend |
| `pricing.html` | Membership tiers: Single Class ($175), Unlimited ($270), Family ($400) |
| `first-class.html` | Step-by-step guide for new students |
| `faq.html` | Frequently asked questions with accordion |
| `contact.html` | Contact form, map, phone, email, hours |

## Project Structure

```
/
├── index.html
├── about.html
├── adults-bjj.html
├── kids-bjj.html
├── self-defense.html
├── schedule.html
├── pricing.html
├── first-class.html
├── faq.html
├── contact.html
├── styles.css
├── main.js
├── sitemap.xml
├── robots.txt
├── README.md
└── resources/
    └── images/
        ├── CastroviejoBJJ.avif      (logo)
        ├── melhor.avif               (favicon)
        ├── Cover_image.avif          (hero slide)
        ├── win2.png                  (hero slide)
        ├── prof.avif                 (founder portrait)
        ├── proj_mentor.avif          (mentoring photo)
        ├── Prof_win.avif             (competition win)
        ├── kids.avif                 (kids class)
        ├── kids2.avif                (kids practice)
        ├── win_Dan.png               (competition photo)
        └── ...                       (additional academy photos)
```

## Deployment

This is a static site. Drop the files on any web server, CDN, or static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

Before going live:
1. Replace `G-XXXXXXXXXX` in all HTML files with your Google Analytics tracking ID
2. Update the Google Maps embed URL in `index.html` and `contact.html` with a valid API key
3. Point your domain DNS to the hosting provider

## Contact

Castroviejo Brazilian Jiu Jitsu LLC
- Phone: (650) 445-1274
- Email: castroviejobjj@gmail.com
- Instagram: @castroviejobrazilianjiujitsu
