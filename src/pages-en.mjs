import { icon, phoneDashboard, phoneMilk, phoneRepro, phoneFinance } from './ui.mjs';

const navEn = ['Home', 'Animals', 'Milk', 'Finance', 'Settings'];

const features = [
  ['tag', 't-green', 'Animal records', 'An ID card for every animal with ear tag number, species, breed, birth date, parents and group. Add photos and find any animal in seconds.'],
  ['syringe', 't-rose', 'Health, vaccines and treatments', 'Vaccination schedules, examinations, diagnoses and treatments, together with medicines and withdrawal periods.'],
  ['drop', 't-sky', 'Milk production', 'Record milkings per animal or per herd; follow daily and weekly yield and your top producers.'],
  ['heart', 't-plum', 'Breeding and pregnancy', 'Heat, insemination, pregnancy checks, dry-off and calving events; expected calving dates are calculated automatically.'],
  ['calendar', 't-wheat', 'Calendar and reminders', 'See upcoming vaccinations, checks and births in one calendar and get notified on time.'],
  ['wallet', 't-green', 'Finance', 'Track income and expenses by category and see profitability for your farm and for each animal.'],
  ['wheat', 't-wheat', 'Feed and rations', 'Use the feed library and ration calculator to build a feeding plan for each group.'],
  ['box', 't-sky', 'Inventory', 'Keep track of feed, medicine and supply stock and spot low items in time.'],
  ['file', 't-rose', 'Reports and export', 'Export herd, health, milk and finance reports as PDF or Excel and share them.'],
  ['users', 't-plum', 'Team management', 'Invite workers and partners and give each person the permissions their role needs.'],
  ['steth', 't-green', 'Veterinarian mode', 'Your veterinarian can join your farm and send examinations, diagnoses and treatment plans directly in the app.'],
  ['grid', 't-wheat', 'Paddock plan', 'Map your barns and paddocks and see where every animal is at a glance.'],
];

const faq = [
  ['Which animals is Animora for?', 'Animora is built for cattle and buffalo as well as sheep and goat operations. You can track animals individually or in groups.'],
  ['When will the app be available?', 'Animora is being prepared for launch. The store buttons on this page will be activated once the iOS (App Store) and Android (Google Play) versions are published.'],
  ['Can I use it for free?', 'Yes. The Free plan covers basic animal records, viewing health records and limited calendar use for small herds. Upgrade to Basic or Pro when you need more.'],
  ['How are subscriptions billed and cancelled?', 'Paid plans are purchased through your App Store or Google Play account and renew automatically at the end of each period. You can cancel any time in your store account settings; cancellation takes effect at the end of the current period.'],
  ['Can my team and my vet use it too?', 'Yes. Invite your workers and assign permissions by role. Veterinarian mode lets your vet join your farm and record examinations and treatments directly.'],
  ['Is my data safe?', 'Your data is transferred over encrypted connections (HTTPS) and is only accessible to you and the team members you authorise. See our Privacy Policy for details.'],
  ['How do I delete my account?', 'In the app go to Settings → Delete Account. If you cannot access the app, use the email option on the Account and Data Deletion page.'],
];

