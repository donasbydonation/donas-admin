FROM node:lts-alpine AS base

# -------------------------
# Dependencies
# -------------------------
FROM base AS deps

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# -------------------------
# Build results
# -------------------------
FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

# -------------------------
# Image
# -------------------------
FROM nginx:stable-alpine3.17-slim

COPY default.conf.template /etc/nginx/templates/
COPY --from=builder /app/build /usr/share/nginx/html

ENV APP_ADM_CONTAINER_PORT=8000
