This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Deploy with Docker (production)

This app ships a production-ready, multi-stage `Dockerfile` using Next.js
[`output: 'standalone'`](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).
The final image contains only the traced runtime files (no source, no dev
dependencies), runs as a non-root user, and includes a health check — so it runs
on **any host that supports Docker** (a plain VPS, Kubernetes, AWS ECS/Fargate,
Google Cloud Run, Fly.io, Render, DigitalOcean, etc.).

### 1. Configure runtime secrets

```bash
cp .env.production.example .env.production
# then edit .env.production and fill in real values
```

`.env.production` is git-ignored. `NEXT_PUBLIC_*` variables are inlined at build
time and are passed as build args (see below); everything else is read at run
time from `.env.production`.

### 2a. Build & run with Docker Compose (recommended)

```bash
docker compose up -d --build
# app is served on http://localhost:3000
```

Logs / stop:

```bash
docker compose logs -f
docker compose down
```

### 2b. Or build & run with plain Docker

```bash
docker build -t joybangla:latest .

docker run -d --name joybangla \
  -p 3000:3000 \
  --env-file .env.production \
  --restart unless-stopped \
  joybangla:latest
```

To override the Sanity build args:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id \
  --build-arg NEXT_PUBLIC_SANITY_DATASET=production \
  -t joybangla:latest .
```

### Notes

- **Port:** the container listens on `0.0.0.0:3000`. Map it with `-p HOST:3000`
  and set `NEXTAUTH_URL` to the public URL.
- **Secrets:** never bake secrets into the image — always pass them at run time
  (`--env-file` / `env_file`).
- **Reverse proxy:** for public traffic, put a TLS-terminating proxy (nginx,
  Caddy, Traefik, or your cloud load balancer) in front of the container.
- **Local dev:** prefer `npm run dev` over Docker during development for speed.

---

## Deploy to Render.com

This repo includes a **`render.yaml`** Blueprint, so deploying to
[Render](https://render.com) is fully automated. Render builds the `Dockerfile`
on its own hosts (`runtime: docker`) — no local build or registry needed.

### Steps

1. **Push** this repo (including `render.yaml` and `Dockerfile`) to GitHub.
2. In the **Render Dashboard** → **New +** → **Blueprint** → select this repo.
   Render reads `render.yaml` and proposes the `joybangla` web service.
3. When prompted, fill in the **`sync: false`** secrets in the dashboard:
   - `NEXTAUTH_URL` — set **after** the first deploy to your assigned
     `https://<name>.onrender.com` URL (no trailing slash).
   - `RESEND_API_KEY`, `UPLOADTHING_SECRET`, `UPLOADTHING_APP_ID`,
     `SANITY_API_TOKEN` — optional; only if you use those features.
   - `NEXTAUTH_SECRET` is **auto-generated** by Render (`generateValue: true`).
4. **Deploy.** Render assigns a `*.onrender.com` URL and routes traffic to the
   container.

### Why it works out of the box

- **PORT:** Render injects `PORT=10000` at runtime; the standalone `server.js`
  reads `process.env.PORT` and binds to `0.0.0.0` — verified against Render's
  port-binding contract.
- **Health check:** `healthCheckPath: /` returns `200` (prerendered home route).
- **Build args:** `NEXT_PUBLIC_SANITY_*` are inlined at build time; Render
  automatically translates those service env vars into Docker build args, which
  the `Dockerfile` declares as matching `ARG`s.
- **Secrets stay out of the image:** the `Dockerfile` never declares the secret
  keys as `ARG`, so they're provided only at run time — never baked in.

### Notes

- **Plan:** `render.yaml` uses the `free` plan (great for previews, but it
  cold-starts after ~15 min idle). Change `plan: free` → `plan: starter` for an
  always-on production instance.
- **Runtime is immutable:** once created you can't switch a service between
  `docker` / `node` / `image` — rename it to recreate.
- **Cold starts (free tier):** the first request after idle can take ~30–60s
  while the container boots.


