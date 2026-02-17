# Momzart Ecommerce PWA

Momzart is a production-ready **Next.js + TypeScript + Tailwind** ecommerce Progressive Web App for premium handmade candles. It includes storefront flows, API routes, Prisma/PostgreSQL data models, authentication, and Razorpay payment hooks.

## Features

- Installable PWA (`manifest.json`, service worker caching, standalone display)
- Homepage with hero, categories, featured/best seller/new arrivals sections
- Product listing with filters, sorting controls, and pagination UI
- Product detail page (gallery, cart, wishlist, reviews)
- Cart and checkout UI with address collection and Razorpay order APIs
- User APIs + NextAuth auth (email credentials + Google OAuth scaffold)
- Order history/profile pages
- Admin dashboard scaffold for analytics and CRUD
- REST-like API routes for products, cart, orders, users, wishlist, reviews, and payments

## Project Structure

```bash
app/
  api/
    auth/[...nextauth]/route.ts
    products/route.ts
    products/[id]/route.ts
    cart/route.ts
    orders/route.ts
    orders/[id]/route.ts
    users/route.ts
    wishlist/route.ts
    reviews/route.ts
    payments/
      create-order/route.ts
      verify/route.ts
  (shop)/
    products/page.tsx
    product/[id]/page.tsx
    cart/page.tsx
    checkout/page.tsx
    orders/page.tsx
    profile/page.tsx
  admin/page.tsx
  layout.tsx
  page.tsx
  offline/page.tsx
components/
  PWAProvider.tsx
  ProductCard.tsx
lib/
  prisma.ts
  auth.ts
  razorpay.ts
prisma/
  schema.prisma
  seed.ts
public/
  manifest.json
  service-worker.js
  icons/icon-192.svg
  icons/icon-512.svg
```

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure env:
   ```bash
   cp .env.example .env
   ```
3. Run Prisma migration and generate client:
   ```bash
   npm run prisma:migrate
   npm run prisma:generate
   ```
4. Optional seed:
   ```bash
   npm run prisma:seed
   ```
5. Start dev server:
   ```bash
   npm run dev
   ```

## PWA Testing

1. Open `http://localhost:3000`.
2. In Chrome DevTools > Application:
   - Confirm Manifest loads and icons resolve.
   - Confirm service worker is active.
3. Toggle offline mode and reload previously visited pages. Navigations will fallback to `/offline`.
4. Use install button generated from `beforeinstallprompt` to add Momzart to home screen.

## Deployment

### Vercel (Recommended)

- Push repository to GitHub.
- Import project in Vercel.
- Set environment variables from `.env.example`.
- Add managed PostgreSQL (Neon/Supabase/RDS).
- Run production migrations with `npx prisma migrate deploy`.

### Netlify

- Use Next.js runtime on Netlify.
- Configure same environment variables.
- Run `npm run build` as build command.

### GitHub

- Keep source in GitHub and deploy from Vercel/Netlify CI.
- Direct GitHub Pages is not suitable for the full-stack backend, but can host a static export if backend is externalized.

## Scripts

- `npm run dev` – Run local dev server
- `npm run build` – Prisma generate + Next production build
- `npm run start` – Start production server
- `npm run prisma:migrate` – Create/apply migrations in dev
- `npm run prisma:seed` – Seed sample candle products
- `npm run deploy:vercel` – Deploy to Vercel CLI

## Notes for Production Hardening

- Replace in-memory cart/order/wishlist/review handlers with DB-backed user scoping.
- Add zod validation and stricter auth checks in all routes.
- Add image uploads (S3/Cloudinary), inventory locking, and webhooks for payment status updates.


## GitHub Push

```bash
git checkout main
git push origin main
```

If your remote uses another default branch name, push to that branch accordingly.