export default ({ SITE, C, UPDATED }) => {
  const mail = `<a href="mailto:${C.email}">${C.email}</a>`;
  const controllerBox = `<div class="box"><p><strong>${C.name}</strong> (Appouse Teknoloji Ltd. Şti.)<br>${C.addressEn}<br>Email: ${mail}</p></div>`;

  const home = {
    lang: 'en',
    path: '/en/',
    alt: '/',
    title: 'Animora — Farm and Herd Management App',
    description: 'Animal records, health and vaccines, milk production, breeding and pregnancy, finance, feed and team management in one app. Coming soon to iOS and Android.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Animora',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'iOS, Android',
      description: 'Farm and herd management app for cattle, sheep and goat operations.',
      url: `${SITE}/en/`,
      inLanguage: ['tr', 'en'],
      publisher: { '@type': 'Organization', name: C.name, email: C.email },
    },
    body: `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">Farm and herd management</span>
      <h1>Every record of your herd, <em>in your pocket.</em></h1>
      <p class="lead">Animora brings everything on your farm into one mobile app: animal records, health and vaccines, milk yield, breeding calendar, finance and your team.</p>
      <div class="store-row">
        <div class="store" aria-label="App Store — coming soon">${icon('apple')}<div><small>iOS</small><strong>App Store</strong></div><span class="soon">Soon</span></div>
        <div class="store" aria-label="Google Play — coming soon">${icon('play')}<div><small>Android</small><strong>Google Play</strong></div><span class="soon">Soon</span></div>
      </div>
      <p class="hero-note">Coming to iOS and Android. You will be able to start with the Free plan.</p>
    </div>
    <div class="hero-visual">
      ${phoneDashboard({ aria: 'Animora home screen: total animals, today’s milk and upcoming tasks', hello: 'Welcome back', farm: 'Green Valley Farm', animals: 'Total animals', milk: 'Today’s milk', tasks: 'Upcoming tasks', t1: 'FMD vaccination', t1s: 'Group A · 12 animals', today: 'Today', t2: 'Pregnancy check', t2s: 'TR-154, TR-158', tomorrow: 'Tomorrow', t3: 'Ration updated', t3s: 'Lactating group', ok: 'Done', nav: navEn })}
      <div class="float-chip chip-a"><span class="dot t-plum">${icon('heart')}</span><div><b>Expected calving</b><span>TR-089 · in 6 days</span></div></div>
      <div class="float-chip chip-b"><span class="dot t-green">${icon('bell')}</span><div><b>Reminder</b><span>Tomorrow 09:30 — vaccine</span></div></div>
    </div>
  </div>
  <div class="wrap"><div class="values" style="margin-top:56px">
    <div class="value"><span class="icon t-green">${icon('phone')}</span><div><h3>Everything in one place</h3><p>One tidy record instead of notebooks, diaries and spreadsheets.</p></div></div>
    <div class="value"><span class="icon t-wheat">${icon('bell')}</span><div><h3>Never miss a task</h3><p>Timely reminders for vaccines, checks and births.</p></div></div>
    <div class="value"><span class="icon t-sky">${icon('users')}</span><div><h3>Work as a team</h3><p>Your workers and your vet work on the same records.</p></div></div>
  </div></div>
</section>

<section id="features" class="band">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Features</span><h2>Everything your farm needs</h2><p>Animora helps you follow the daily operation of your farm and the biological cycle of your animals together.</p></div>
    <div class="features">
      ${features.map(([i, tone, h, p]) => `<div class="feature"><span class="icon ${tone}">${icon(i)}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}
    </div>
  </div>
</section>

<section id="screens">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Inside the app</span><h2>Simple screens, clear information</h2><p>In the field, in the barn or in the office, get to what you need in a few taps.</p></div>
    <div class="showcase">
      <figure>${phoneMilk({ aria: 'Milk production screen', eyebrow: 'Farm management', title: 'Milk Production', total: 'Today’s total', target: 'Target: 1,200 L', avg: 'Per cow', quality: 'Quality', fatProt: 'Fat · Protein', weekly: 'Weekly trend', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], nav: navEn })}<figcaption>Milk yield</figcaption></figure>
      <figure>${phoneRepro({ aria: 'Breeding and pregnancy screen', eyebrow: 'Breeding', title: 'Pregnancy Tracking', pregnant: 'Pregnant', dueSoon: 'Due in 30 days', rows: [['TR-089', 'Day 274', 'Expected calving: Nov 3', 96], ['TR-154', 'Day 181', 'Dry-off: Nov 21', 64], ['TR-212', 'Day 42', 'Pregnancy check: tomorrow', 15]], nav: navEn })}<figcaption>Breeding and pregnancy</figcaption></figure>
      <figure>${phoneFinance({ aria: 'Finance screen', eyebrow: 'Finance', title: 'Income and Expenses', net: 'Net profit', period: 'This year', income: 'Income', expense: 'Expenses', rows: [['Milk sales', 'Dairy · Oct 24', '+₺38,400'], ['Feed purchase', 'Silage · Oct 22', '−₺21,750'], ['Veterinary', 'Vaccine · Oct 20', '−₺4,200']], nav: navEn })}<figcaption>Finance</figcaption></figure>
    </div>
    <p class="showcase-note">Images are illustrations of the app interface and contain sample data.</p>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Who it is for</span><h2>From cattle to small ruminants</h2><p>From family farms to professional operations, for anyone who wants to keep proper track of their animals.</p></div>
    <div class="audience">
      <div>Cattle<span>Dairy and beef</span></div>
      <div>Buffalo<span>Dairy and beef</span></div>
      <div>Sheep<span>Flocks and lambing</span></div>
      <div>Goats<span>Dairy and kidding</span></div>
    </div>
  </div>
