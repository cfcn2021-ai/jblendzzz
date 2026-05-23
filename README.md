# Jblendzzz — Mobile Barber Landing Page

A custom landing page for **Jblendzzz**, a home-service barber in Antique & Aklan, Philippines. Built to replace a default Setmore booking page with something that actually represents the brand.

Stack: **Next.js 16** (App Router) + **Tailwind v4** + **TypeScript**.

---

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  page.tsx            Home page (just composes the sections)
  globals.css         Tailwind import + theme tokens
components/
  Nav.tsx             Sticky nav + mobile menu (client component)
  Hero.tsx            Hero section with primary CTA
  Services.tsx        3 service cards from lib/site.ts
  WhyChoose.tsx       Value props
  Reviews.tsx         Star rating + review cards
  Booking.tsx         Big CTA block linking to Setmore
  Contact.tsx         Phone / email / address / hours
  Footer.tsx          Logo + socials + copyright
  WhatsAppButton.tsx  Floating chat button (bottom-right)
lib/
  site.ts             All business info + services. Edit ONE file to update everything.
```

## Editing content

**To change prices, services, contact info, or the booking URL:** edit `lib/site.ts`. Nothing else needs to change.

**To add real photos:**
1. Drop images into `public/` (e.g. `public/hero.jpg`, `public/cut-regular.jpg`).
2. Use them with `<Image src="/hero.jpg" ... />` from `next/image`, or with plain `<img>`.

**To swap copy / headings:** edit the relevant component in `components/`.

## Deploy to Netlify

1. **Push to GitHub.** Create a new repo on github.com, then in this folder:
   ```bash
   git init
   git add .
   git commit -m "initial site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/jblendzzz.git
   git push -u origin main
   ```

2. **Connect to Netlify.**
   - Go to https://app.netlify.com → Add new site → Import from Git → pick the repo.
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Netlify auto-detects Next.js and installs the plugin.

3. **First deploy gives you a URL like** `jblendzzz-xyz123.netlify.app`. Test it.

## Connect a custom domain

1. **Register the domain in HIS name and email** (not yours). Options:
   - Namecheap (https://namecheap.com) — ~₱500–700/yr for `.com`
   - Z.com PH for `.ph` domains

2. **Add the domain in Netlify:** Site settings → Domain management → Add custom domain.

3. **Point DNS:** Netlify shows the nameservers. Update them in the registrar's dashboard. Propagation takes 1–24 hrs.

4. **SSL is automatic** once DNS resolves. Verify HTTPS works before sharing the new URL.

## Tweak the design

- **Brand color** lives in `app/globals.css` as `--color-gold`. Change once, updates everywhere.
- **Fonts** are loaded in `app/layout.tsx` (`Bebas_Neue` + `Inter`). Swap by changing the imports.
- **Section order** is in `app/page.tsx`. Reorder or remove sections by editing that file.

## Before launch checklist

- [ ] Replace placeholder reviews in `components/Reviews.tsx` with real Google reviews.
- [ ] Add 3+ real before/after photos to the hero / services.
- [ ] Verify the Setmore URL in `lib/site.ts` is current.
- [ ] Add Google Analytics / Plausible if tracking is wanted.
- [ ] Add Open Graph image (`app/opengraph-image.png`, 1200×630) so link previews look good.
- [ ] Submit URL to Google Search Console.

## License

Built for Jblendzzz. Use freely.
