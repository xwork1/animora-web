# Animora web sitesi

Animora (çiftlik ve sürü yönetimi uygulaması) tanıtım sitesi ve yasal sayfaları. Bağımlılıksız statik site: `node build.mjs` → `dist/`, nginx ile sunulur (Dockerfile).

## Çok dillilik

Diller uygulamayla aynıdır: `tr` (varsayılan, kökte) ve `en` (`/en/` altında). Şablonlarda kullanıcıya görünen metin bulunmaz.

- Arayüz metinleri, meta başlık/açıklamalar, 404 sayfası: `locales/tr.json`, `locales/en.json`
- Yasal sayfa gövdeleri: `content/{tr,en}/{privacy,kvkk,terms,deleteAccount,support,cookies}.html`
  - Biçim: `## bolum-id | Bölüm başlığı` satırı ve altında HTML.
  - Yer tutucular: `{{controller}}` (veri sorumlusu kutusu), `{{email}}`, `{{emailAddr}}`, `{{url:privacy}}` (geçerli dildeki sayfa adresi).
- Önbellek: `site.css`, `site.js` ve ekran görüntüleri derlemede içerik özetli adla yayımlanır (`site.<özet>.css`, `src/assets.mjs`); nginx bunları 1 yıl, `immutable` önbelleğe alır. og görselleri, ikonlar ve `site.webmanifest` sabit adlıdır.
- Dil dışı ayarlar (site adresi, iletişim e-postası, sayfa yolları): `src/config.mjs`
- Şablonlar: `build.mjs` (sayfa iskeleti), `src/home.mjs` (ana sayfa), `src/ui.mjs` (ikonlar, telefon çerçevesi)
- Uygulama ekran görüntüleri: `src/screens/{tr,en}/*-{360,720}.webp` (dil başına ayrı set). Yeniden üretmek için: `python scripts/make-screens.py <kaynak>` (kaynakta `tr/` ve `en/` altında 1440x3200 PNG; durum ve hareket çubukları kırpılır). Hangi görüntünün nerede kullanıldığı ve alt metinleri `locales/{dil}.json` → `home.hero.shot`, `home.spotlight.items`, `home.screens.items` alanlarındadır.

Yeni dil eklemek için: `locales/{dil}.json` ve `content/{dil}/` oluşturun, `src/config.mjs` içindeki `LANGS` ve `ROUTES`'a ekleyin.

## Denetim

```bash
node build.mjs && node scripts/check-i18n.mjs
```

`check-i18n` şunları doğrular: dil dosyalarında anahtar eşliği, yasal içerik bölüm sayılarının eşliği, şablonlarda sabit görünür metin (etiket arası ve `aria-label`/`alt`/`title`/`placeholder`/`content`) bulunmaması, üretilen HTML'deki her görünür metnin dil/içerik dosyalarından gelmesi. Docker derlemesi bu denetim başarısız olursa durur.

## Sayfalar

| Sayfa | Türkçe | İngilizce |
|---|---|---|
| Ana sayfa | `/` | `/en/` |
| Gizlilik Politikası | `/gizlilik` | `/en/privacy` |
| KVKK Aydınlatma Metni | `/kvkk` | `/en/kvkk` |
| Kullanım Koşulları | `/kullanim-kosullari` | `/en/terms` |
| Hesap ve Veri Silme | `/hesap-silme` | `/en/delete-account` |
| Destek | `/destek` | `/en/support` |
| Çerez Politikası | `/cerez-politikasi` | `/en/cookies` |

Yayın: Coolify (Dockerfile build pack), https://animora.appouse.com