</section>

<section id="plans">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Plans</span><h2>Choose the plan that fits your farm</h2><p>Start for free and upgrade as your herd grows.</p></div>
    <div class="plans">
      <div class="plan"><h3>Free</h3><p class="price">Essentials</p><ul><li>7 animal records</li><li>Basic health tracking (view only)</li><li>Calendar (5 events per month)</li><li>2 groups</li></ul></div>
      <div class="plan featured"><h3>Basic <span class="pill">Popular</span></h3><p class="price">Standard features</p><ul><li>50 animal records</li><li>Add health records</li><li>Financial tracking</li><li>Basic reports</li><li>Reminders</li></ul></div>
      <div class="plan"><h3>Pro</h3><p class="price">All features</p><ul><li>Unlimited animals</li><li>Everything in Basic</li><li>Treatment protocols</li><li>Ration calculator</li><li>Profitability analysis</li><li>PDF/Excel export</li><li>Multiple farms</li><li>Team management</li></ul></div>
    </div>
    <p class="plans-note">Prices will be shown on the App Store and Google Play when the app launches. Paid plans are purchased monthly or yearly through your store account, renew automatically and can be cancelled any time. Details: <a href="/en/terms#subscriptions">Terms of Use</a>.</p>
  </div>
</section>

<section style="padding-top:0">
  <div class="wrap">
    <div class="soon-box"><span class="icon t-sky">${icon('radio')}</span><div><h3>Coming soon: smart sensor integration</h3><p>We are working on sensor integration for barn conditions and animal health. This feature is not available yet; we will announce it here when it is ready.</p></div></div>
  </div>
</section>

<section id="faq" class="band">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">FAQ</span><h2>Frequently asked questions</h2></div>
    <div class="faq">
      ${faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}
    </div>
  </div>
</section>

<section id="contact">
  <div class="wrap">
    <div class="cta">
      <div><h2>Questions?</h2><p>Write to us for information about Animora, suggestions or support. For more help, visit the <a href="/en/support">Support</a> page.</p></div>
      <div class="contact-list">
        <a href="mailto:${C.email}?subject=Animora">${icon('mail')}<div><small>Email</small>${C.email}</div></a>
        <a href="/en/support">${icon('help')}<div><small>Help center</small>Support and contact</div></a>
      </div>
    </div>
  </div>
</section>`,
  };

  const privacy = {
    lang: 'en',
    path: '/en/privacy',
    alt: '/gizlilik',
    title: 'Privacy Policy — Animora',
    description: 'What personal data the Animora mobile app collects, how it is used and shared, and your rights.',
    eyebrow: 'Legal',
    h1: 'Privacy Policy',
    intro: 'This policy explains how personal data is processed in the Animora mobile app (the "App") and on this website. If there is any inconsistency, the Turkish version prevails.',
    updated: UPDATED,
    sections: [
      { id: 'controller', title: '1. Data controller', html: `<p>Animora is developed and operated by the company below, which is the data controller for your personal data.</p>${controllerBox}<p>The notice required under the Turkish Personal Data Protection Law No. 6698 (KVKK) is available in Turkish: <a href="/kvkk">KVKK Aydınlatma Metni</a>.</p>` },
      { id: 'data', title: '2. Data we collect', html: `
