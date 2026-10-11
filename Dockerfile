# syntax=docker/dockerfile:1

###############################################################################
# Production image for the Business Hub (Next.js 16) application.
#
# Strategy: `output: 'standalone'` + multi-stage build. The final image ships
# ONLY the traced runtime files (no dev deps, no source), so it is small and
# portable to any host that supports Docker (Kubernetes, Cloud Run, ECS,
# Fly.io, Render, a plain VPS, ...).
#
# Base OS: Debian "slim" (glibc), NOT Alpine. Next.js image optimization uses
# sharp, whose prebuilt binaries target glibc; Alpine (musl) can break them.
#
# Build (from the project root):
#   docker build -t joybangla:latest .
#   docker build --build-arg NEXT_PUBLIC_SANITY_PROJECT_ID=xxx \
#                --build-arg NEXT_PUBLIC_SANITY_DATASET=production -t joybangla:latest .
#
# Run:
#   docker run -p 3000:3000 --env-file .env.production joybangla:latest
###############################################################################

# Node LTS. Bump this ARG to move to a newer LTS line.
ARG NODE_VERSION=24-slim

###############################################################################
# Stage 1 — Install dependencies (cached unless package files change)
###############################################################################
FROM node:${NODE_VERSION} AS deps
WORKDIR /app

# Copy only the manifests first so this layer is reused across source changes.
COPY package.json package-lock.json* ./

# `npm ci` for a reproducible install straight from the lockfile.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

###############################################################################
# Stage 2 — Build the standalone production bundle
###############################################################################
FROM node:${NODE_VERSION} AS builder
WORKDIR /app

# Reuse the installed node_modules from the deps stage.
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* variables are inlined into the client/server bundles at build
# time, so they MUST be present here (they cannot be supplied at run time).
# Defaults match the public values already committed in sanity.config.ts.
ARG NEXT_PUBLIC_SANITY_PROJECT_ID=8e5qmtmg
ARG NEXT_PUBLIC_SANITY_DATASET=production
ENV NEXT_PUBLIC_SANITY_PROJECT_ID=$NEXT_PUBLIC_SANITY_PROJECT_ID
ENV NEXT_PUBLIC_SANITY_DATASET=$NEXT_PUBLIC_SANITY_DATASET

ENV NODE_ENV=production
# Opt out of Next.js anonymous telemetry.
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

###############################################################################
# Stage 3 — Minimal runtime image
###############################################################################
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# The standalone server binds to all interfaces so the container is reachable.
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# The Debian `node` image already ships a non-root `node` user (uid/gid 1000).

# Static public assets (served directly by the standalone server).
COPY --from=builder --chown=node:node /app/public ./public

# `.next/standalone` already contains server.js + traced node_modules.
# `.next/static` is NOT copied by the standalone step, so add it explicitly.
RUN mkdir -p .next && chown node:node .next
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static

# Drop root privileges.
USER node

EXPOSE 3000

# Container-level health probe (uses Node's built-in global fetch).
HEALTHCHECK --interval=30s --timeout=5s --start-period=25s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# Start the standalone server (equivalent to `next start`, minus the deps).
CMD ["node", "server.js"]
