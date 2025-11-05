# AI Dashboard

A modern AI-powered dashboard built with Next.js 15, React 19, and TypeScript. This project provides data analytics and insights through an intuitive interface.

## Tech Stack

- **Framework:** Next.js 15.5.3 (App Router)
- **UI:** React 19.1.0
- **Styling:** Tailwind CSS v4
- **Typography:** Geist Font Family
- **Language:** TypeScript 5
- **Linting:** ESLint with Next.js config

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── public/             # Static assets
```

## Features

- ✨ Server-side rendering with Next.js App Router
- 🎨 Modern UI with Tailwind CSS v4
- 🌙 Dark mode support
- 📱 Responsive design
- ⚡ Optimized fonts with Geist
- 🔍 SEO optimized with comprehensive metadata
- 📊 TypeScript for type safety

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Deployment

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-dashboard)

1. Push your code to a Git repository
2. Import your project to Vercel
3. Vercel will detect Next.js and configure the build automatically
4. Set environment variables in the Vercel dashboard

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Vercel Font (Geist)](https://vercel.com/font)

## License

See the [LICENSE](../LICENSE) file in the project root for details.