<h3>Account and identity data</h3>
<ul>
<li>Name, email address and (if you link it) phone number. If you link a phone number, a verification code is sent via Firebase Authentication so you can verify it and sign in by SMS.</li>
<li>The name and email address shared by Google or Apple when you sign in with them. If you use Apple’s "Hide My Email", we only receive the relay address created by Apple.</li>
<li>The user ID created by the authentication service. Your password is stored by Firebase Authentication; we cannot see it.</li>
</ul>
<h3>Farm and business data</h3>
<ul>
<li>Farm details you enter (farm name, business details, currency preference).</li>
<li>Animal records: ear tag number, species, breed, birth, lineage, group, health, vaccination, treatment, milk, breeding and pregnancy records.</li>
<li>Finance, feed, ration, inventory, calendar and paddock records.</li>
<li>Animal photos, files attached to health records and notes you choose to upload.</li>
</ul>
<h3>Team data</h3>
<ul><li>Names and contact details (email address or phone number) of people you invite to your team, their roles and permissions, and which team member or vet created which record.</li></ul>
<h3>Subscription data</h3>
<ul><li>Your plan, purchase and renewal status and transaction IDs. Payments are processed by Apple or Google; your card details are never shared with us or RevenueCat.</li></ul>
<h3>Device and technical data</h3>
<ul>
<li>Your device’s push notification token, so we can send notifications.</li>
<li>Device model, operating system and app version, language preference.</li>
<li>Security logs of requests to our servers (IP address, request time, error logs).</li>
</ul>
<h3>What we do not collect</h3>
<div class="box note"><ul>
<li>We do not collect your device’s GPS location.</li>
<li>There are no ads in the App; we do not collect your advertising ID, use your data for advertising or sell it.</li>
<li>We do not use third-party analytics or tracking tools in the App.</li>
<li>Fingerprint and face recognition data stay on your device and are never sent to us.</li>
</ul></div>` },
      { id: 'permissions', title: '3. Device permissions', html: `
<p>The App only asks for these permissions when you use the related feature. You can revoke them any time in your device settings.</p>
<table><thead><tr><th>Permission</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Camera</td><td>Taking animal photos or photos of documents for health records.</td></tr>
<tr><td>Photos / media</td><td>Selecting animal photos from your gallery, saving generated reports.</td></tr>
<tr><td>Notifications</td><td>Delivering reminders for vaccinations, checks, births and more.</td></tr>
<tr><td>Face ID / fingerprint</td><td>Quick and secure sign-in. Verification happens on your device.</td></tr>
</tbody></table>` },
      { id: 'purposes', title: '4. How we use data', html: `
<ul>
<li>Creating your account, signing you in and protecting your account.</li>
<li>Providing the App’s core features: storing your records, producing reports and calculations, sharing with your team.</li>
<li>Sending reminders and important service notifications.</li>
<li>Verifying your subscription and unlocking paid features.</li>
<li>Responding to support requests.</li>
<li>Keeping the service secure and detecting and fixing abuse and errors.</li>
<li>Complying with legal obligations.</li>
</ul>` },
      { id: 'legal-bases', title: '5. Legal bases', html: `<p>We process personal data to perform our contract with you (KVKK art. 5/2-c, GDPR art. 6(1)(b)), to comply with legal obligations (KVKK art. 5/2-ç, GDPR art. 6(1)(c)), to establish, exercise or defend legal claims (KVKK art. 5/2-e) and for our legitimate interests provided they do not override your rights (KVKK art. 5/2-f, GDPR art. 6(1)(f)). Push notifications rely on the consent you give in your operating system’s permission prompt.</p>` },
      { id: 'third-parties', title: '6. Service providers we share data with', html: `
<p>We do not sell your data. To provide the service we share data only with the following providers, and only as needed:</p>
<table><thead><tr><th>Provider</th><th>Purpose</th><th>Data shared</th></tr></thead><tbody>
<tr><td>Google Firebase Authentication (Google LLC)</td><td>Sign-up and sign-in (email/password, phone/SMS, Google, Apple)</td><td>Email, phone number (if linked), name, user ID, sign-in data</td></tr>
<tr><td>Firebase Cloud Messaging (Google LLC)</td><td>Push notifications</td><td>Notification token, notification content</td></tr>
<tr><td>Sign in with Google (Google LLC)</td><td>Google sign-in</td><td>Name and email shared by Google</td></tr>
<tr><td>Sign in with Apple (Apple Inc.)</td><td>Apple sign-in</td><td>Name and email or relay address shared by Apple</td></tr>
<tr><td>RevenueCat (RevenueCat, Inc.)</td><td>In-app subscription management</td><td>App user ID, purchase and subscription status</td></tr>
<tr><td>Apple App Store / Google Play</td><td>Payment and subscription billing</td><td>Subject to the stores’ own policies</td></tr>
<tr><td>Hosting (servers managed by Appouse)</td><td>Storing and processing App data</td><td>Data you enter in the App</td></tr>
</tbody></table>
<p>To show exchange rates, the App only retrieves rate data from a public exchange rate service (Frankfurter); no personal data is sent to it. We may also disclose information to competent public authorities where required by law.</p>` },
      { id: 'transfers', title: '7. International transfers', html: `<p>Google, Apple and RevenueCat may process data on servers outside Türkiye (mainly in the United States). Such transfers are carried out in line with the procedures and safeguards set out in KVKK art. 9.</p>` },
      { id: 'retention', title: '8. Retention', html: `
