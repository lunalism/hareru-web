# Hareru Web

Marketing site for **Hareru** — a personal finance app that automatically excludes bank transfers to show your real spending.

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The site redirects `/` to `/ja/` by default.

## Screenshots

Placeholder iPhone frames are rendered in `components/Screenshots.tsx`.

To replace with real screenshots:

1. Add images to `public/screenshots/` (e.g., `screen-01.png` … `screen-06.png`)
2. Update `components/Screenshots.tsx` to use `<Image src="/screenshots/screen-01.png" />` instead of the placeholder frames

## Deployment

The project is configured for **Vercel** (Tokyo region `nrt1`).

1. Push to GitHub — Vercel auto-deploys on every push
2. Connect your domain: Vercel Dashboard → Project → Settings → Domains → add `hareru.app`
3. Vercel will provision SSL automatically

## App Store Links

Once the app is live on the App Store, update the `href="#"` placeholders in:

- `components/Nav.tsx` — download CTA
- `components/Hero.tsx` — hero CTA button

## i18n

Supported locales: `ja` (default), `en`, `ko`

Translation files: `messages/ja.json`, `messages/en.json`, `messages/ko.json`
