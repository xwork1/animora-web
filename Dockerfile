FROM node:22-alpine AS build
WORKDIR /app
COPY . .
# Derleme, şablonlarda sabit metin veya eksik çeviri varsa başarısız olur.
RUN node build.mjs && node scripts/check-i18n.mjs

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY nginx-headers.conf /etc/nginx/snippets/headers.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