<ul>
<li>Account and farm data are kept while your account is active.</li>
<li>When you delete your account, your account, the farms you own and their records are deleted from our systems. Deletion requests sent by email are completed within 30 days at the latest.</li>
<li>Security server logs are kept for a limited period and then deleted.</li>
<li>Data we are legally required to keep is retained for the statutory period and then deleted or anonymised.</li>
</ul>` },
      { id: 'security', title: '9. Security', html: `<p>Data is transferred between the App and our servers over encrypted connections (HTTPS/TLS). Access is limited by authentication and farm-level authorisation: each user can only access the farms they belong to, to the extent their role allows. No system is completely risk-free, but we apply reasonable technical and organisational measures to protect your data.</p>` },
      { id: 'rights', title: '10. Your rights', html: `
<p>Under KVKK art. 11 and, where applicable, the GDPR, you have the right to know whether your data is processed, to request information, to access and obtain a copy of your data, to have inaccurate data corrected, to request deletion, to object to processing and to claim compensation for damages.</p>
<p>Send your requests to ${mail}. We respond within 30 days at the latest. You also have the right to lodge a complaint with the Turkish Personal Data Protection Authority or your local supervisory authority.</p>` },
      { id: 'deletion', title: '11. Deleting your account and data', html: `<p>You can delete your account at any time in the App via <strong>Settings → Delete Account</strong>. If you cannot access the App, or want only certain data deleted, follow the steps on the <a href="/en/delete-account">Account and Data Deletion</a> page.</p>` },
      { id: 'children', title: '12. Children’s privacy', html: `<p>Animora is a business app for livestock operations and is not directed to anyone under 18. We do not knowingly collect personal data from children under 13. If we learn that we have, we will delete it; please let us know if you become aware of such a case.</p>` },
      { id: 'website', title: '13. This website', html: `<p>This website does not use cookies, analytics or tracking tools and does not load fonts or scripts from external sources. The server keeps standard access logs (IP address, date, requested page) for security. Details: <a href="/en/cookies">Cookie Policy</a>.</p>` },
      { id: 'changes', title: '14. Changes', html: `<p>We may update this policy from time to time. The current version is always published on this page with an updated date. We will notify you of significant changes in the App or by email.</p>` },
      { id: 'contact', title: '15. Contact', html: `<p>For any privacy questions or requests: ${mail}</p>${controllerBox}` },
    ],
  };

  const terms = {
    lang: 'en',
    path: '/en/terms',
    alt: '/kullanim-kosullari',
    title: 'Terms of Use — Animora',
    description: 'Terms of use of the Animora mobile app, including subscriptions, auto-renewal and cancellation.',
    eyebrow: 'Legal',
    h1: 'Terms of Use',
    intro: `These terms govern the relationship between you and ${C.name} ("Appouse", "we"), which develops and operates the Animora mobile app (the "App"). By using the App you accept these terms. If there is any inconsistency, the Turkish version prevails.`,
    updated: UPDATED,
    sections: [
      { id: 'service', title: '1. The service', html: `<p>Animora is a mobile app that simplifies farm and herd management with features such as animal records, health, vaccines and treatments, milk production, breeding and pregnancy, calendar, finance, feed and rations, inventory, reporting, and team and veterinarian access. Some features are only available on paid plans.</p>` },
      { id: 'account', title: '2. Your account', html: `
<ul>
<li>You need an account to use the App and agree to provide accurate and up-to-date information.</li>
<li>You must be at least 18 years old or authorised to act on behalf of a business.</li>
<li>You are responsible for keeping your account and sign-in details secure. Tell us immediately if you notice unauthorised use.</li>
</ul>` },
      { id: 'use', title: '3. Acceptable use', html: `
<p>You may not use the App in a way that breaks the law, infringes others’ rights or disrupts the service. In particular, you may not:</p>
<ul>
<li>attempt unauthorised access to our systems or bypass security measures,</li>
<li>reverse engineer, copy or resell the App,</li>
<li>enter other people’s data without their permission.</li>
</ul>` },
      { id: 'content', title: '4. Your data and responsibility', html: `
