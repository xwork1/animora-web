// Animora tanıtım sitesi için bağımlılıksız statik site üreticisi.
// Kullanım: node build.mjs  ->  dist/ klasörüne HTML çıktısı yazar.
import { mkdirSync, writeFileSync, copyFileSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, pagesFor } from './src/content.mjs';
import { icon } from './src/ui.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');

const t = {
  tr: {
    nav: [['/#ozellikler', 'Özellikler'], ['/#paketler', 'Paketler'], ['/#sss', 'SSS'], ['/destek', 'Destek']],
    menu: 'Menü',
    skip: 'İçeriğe geç',
    footTagline: 'Büyükbaş ve küçükbaş işletmeler için çiftlik ve sürü yönetimi uygulaması.',
    product: 'Ürün',
    legal: 'Yasal',
    productLinks: [['/#ozellikler', 'Özellikler'], ['/#paketler', 'Paketler'], ['/#sss', 'Sık sorulan sorular'], ['/destek', 'Destek ve iletişim']],
    legalLinks: [['/gizlilik', 'Gizlilik Politikası'], ['/kvkk', 'KVKK Aydınlatma Metni'], ['/kullanim-kosullari', 'Kullanım Koşulları'], ['/hesap-silme', 'Hesap ve Veri Silme'], ['/cerez-politikasi', 'Çerez Politikası']],
    rights: 'Tüm hakları saklıdır.',
    by: 'Animora, Appouse Teknoloji Ltd. Şti. ürünüdür.',
    toc: 'Bu sayfada',
    updated: 'Son güncelleme',
  },
  en: {
    nav: [['/en/#features', 'Features'], ['/en/#plans', 'Plans'], ['/en/#faq', 'FAQ'], ['/en/support', 'Support']],
    menu: 'Menu',
    skip: 'Skip to content',
    footTagline: 'Farm and herd management app for cattle, sheep and goat operations.',
    product: 'Product',
    legal: 'Legal',
    productLinks: [['/en/#features', 'Features'], ['/en/#plans', 'Plans'], ['/en/#faq', 'FAQ'], ['/en/support', 'Support and contact']],
    legalLinks: [['/en/privacy', 'Privacy Policy'], ['/kvkk', 'KVKK Notice (Turkish)'], ['/en/terms', 'Terms of Use'], ['/en/delete-account', 'Account and Data Deletion'], ['/en/cookies', 'Cookie Policy']],
    rights: 'All rights reserved.',
    by: 'Animora is a product of Appouse Teknoloji Ltd. Şti.',
    toc: 'On this page',
    updated: 'Last updated',
  },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function legalWrap(page, L) {
  const toc = page.sections.map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`).join('');
  const body = page.sections.map((s) => `<h2 id="${s.id}">${s.title}</h2>\n${s.html}`).join('\n');
  return `
<section class="legal-hero"><div class="wrap">
  <span class="eyebrow">${page.eyebrow}</span>
  <h1>${page.h1}</h1>
  ${page.intro ? `<p>${page.intro}</p>` : ''}
  <p><small>${L.updated}: ${page.updated}</small></p>
</div></section>
<div class="wrap legal">
  <nav class="toc" aria-label="${L.toc}"><strong>${L.toc}</strong><ol>${toc}</ol></nav>
  <article class="prose">${body}</article>
</div>`;
}

function layout(page) {
  const L = t[page.lang];
  const url = SITE + page.path;
  const alt = page.alt ? `<link rel="alternate" hreflang="${page.lang === 'tr' ? 'en' : 'tr'}" href="${SITE + page.alt}">` : '';
  const self = `<link rel="alternate" hreflang="${page.lang}" href="${url}">`;
  const nav = L.nav.map(([h, l]) => `<a href="${h}"${h === page.path ? ' aria-current="page"' : ''}>${l}</a>`).join('');
  const langHref = page.alt || (page.lang === 'tr' ? '/en/' : '/');
  const langLabel = page.lang === 'tr' ? 'English' : 'Türkçe';
  const main = page.sections ? legalWrap(page, L) : page.body;
  const jsonLd = page.jsonLd ? `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>` : '';
  return `<!doctype html>
<html lang="${page.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
${self}${alt}
<meta name="theme-color" content="#4e8a3e">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Animora">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/og.png">
<meta property="og:locale" content="${page.lang === 'tr' ? 'tr_TR' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/Poppins-Regular.ttf" as="font" type="font/ttf" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
${jsonLd}
</head>
<body>
<a class="skip" href="#icerik">${L.skip}</a>
<header class="site-header">
  <div class="wrap nav">
    <a class="brand" href="${page.lang === 'tr' ? '/' : '/en/'}" aria-label="Animora">${icon('logo')}<span>Animora</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">${L.menu}</button>
    <nav class="nav-links" id="site-nav">${nav}<a class="lang" href="${langHref}" hreflang="${page.lang === 'tr' ? 'en' : 'tr'}" lang="${page.lang === 'tr' ? 'en' : 'tr'}">${langLabel}</a></nav>
  </div>
</header>
<main id="icerik">
${main}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <a class="brand" href="${page.lang === 'tr' ? '/' : '/en/'}">${icon('logo')}<span>Animora</span></a>
        <p style="margin-top:12px;max-width:340px">${L.footTagline}</p>
      </div>
      <div><h4>${L.product}</h4><ul>${L.productLinks.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
      <div><h4>${L.legal}</h4><ul>${L.legalLinks.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join('')}</ul></div>
    </div>
    <div class="foot-bottom"><span>© ${new Date().getFullYear()} Appouse Teknoloji Ltd. Şti. ${L.rights}</span><span>${L.by}</span></div>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
}

function write(path, html) {
  // "/gizlilik" -> dist/gizlilik/index.html, "/" -> dist/index.html
  const clean = path.replace(/^\//, '').replace(/\/$/, '');
  const file = clean ? join(out, clean, 'index.html') : join(out, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) rmSync(join(out, f), { recursive: true, force: true });
mkdirSync(join(out, 'assets', 'fonts'), { recursive: true });

const pages = [...pagesFor('tr'), ...pagesFor('en')];
for (const p of pages) {
  if (p.file) {
    writeFileSync(join(out, p.file), layout(p));
  } else {
    write(p.path, layout(p));
  }
}

for (const f of readdirSync(join(root, 'src', 'fonts'))) copyFileSync(join(root, 'src', 'fonts', f), join(out, 'assets', 'fonts', f));
copyFileSync(join(root, 'src', 'site.css'), join(out, 'assets', 'site.css'));
copyFileSync(join(root, 'src', 'site.js'), join(out, 'assets', 'site.js'));
copyFileSync(join(root, 'src', 'favicon.svg'), join(out, 'favicon.svg'));
for (const f of ['og.png', 'apple-touch-icon.png']) copyFileSync(join(root, 'src', f), join(out, 'assets', f));

const listed = pages.filter((p) => !p.file);
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${listed.map((p) => `  <url><loc>${SITE + p.path}</loc></url>`).join('\n')}
</urlset>
`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`${pages.length} sayfa üretildi -> dist/`);
