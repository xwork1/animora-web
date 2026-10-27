# Animora web sitesi

Animora (çiftlik ve sürü yönetimi uygulaması) tanıtım sitesi ve yasal sayfaları. Bağımlılıksız statik site: `node build.mjs` → `dist/`, nginx ile sunulur (Dockerfile).

- İçerik: `src/pages-tr.mjs`, `src/pages-en.mjs`
- Veri sorumlusu ve site adresi: `src/content.mjs`
- Stil: `src/site.css`

Yasal sayfalar: `/gizlilik`, `/kvkk`, `/kullanim-kosullari`, `/hesap-silme`, `/destek`, `/cerez-politikasi` ve İngilizce `/en/privacy`, `/en/terms`, `/en/delete-account`, `/en/support`, `/en/cookies`.

Yerel önizleme: `node build.mjs && npx serve dist`
Yayın: Coolify (Dockerfile build pack), https://animora.appouse.com
