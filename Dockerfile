# Build the @fuel-ui/react Storybook (the same `pnpm build:storybook` Vercel ran)
# and serve the static output with nginx.
FROM node:18-bookworm-slim AS build

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 make g++ git ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# pnpm-lock.yaml is lockfileVersion 6, which needs pnpm 8.
RUN npm install -g pnpm@8.15.9

WORKDIR /app

ENV NODE_ENV=production
ENV HUSKY=0
ENV CI=true
ENV NODE_OPTIONS=--max-old-space-size=4096

# Workspace packages are needed at install time, so copy the whole repo.
COPY . .

RUN pnpm install --frozen-lockfile --prod=false

RUN pnpm build:storybook

FROM nginx:1.27-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/design-system/react/storybook-static /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
