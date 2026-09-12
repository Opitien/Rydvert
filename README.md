# Rydvert

> **Turn everyday journeys into high-impact advertising opportunities.**

Rydvert is a premium platform that connects businesses looking for out-of-home (OOH) transit advertising with vehicle owners. By turning vehicles into moving advertising space, Rydvert brings brands to the streets, in motion, and across the city.

## 🚀 Tech Stack

This project is built with a modern, high-performance web stack:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🎨 Design Philosophy

Rydvert features a premium, confident, and restrained "editorial product design." 
- **Palette**: Pure black backgrounds (`#000000` / `#0a0a0a`), stark white text, and a signature accent green (`#02E965`).
- **Typography**: Custom `Agrandir` typeface used for varying weights and extended accents.
- **Micro-interactions**: Smooth, subtle entrance animations and interactive states powered by Framer Motion.

## 📦 Getting Started

First, ensure you have Node.js installed, then install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `src/app/` — Next.js App Router pages and global layouts.
  - `page.tsx` — Main landing page.
  - `layout.tsx` — Global layout including SEO metadata and top-level providers.
  - `globals.css` — Global CSS and Tailwind directives (including custom font-face definitions).
- `src/components/` — Reusable React components.
  - `Hero.tsx` — The main hero section with the vehicle ad preview.
  - `WaitlistProvider.tsx` — Custom Waitlist modal and context provider.
  - `AppScreens.tsx` — Dashboard UI mockups.
- `public/` — Static assets (images, fonts, SVGs).

## 🔍 SEO & Meta

The site is fully optimized for search engines with robust Next.js metadata configurations. Social sharing (OpenGraph & Twitter Cards) utilizes the custom `social-image.jpeg` asset.

## 📄 License

This project is proprietary and confidential.
