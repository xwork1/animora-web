// i18n denetimi: (1) dil dosyalarında anahtar eşliği, (2) şablonlarda sabit görünür metin taraması,
// (3) üretilen HTML'deki her görünür metnin dil/içerik dosyalarından geldiğinin doğrulanması.
// Kullanım: node build.mjs && node scripts/check-i18n.mjs   (hata varsa çıkış kodu 1)
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { LANGS, EMAIL, LEGAL_PAGES } from '../src/config.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const problems = [];
const LETTER = /[A-Za-zÇĞİÖŞÜçğıöşüÂâÎîÛû]/;

// 1) Anahtar eşliği
const locales = Object.fromEntries(LANGS.map((l) => [l, JSON.parse(readFileSync(join(root, 'locales', `${l}.json`), 'utf8'))]));
function keys(o, p = '') {
  if (Array.isArray(o)) return [`${p}[${o.length}]`, ...o.flatMap((v, i) => keys(v, `${p}[${i}]`))];
  if (o && typeof o === 'object') return Object.entries(o).flatMap(([k, v]) => keys(v, p ? `${p}.${k}` : k));
  return [p];
}
const base = new Set(keys(locales[LANGS[0]]));
for (const l of LANGS.slice(1)) {
  const other = new Set(keys(locales[l]));
  for (const k of base) if (!other.has(k)) problems.push(`locales/${l}.json: eksik anahtar ${k}`);
  for (const k of other) if (!base.has(k)) problems.push(`locales/${l}.json: fazla anahtar ${k}`);
}
for (const key of LEGAL_PAGES) {
  const counts = LANGS.map((l) => readFileSync(join(root, 'content', l, `${key}.html`), 'utf8').match(/^## /gm)?.length ?? 0);
  if (new Set(counts).size !== 1) problems.push(`content/*/${key}.html: bölüm sayıları farklı (${counts.join(' / ')})`);
}

// 2) Şablon taraması: ${...} ifadeleri çıkarıldıktan sonra etiketler arasında veya
//    görünür niteliklerde (aria-label, alt, title, placeholder, content) harf kalmamalı.
const templates = ['build.mjs', 'src/home.mjs', 'src/ui.mjs', 'src/config.mjs', 'src/site.js'];
for (const f of templates) {
  let src = readFileSync(join(root, f), 'utf8');
  src = src.replace(/^\s*\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
  let prev;
  do { prev = src; src = src.replace(/\$\{[^{}]*\}/g, ''); } while (src !== prev);
  src = src.replace(/<script[^>]*>[\s\S]*?<\/script>/g, '').replace(/<style[^>]*>[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
  for (const m of src.matchAll(/>([^<>`'"]+)</g)) {
    if (LETTER.test(m[1])) problems.push(`${f}: etiket arası sabit metin: "${m[1].trim()}"`);
  }
  for (const m of src.matchAll(/\b(aria-label|alt|title|placeholder|content)="([^"]*)"/g)) {
    if (LETTER.test(m[2]) && !/^(width=|website|summary_large_image|#|\/|https?:)/.test(m[2])) problems.push(`${f}: nitelikte sabit metin: ${m[1]}="${m[2]}"`);
  }
}

// 3) Çıktı doğrulaması: her görünür metin parçası dil/içerik dosyalarında geçmeli.
const corpus = [
  ...LANGS.map((l) => readFileSync(join(root, 'locales', `${l}.json`), 'utf8')),
  ...LANGS.flatMap((l) => LEGAL_PAGES.map((k) => readFileSync(join(root, 'content', l, `${k}.html`), 'utf8'))),
].join('\n');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'");
const allowed = new Set([EMAIL]);
const corpusDecoded = decode(corpus);
// "{year}", "{date}" gibi yer tutucu içeren dil metinleri için kalıplar.
const reEsc = (s) => s.replace(/[.*+?^$()|[\]\\]/g, '\\$&');
const patterns = [...corpus.matchAll(/"([^"\n]*\{[a-z]+\}[^"\n]*)"/g)].map((m) =>
  new RegExp(`^${m[1].split(/\{[a-z]+\}/).map(reEsc).join('.+')}$`));
function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
  });
}
let checked = 0;
for (const file of walk(join(root, 'dist'))) {
  let html = readFileSync(file, 'utf8');
  html = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '');
  const texts = [...html.matchAll(/>([^<>]+)</g)].map((m) => m[1]);
  const attrs = [...html.matchAll(/\b(?:aria-label|alt|title|placeholder)="([^"]*)"/g)].map((m) => m[1]);
  const metas = [...html.matchAll(/<meta (?:name="description"|property="og:(?:title|description|site_name)") content="([^"]*)"/g)].map((m) => m[1]);
  for (const raw of [...texts, ...attrs, ...metas]) {
    const s = decode(raw).trim();
    if (!s || !LETTER.test(s) || allowed.has(s)) continue;
    checked++;
    const known = corpus.includes(s) || corpusDecoded.includes(s) || corpus.includes(JSON.stringify(s).slice(1, -1)) || patterns.some((r) => r.test(s));
    if (!known) {
      problems.push(`${relative(root, file)}: dil dosyalarında bulunmayan metin: "${s}"`);
    }
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  console.error(`\n${problems.length} sorun bulundu.`);
  process.exit(1);
}
console.log(`OK: ${LANGS.join('/')} anahtarları eşleşiyor, ${templates.length} şablonda sabit metin yok, ${checked} görünür metin parçası dil/içerik dosyalarından geliyor.`);
