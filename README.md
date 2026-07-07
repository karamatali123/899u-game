# 899u Game Guide

Independent SEO-optimized guide site for 899u Game in Pakistan.

## SEO features included

- **Metadata API** — title, description, keywords, canonical, Open Graph, Twitter cards
- **`/sitemap.xml`** — auto-generated sitemap
- **`/robots.txt`** — crawl rules with sitemap reference
- **`/manifest.webmanifest`** — PWA manifest
- **JSON-LD schemas** — WebPage, WebSite, Organization, Article, SoftwareApplication, FAQPage, BreadcrumbList, ItemList, HowTo (×2)
- **Microdata** — Article itemscope on main content
- **Semantic HTML** — landmarks, aria labels, skip link, `lang="en-PK"`
- **Static generation** — fast loads, crawler-friendly

## Setup

```bash
npm install
cp .env.example .env.local
# Edit NEXT_PUBLIC_SITE_URL to your live domain
npm run dev
```

## Deploy (Vercel recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
4. Deploy

After deploy, verify:

- `https://yourdomain.com/sitemap.xml`
- `https://yourdomain.com/robots.txt`
- `https://yourdomain.com/manifest.webmanifest`

## Google Search Console

1. Add your property in [Google Search Console](https://search.google.com/search-console)
2. Copy verification code to `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
   ```
3. Redeploy and submit sitemap URL

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | Live site URL, e.g. `https://899u.com.pk` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | No | Bing Webmaster verification |