<ul>
<li>The data you enter belongs to you. We process it only to provide the service and in line with our <a href="/en/privacy">Privacy Policy</a>.</li>
<li>You are responsible for the accuracy of your records and for the permissions you give to team members.</li>
</ul>
<div class="box warn"><p><strong>Important:</strong> Animora is a record-keeping and tracking tool; it does not replace examination, diagnosis or treatment by a veterinarian. Reminders, calculations (e.g. expected calving dates, rations) and reports are for information only. Consult a veterinarian on animal health, medicine use, withdrawal periods and feeding decisions.</p></div>` },
      { id: 'subscriptions', title: '5. Subscriptions, auto-renewal and cancellation', html: `
<p>The App offers a Free plan and the paid Basic and Pro subscription plans. Plan features and current prices are shown in the App before purchase.</p>
<ul>
<li><strong>Payment:</strong> Paid subscriptions are charged to your Apple App Store or Google Play account at confirmation of purchase.</li>
<li><strong>Length:</strong> Subscriptions are offered monthly or yearly, depending on the option you choose.</li>
<li><strong>Auto-renewal:</strong> Your subscription renews automatically for the same period at the then-current price unless cancelled at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the end of the current period.</li>
<li><strong>Managing and cancelling:</strong> After purchase, you can manage your subscription and turn off auto-renewal in the App Store under <em>Settings → Apple ID → Subscriptions</em>, or in Google Play under <em>Play Store → Profile → Payments &amp; subscriptions → Subscriptions</em>. The link on the App’s subscription screen also takes you there.</li>
<li><strong>Effect of cancellation:</strong> Cancellation takes effect at the end of the current period; you keep paid features until then. Your account then moves to the Free plan and Free plan limits apply.</li>
<li><strong>Free trials:</strong> If a free trial is offered, any unused portion is forfeited when you purchase a subscription. If you do not cancel before the trial ends, the paid subscription starts.</li>
<li><strong>Refunds:</strong> Refund requests are handled by the store where you made the purchase (Apple or Google) under its refund policy.</li>
<li><strong>Price changes:</strong> Price changes are announced in advance in line with store rules and apply from the next renewal period.</li>
<li><strong>Restoring purchases:</strong> When you change devices, use "Restore Purchases" in the App with the same store account.</li>
<li>Deleting your account does not cancel your store subscription; you must cancel it separately in the store.</li>
</ul>
<p>On iOS, your use of the App is also subject to Apple’s <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener">Standard End User License Agreement (EULA)</a>. In case of conflict, the Apple EULA prevails with respect to your rights against Apple.</p>` },
      { id: 'consumer', title: '6. Consumer rights', html: `<p>Your statutory rights as a consumer are not affected. For digital services performed immediately and intangible goods delivered instantly, the right of withdrawal may not apply once performance has started; in that case the stores’ refund policies apply.</p>` },
      { id: 'ip', title: '7. Intellectual property', html: `<p>The App’s software, design, logo, name and content belong to Appouse or its licensors. Subject to these terms, you receive a non-exclusive, non-transferable, revocable right to use the App for personal or business purposes.</p>` },
      { id: 'changes-service', title: '8. Changes and interruptions', html: `<p>We may change, add or remove features to improve the App. The service may be temporarily interrupted for maintenance, updates or reasons beyond our control. We will give advance notice of changes that materially affect the core features of your paid plan.</p>` },
      { id: 'liability', title: '9. Limitation of liability', html: `<p>The App is provided "as is". To the extent permitted by law, we are not liable for decisions made based on data entered in the App, indirect damages, loss of profit or events beyond our control (e.g. third-party service outages). Liability for intent and gross negligence and your rights under consumer law remain unaffected. We recommend regularly backing up important records using the App’s export features.</p>` },
      { id: 'termination', title: '10. Closing your account', html: `<p>You can delete your account in the App at any time (<a href="/en/delete-account">Account and Data Deletion</a>). We may suspend or close your account with reasonable notice if you seriously or repeatedly breach these terms.</p>` },
      { id: 'changes', title: '11. Changes to these terms', html: `<p>We may update these terms. The current version is published on this page and we will notify you of significant changes in the App. Continuing to use the App after changes means you accept the updated terms.</p>` },
      { id: 'law', title: '12. Governing law', html: `<p>These terms are governed by the laws of the Republic of Türkiye. The courts and enforcement offices of Istanbul (Anatolia) have jurisdiction. Consumers retain the right to apply to consumer arbitration committees and consumer courts within the statutory limits.</p>` },
      { id: 'contact', title: '13. Contact', html: `${controllerBox}` },
    ],
  };

  const deletion = {
    lang: 'en',
    path: '/en/delete-account',
    alt: '/hesap-silme',
    title: 'Account and Data Deletion — Animora',
    description: 'How to delete your Animora account and data in the app or by email.',
    eyebrow: 'Account',
    h1: 'Account and Data Deletion',
    intro: 'You can delete your Animora account and related data at any time. This page explains how to request account and data deletion for the Animora app by Appouse Teknoloji Ltd. Şti.',
    updated: UPDATED,
    sections: [
      { id: 'in-app', title: '1. Delete in the app (recommended)', html: `
<ol class="steps">
<li><div>Open the Animora app and sign in with the account you want to delete.</div></li>
<li><div>Go to <strong>Settings</strong> from the bottom menu.</div></li>
<li><div>Tap <strong>Delete Account</strong> at the end of the list.</div></li>
<li><div>Confirm in the dialog. Your account and data are deleted and you are signed out.</div></li>
</ol>
<div class="box warn"><p>This cannot be undone. Before deleting, you can export records you want to keep as PDF or Excel from the reports section.</p></div>` },
      { id: 'email', title: '2. Request deletion by email', html: `
<p>If you cannot access the app (e.g. you lost your device or uninstalled the app), send a deletion request by email:</p>
<div class="box"><ul>
<li><strong>To:</strong> <a href="mailto:${C.email}?subject=Animora%20account%20deletion%20request">${C.email}</a></li>
<li><strong>Subject:</strong> Animora account deletion request</li>
<li><strong>Include:</strong> the email address registered in the app and your farm name (if any).</li>
</ul></div>
<p>Please send the request from your registered email address if possible so we can confirm the account is yours. We may ask additional questions to verify your identity. Requests are completed within 30 days at the latest and we confirm the result by email.</p>` },
      { id: 'partial', title: '3. Delete specific data without deleting your account', html: `<p>To keep your account but remove some data, you can delete individual animal, health, milk or finance records in the app. To delete a specific group of data (e.g. all photos or all records of a farm), email us with the subject "Animora data deletion request".</p>` },
      { id: 'what', title: '4. What is deleted and what is kept', html: `
<div class="cards-2">
<div class="box"><h3>Deleted</h3><ul>
<li>Account and profile details (name, email, phone)</li>
<li>Your sign-in account (Firebase Authentication record)</li>
<li>Farms you own and all their records (animals, health, milk, breeding, finance, feed, inventory, calendar, paddocks)</li>
<li>Photos you uploaded</li>
<li>Your device’s notification registration</li>
</ul></div>
<div class="box"><h3>May be kept</h3><ul>
<li>Records we must keep by law, for the statutory period</li>
<li>Security server access logs, for a limited period</li>
<li>Purchase records, kept by Apple and Google under their own policies</li>
</ul></div>
</div>
<p>Data is deleted or anonymised when its retention period ends.</p>` },
      { id: 'subscription', title: '5. About your subscription', html: `<div class="box note"><p>Deleting your account does <strong>not automatically cancel</strong> your App Store or Google Play subscription. To avoid further charges, cancel it in your store settings before deleting your account: <a href="https://apps.apple.com/account/subscriptions" rel="noopener">App Store subscriptions</a> · <a href="https://play.google.com/store/account/subscriptions" rel="noopener">Google Play subscriptions</a>.</p></div>` },
      { id: 'team', title: '6. Team members', html: `<p>If you are a team member or veterinarian on another user’s farm, deleting your account ends your access to those farms. As those farms’ records belong to the farm owner, records you created may remain as the farm owner’s data.</p>` },
    ],
  };

  const support = {
    lang: 'en',
    path: '/en/support',
    alt: '/destek',
    title: 'Support and Contact — Animora',
    description: 'Support, frequently asked questions and contact details for the Animora app.',
    eyebrow: 'Support',
    h1: 'Support and Contact',
    intro: 'We are here for your questions, bug reports and suggestions about Animora.',
    updated: UPDATED,
    sections: [
      { id: 'contact', title: 'Contact us', html: `
<div class="box note"><p><strong>Email:</strong> <a href="mailto:${C.email}?subject=Animora%20support">${C.email}</a><br>We reply on business days.</p></div>
<p>To help us help you faster, please include:</p>
<ul>
<li>the email address registered in the app,</li>
<li>your device model and OS version (iOS / Android),</li>
<li>the app version (<em>Settings → About</em>),</li>
<li>a short description of the issue and a screenshot if possible.</li>
</ul>
<p>Please never send passwords or card details by email.</p>` },
      { id: 'account', title: 'Sign-in and account', html: `
<h3>I forgot my password</h3><p>Use the "Forgot?" link on the email sign-in screen to receive a reset link. If you signed up with Google, Apple or your phone number, sign in the same way.</p>
<h3>I want to delete my account</h3><p>In the app go to <strong>Settings → Delete Account</strong>. Details and email deletion: <a href="/en/delete-account">Account and Data Deletion</a>.</p>` },
      { id: 'subscriptions', title: 'Subscriptions and payments', html: `
<h3>How do I cancel my subscription?</h3><p>Subscriptions are managed in your store account: <a href="https://apps.apple.com/account/subscriptions" rel="noopener">App Store subscriptions</a> or <a href="https://play.google.com/store/account/subscriptions" rel="noopener">Google Play subscriptions</a>. Cancellation takes effect at the end of the current period.</p>
<h3>I changed devices and my subscription is missing</h3><p>Sign in with the same Animora account on the new device and tap <strong>Restore Purchases</strong> on the subscription screen. You must be signed in with the Apple or Google account used for the purchase.</p>
<h3>Refunds</h3><p>Payments are processed by Apple or Google, so refunds are requested from the store: <a href="https://reportaproblem.apple.com" rel="noopener">Apple — Report a Problem</a> · <a href="https://support.google.com/googleplay/answer/2479637?hl=en" rel="noopener">Google Play refunds</a>.</p>` },
      { id: 'notifications', title: 'Notifications', html: `<p>If reminders do not arrive, check that notifications are enabled for Animora in your device settings and that battery saver is not restricting the app.</p>` },
      { id: 'legal', title: 'Legal documents', html: `<ul><li><a href="/en/privacy">Privacy Policy</a></li><li><a href="/kvkk">KVKK Notice (Turkish)</a></li><li><a href="/en/terms">Terms of Use</a></li><li><a href="/en/cookies">Cookie Policy</a></li></ul>${controllerBox}` },
    ],
  };

  const cookies = {
    lang: 'en',
    path: '/en/cookies',
    alt: '/cerez-politikasi',
    title: 'Cookie Policy — Animora',
    description: 'How the animora.appouse.com website uses cookies and similar technologies.',
    eyebrow: 'Legal',
    h1: 'Cookie Policy',
    intro: 'This policy applies to the animora.appouse.com website.',
    updated: UPDATED,
    sections: [
      { id: 'no-cookies', title: '1. We do not use cookies', html: `<div class="box note"><p>This website does not use cookies, local storage, analytics, advertising or tracking tools. That is why we do not show a cookie banner.</p></div><p>The site serves its fonts and all files from its own server and does not load content from external services such as Google Fonts.</p>` },
      { id: 'logs', title: '2. Server logs', html: `<p>When you visit the site, the web server keeps standard access logs for security and operation: IP address, date and time, requested page and browser details. These logs are not used to identify you or build profiles and are deleted after a limited period.</p>` },
      { id: 'links', title: '3. External links', html: `<p>The site may link to third-party sites such as the App Store, Google Play or Apple. Their own cookie and privacy policies apply when you visit them.</p>` },
      { id: 'app', title: '4. Mobile app', html: `<p>For data processed in the Animora mobile app, see the <a href="/en/privacy">Privacy Policy</a>.</p>` },
      { id: 'changes', title: '5. Changes and contact', html: `<p>If we start using cookies in the future, we will update this policy and ask for your consent where required. Questions: ${mail}</p>` },
    ],
  };

  return [home, privacy, terms, deletion, support, cookies];
};
