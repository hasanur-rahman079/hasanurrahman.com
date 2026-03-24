# hasanurrahman.com

Personal portfolio and academic website of [MD. Hasanur Rahman](https://www.hasanurrahman.me) — researcher, developer, and entrepreneur.

Built with Next.js 16 App Router. Feel free to fork and adapt it for your own portfolio.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Webpack) |
| Styling | Tailwind CSS |
| Content | Contentlayer2 (MDX blog posts) |
| Database | Supabase (blog views, scholar stats) |
| Images | Cloudinary |
| Research data | ORCID Public API, SerpApi (Google Scholar) |
| Deployment | Vercel |
| Linter/Formatter | Biome (Ultracite config) |

---

## Features

- **Blog** — MDX posts with syntax highlighting (rehype-pretty-code), view counters stored in Supabase
- **Research page** — Publications auto-fetched from ORCID, citations/h-index/i10-index auto-updated daily via SerpApi → Supabase, year-by-year citation bar chart
- **Homepage stats** — Live Google Scholar citations, GitHub public repos, total blog views
- **Daily cron job** — Vercel cron updates Scholar stats once per day (1 SerpApi request/day)
- **ISR** — Research and blog pages revalidate every 24h without a full rebuild
- **SEO** — Dynamic sitemap, robots.txt, Open Graph metadata
- **404 page** — Custom not-found page matching site theme

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)
- A [Supabase](https://supabase.com) project
- A [SerpApi](https://serpapi.com) account (free tier: 250 searches/month)
- A [Cloudinary](https://cloudinary.com) account (for gallery images)

### 1. Clone and install

```bash
git clone https://github.com/hasanur-rahman079/hasanurrahman.com.git
cd hasanurrahman.com
pnpm install
```

### 2. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# GitHub (for contribution stats on homepage)
GITHUB_TOKEN=your_github_pat

# SerpApi (Google Scholar automation)
SERPAPI_KEY=your_serpapi_key

# Cron job security (any random secret string)
# Generate with: openssl rand -hex 32
CRON_SECRET=your_random_secret
```

### 3. Set up Supabase tables

Run the following SQL in your Supabase **SQL Editor**:

```sql
-- Blog view counters
CREATE TABLE views (
  slug TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

-- Google Scholar stats (single row, updated daily by cron)
CREATE TABLE scholar_stats (
  id INTEGER PRIMARY KEY DEFAULT 1,
  citations INTEGER NOT NULL DEFAULT 0,
  h_index INTEGER NOT NULL DEFAULT 0,
  i10_index INTEGER NOT NULL DEFAULT 0,
  citations_graph JSONB DEFAULT '[]',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO scholar_stats (id, citations, h_index, i10_index, citations_graph)
VALUES (1, 0, 0, 0, '[]');
```

### 4. Personalise the content

| File | What to change |
|------|---------------|
| `lib/info.tsx` | Your name, bio, avatar, about text |
| `lib/orcidApi.tsx` | Your ORCID ID |
| `app/api/cron/update-scholar-stats/route.ts` | Your Google Scholar `author_id` |
| `app/layout.tsx` | Site title, description, Open Graph URL, keywords |
| `app/sitemap.ts` | `BASE_URL` constant |
| `app/robots.ts` | `host` and `sitemap` URLs |
| `public/cv_hasanur.pdf` | Replace with your own CV |
| `content/` | Add your blog posts as `.mdx` files |

### 5. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### 6. Populate Scholar stats for the first time

After starting the dev server, trigger the cron endpoint manually, make sure your dev server is running `pnpm dev`:

```bash
curl -H "Authorization: Bearer YOUR_CRON_SECRET" \
  http://localhost:3000/api/cron/update-scholar-stats
```

Expected response: `{ "success": true, "citations": ..., "h_index": ..., "i10_index": ... }`

---

## Writing Blog Posts

Create a new `.mdx` file in the `content/` directory:

```
content/your-post-slug.mdx
```

Required frontmatter:

```mdx
---
title: "Your Post Title"
publishedAt: "2026-01-15"
summary: "A short description shown on the blog listing page."
image: "/blog_images/optional-cover.png"
---

Your content here...
```

The post will appear automatically on the next dev server restart (or within 24h on production via ISR).

---

## Deployment (Vercel)

1. Push to GitHub and import the repo in [Vercel](https://vercel.com)
2. Add all environment variables from `.env` to Vercel project settings (**Settings → Environment Variables**)
3. The `vercel.json` cron job runs daily at 00:00 UTC automatically — no extra setup needed

```json
{
  "crons": [{
    "path": "/api/cron/update-scholar-stats",
    "schedule": "0 0 * * *"
  }]
}
```

> **Note:** Vercel Cron Jobs require a **Pro plan** or higher. On the free Hobby plan, trigger the endpoint manually or via a free external cron service (e.g. [cron-job.org](https://cron-job.org)) with the `Authorization` header.

---

## Project Structure

```
├── app/
│   ├── api/
│   │   ├── cron/update-scholar-stats/   # Daily SerpApi → Supabase sync
│   │   ├── orcid/works/[pcode]/         # Server-side ORCID proxy
│   │   └── views/[slug]/               # Blog view counter (GET/POST)
│   ├── blog/[slug]/                     # Dynamic blog post pages
│   ├── research/                        # Research page (ORCID + Scholar stats)
│   ├── not-found.tsx                    # Custom 404 page
│   ├── sitemap.ts                       # Dynamic sitemap
│   └── robots.ts                        # robots.txt
├── components/
│   └── researchPage/
│       ├── research-impacts.tsx         # Stats grid + citations bar chart
│       └── authors.tsx                  # Publication authors (via ORCID proxy)
├── content/                             # MDX blog posts
├── lib/
│   ├── orcidApi.tsx                     # ORCID fetch helpers
│   ├── scholar-stats.ts                 # Supabase reader for Scholar stats
│   ├── metrics.tsx                      # Blog views from Supabase
│   └── supabase.ts                      # Supabase client
└── vercel.json                          # Cron job config
```

---

## License

MIT — feel free to use, modify, and distribute.

If you build something with this, a credit or a star ⭐ is always appreciated.
