// Ana sayfa şablonu. Görünen tüm metinler locales/{lang}.json -> home alanından gelir.
import { icon, phoneDashboard, phoneMilk, phoneRepro, phoneFinance } from './ui.mjs';

export function homeBody({ t, url, email }) {
  const h = t.home;
  const a = t.anchors;
  const nav = h.mock.nav;
  const head = (s, center) =>
    `<div class="section-head${center ? ' center' : ''}"><span class="eyebrow">${s.eyebrow}</span><h2>${s.title}</h2>${s.text ? `<p>${s.text}</p>` : ''}</div>`;
  const store = (key, logo) =>
    `<div class="store" aria-label="${h.store[key].aria}">${icon(logo)}<div><small>${h.store[key].platform}</small><strong>${h.store[key].name}</strong></div><span class="soon">${h.store.soon}</span></div>`;

  return `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">${h.hero.eyebrow}</span>
      <h1>${h.hero.titleStart} <em>${h.hero.titleEm}</em></h1>
      <p class="lead">${h.hero.lead}</p>
      <div class="store-row">${store('apple', 'apple')}${store('google', 'play')}</div>
      <p class="hero-note">${h.hero.note}</p>
    </div>
    <div class="hero-visual">
      ${phoneDashboard(h.mock.dashboard, nav)}
      <div class="float-chip chip-a"><span class="dot t-plum">${icon('heart')}</span><div><b>${h.hero.chipA.title}</b><span>${h.hero.chipA.text}</span></div></div>
      <div class="float-chip chip-b"><span class="dot t-green">${icon('bell')}</span><div><b>${h.hero.chipB.title}</b><span>${h.hero.chipB.text}</span></div></div>
    </div>
  </div>
  <div class="wrap"><div class="values" style="margin-top:56px">
    ${h.values.map((v) => `<div class="value"><span class="icon ${v.tone}">${icon(v.icon)}</span><div><h3>${v.title}</h3><p>${v.text}</p></div></div>`).join('')}
  </div></div>
</section>

<section id="${a.features}" class="band">
  <div class="wrap">
    ${head(h.features)}
    <div class="features">
      ${h.features.items.map((f) => `<div class="feature"><span class="icon ${f.tone}">${icon(f.icon)}</span><h3>${f.title}</h3><p>${f.text}</p></div>`).join('')}
    </div>
  </div>
</section>

<section id="${a.screens}">
  <div class="wrap">
    ${head(h.screens, true)}
    <div class="showcase">
      <figure>${phoneMilk(h.mock.milk, nav)}<figcaption>${h.screens.captions.milk}</figcaption></figure>
      <figure>${phoneRepro(h.mock.repro, nav)}<figcaption>${h.screens.captions.repro}</figcaption></figure>
      <figure>${phoneFinance(h.mock.finance, nav)}<figcaption>${h.screens.captions.finance}</figcaption></figure>
    </div>
    <p class="showcase-note">${h.screens.note}</p>
  </div>
</section>

<section class="band">
  <div class="wrap">
    ${head(h.audience, true)}
    <div class="audience">${h.audience.items.map((x) => `<div>${x.title}<span>${x.text}</span></div>`).join('')}</div>
  </div>
</section>

<section id="${a.plans}">
  <div class="wrap">
    ${head(h.plans, true)}
    <div class="plans">
      ${h.plans.items.map((p) => `<div class="plan${p.featured ? ' featured' : ''}"><h3>${p.name}${p.badge ? ` <span class="pill">${p.badge}</span>` : ''}</h3><p class="price">${p.desc}</p><ul>${p.features.map((f) => `<li>${f}</li>`).join('')}</ul></div>`).join('')}
    </div>
    <p class="plans-note">${h.plans.note} <a href="${url('terms')}#${a.subscriptions}">${h.plans.noteLink}</a>${h.plans.noteEnd}</p>
  </div>
</section>

<section style="padding-top:0">
  <div class="wrap">
    <div class="soon-box"><span class="icon t-sky">${icon('radio')}</span><div><h3>${h.soon.title}</h3><p>${h.soon.text}</p></div></div>
  </div>
</section>

<section id="${a.faq}" class="band">
  <div class="wrap">
    ${head(h.faq, true)}
    <div class="faq">${h.faq.items.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>
  </div>
</section>

<section id="${a.contact}">
  <div class="wrap">
    <div class="cta">
      <div><h2>${h.contact.title}</h2><p>${h.contact.textStart} <a href="${url('support')}">${h.contact.textLink}</a> ${h.contact.textEnd}</p></div>
      <div class="contact-list">
        <a href="mailto:${email}?subject=${encodeURIComponent(h.contact.emailSubject)}">${icon('mail')}<div><small>${h.contact.emailLabel}</small>${email}</div></a>
        <a href="${url('support')}">${icon('help')}<div><small>${h.contact.helpLabel}</small>${t.nav.supportLong}</div></a>
      </div>
    </div>
  </div>
</section>`;
}
