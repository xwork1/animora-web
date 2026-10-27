import { icon, phoneDashboard, phoneMilk, phoneRepro, phoneFinance } from './ui.mjs';

const navTr = ['Ana sayfa', 'Hayvanlar', 'Süt', 'Finans', 'Ayarlar'];

const features = [
  ['tag', 't-green', 'Hayvan kaydı', 'Küpe numarası, tür, ırk, doğum tarihi, anne-baba ve grup bilgisiyle her hayvanın kimlik kartı; fotoğraf ekleyin, aradığınız hayvanı saniyeler içinde bulun.'],
  ['syringe', 't-rose', 'Sağlık, aşı ve tedavi', 'Aşı takvimi, muayene, teşhis ve tedavi kayıtları; ilaç ve arınma süreleriyle birlikte hayvanın tüm sağlık geçmişi.'],
  ['drop', 't-sky', 'Süt üretimi', 'Sağım kayıtlarını hayvan veya sürü bazında girin; günlük, haftalık verim ve en çok süt veren hayvanları takip edin.'],
  ['heart', 't-plum', 'Üreme ve gebelik', 'Kızgınlık, tohumlama, gebelik muayenesi, kuruya ayırma ve doğum olayları; beklenen doğum tarihleri otomatik hesaplanır.'],
  ['calendar', 't-wheat', 'Takvim ve hatırlatıcılar', 'Aşı, muayene ve doğum gibi yaklaşan işleri tek takvimde görün; zamanında bildirim alın.'],
  ['wallet', 't-green', 'Finans', 'Gelir ve giderleri kategorilere ayırarak kaydedin; işletmenizin ve hayvan bazında kârlılığın resmini görün.'],
  ['wheat', 't-wheat', 'Yem ve rasyon', 'Yem kütüphanesi ve rasyon hesaplayıcıyla hayvan grubunuza uygun besleme planını hazırlayın.'],
  ['box', 't-sky', 'Envanter', 'Yem, ilaç ve malzeme stoklarını izleyin; azalan ürünleri zamanında fark edin.'],
  ['file', 't-rose', 'Raporlar ve dışa aktarım', 'Sürü, sağlık, süt ve finans raporlarını PDF veya Excel olarak dışa aktarın, paylaşın.'],
  ['users', 't-plum', 'Ekip yönetimi', 'Çalışanlarınızı ve ortaklarınızı davet edin; her kişiye rolüne uygun yetki verin.'],
  ['steth', 't-green', 'Veteriner modu', 'Veteriner hekiminiz çiftliğinize bağlanıp muayene, teşhis ve tedavi planını doğrudan uygulamadan iletebilir.'],
  ['grid', 't-wheat', 'Padok planı', 'Ahır ve padoklarınızın planını çıkarın; hangi hayvanın nerede olduğunu bir bakışta görün.'],
];

const faq = [
  ['Animora hangi hayvanlar için uygun?', 'Animora büyükbaş (sığır, manda) ve küçükbaş (koyun, keçi) işletmeleri için tasarlandı. Hayvanları tek tek veya grup halinde takip edebilirsiniz.'],
  ['Uygulama ne zaman yayınlanacak?', 'Animora şu anda yayın hazırlığında. iOS (App Store) ve Android (Google Play) sürümleri yayınlandığında bu sayfadaki mağaza bağlantıları etkinleşecek.'],
  ['Ücretsiz kullanabilir miyim?', 'Evet. Ücretsiz plan, küçük sürüler için temel hayvan kaydı, sağlık kayıtlarını görüntüleme ve sınırlı takvim kullanımını içerir. Daha fazlasına ihtiyaç duyduğunuzda Basic veya Pro plana geçebilirsiniz.'],
  ['Abonelik nasıl ücretlendirilir ve nasıl iptal edilir?', 'Ücretli planlar App Store veya Google Play hesabınız üzerinden satın alınır ve dönem sonunda otomatik yenilenir. Aboneliğinizi istediğiniz zaman mağaza hesap ayarlarınızdan iptal edebilirsiniz; iptal, içinde bulunulan dönemin sonunda geçerli olur.'],
  ['Ekibim ve veterinerim de kullanabilir mi?', 'Evet. Ekip yönetimiyle çalışanlarınızı davet edip rollerine göre yetki verebilirsiniz. Veteriner modu, veteriner hekiminizin çiftliğinize bağlanarak muayene ve tedavi kayıtlarını doğrudan girmesini sağlar.'],
  ['Verilerim güvende mi?', 'Verileriniz şifreli bağlantı (HTTPS) üzerinden aktarılır ve yalnızca sizin ve yetki verdiğiniz ekip üyelerinin erişebileceği şekilde saklanır. Ayrıntılar için Gizlilik Politikamıza göz atabilirsiniz.'],
  ['Hesabımı nasıl silerim?', 'Uygulamada Ayarlar → Hesabı Sil adımıyla hesabınızı ve verilerinizi silebilirsiniz. Uygulamaya erişemiyorsanız Hesap ve Veri Silme sayfasındaki e-posta yolunu kullanabilirsiniz.'],
];

export default ({ SITE, C, UPDATED }) => {
  const mail = `<a href="mailto:${C.email}">${C.email}</a>`;
  const controllerBox = `<div class="box"><p><strong>${C.name}</strong><br>${C.address}<br>E-posta: ${mail}</p></div>`;

  const home = {
    lang: 'tr',
    path: '/',
    alt: '/en/',
    title: 'Animora — Çiftlik ve Sürü Yönetimi Uygulaması',
    description: 'Animora ile hayvan kaydı, sağlık ve aşı, süt üretimi, üreme ve gebelik, finans, yem ve ekip yönetimini tek uygulamada yapın. iOS ve Android için yakında.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Animora',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'iOS, Android',
      description: 'Büyükbaş ve küçükbaş işletmeler için çiftlik ve sürü yönetimi uygulaması.',
      url: SITE,
      inLanguage: ['tr', 'en'],
      publisher: { '@type': 'Organization', name: C.name, email: C.email },
    },
    body: `
<section class="hero">
  <div class="wrap hero-grid">
    <div>
      <span class="eyebrow">Çiftlik ve sürü yönetimi</span>
      <h1>Sürünüzün her kaydı, <em>cebinizde.</em></h1>
      <p class="lead">Animora; hayvan kaydından sağlık ve aşı takibine, süt veriminden gebelik takvimine, finanstan ekip yönetimine kadar çiftliğinizin tüm işlerini tek bir mobil uygulamada toplar.</p>
      <div class="store-row">
        <div class="store" aria-label="App Store — yakında">${icon('apple')}<div><small>iOS</small><strong>App Store</strong></div><span class="soon">Yakında</span></div>
        <div class="store" aria-label="Google Play — yakında">${icon('play')}<div><small>Android</small><strong>Google Play</strong></div><span class="soon">Yakında</span></div>
      </div>
      <p class="hero-note">iOS ve Android için hazırlanıyor. Ücretsiz planla başlayabileceksiniz.</p>
    </div>
    <div class="hero-visual">
      ${phoneDashboard({ aria: 'Animora ana ekranı: toplam hayvan, günlük süt ve yaklaşan görevler', hello: 'Hoş geldiniz', farm: 'Yeşilvadi Çiftliği', animals: 'Toplam hayvan', milk: 'Bugünkü süt', tasks: 'Yaklaşan işler', t1: 'Şap aşısı', t1s: 'A grubu · 12 hayvan', today: 'Bugün', t2: 'Gebelik muayenesi', t2s: 'TR-154, TR-158', tomorrow: 'Yarın', t3: 'Rasyon güncellendi', t3s: 'Sağmal grup', ok: 'Tamam', nav: navTr })}
      <div class="float-chip chip-a"><span class="dot t-plum">${icon('heart')}</span><div><b>Beklenen doğum</b><span>TR-089 · 6 gün kaldı</span></div></div>
      <div class="float-chip chip-b"><span class="dot t-green">${icon('bell')}</span><div><b>Hatırlatıcı</b><span>Yarın 09:30 — aşı</span></div></div>
    </div>
  </div>
  <div class="wrap"><div class="values" style="margin-top:56px">
    <div class="value"><span class="icon t-green">${icon('phone')}</span><div><h3>Her şey tek yerde</h3><p>Defter, ajanda ve tabloların yerine tek, düzenli bir kayıt.</p></div></div>
    <div class="value"><span class="icon t-wheat">${icon('bell')}</span><div><h3>Hiçbir işi kaçırmayın</h3><p>Aşı, muayene ve doğumlar için zamanında hatırlatma.</p></div></div>
    <div class="value"><span class="icon t-sky">${icon('users')}</span><div><h3>Ekibinizle birlikte</h3><p>Çalışanlarınız ve veterineriniz aynı kayıt üzerinde çalışır.</p></div></div>
  </div></div>
</section>

<section id="ozellikler" class="band">
  <div class="wrap">
    <div class="section-head"><span class="eyebrow">Özellikler</span><h2>Çiftlikte ihtiyaç duyduğunuz her şey</h2><p>Animora, işletmenizin günlük operasyonunu ve hayvanlarınızın biyolojik döngüsünü birlikte takip etmeniz için tasarlandı.</p></div>
    <div class="features">
      ${features.map(([i, tone, h, p]) => `<div class="feature"><span class="icon ${tone}">${icon(i)}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}
    </div>
  </div>
</section>

<section id="ekranlar">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Uygulamadan</span><h2>Sade ekranlar, net bilgi</h2><p>Sahada, ahırda ya da ofiste; ihtiyacınız olan bilgiye birkaç dokunuşla ulaşın.</p></div>
    <div class="showcase">
      <figure>${phoneMilk({ aria: 'Süt üretimi ekranı', eyebrow: 'Çiftlik yönetimi', title: 'Süt Üretimi', total: 'Bugünkü toplam', target: 'Hedef: 1.200 L', avg: 'İnek başına', quality: 'Kalite', fatProt: 'Yağ · Protein', weekly: 'Haftalık eğilim', days: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'], nav: navTr })}<figcaption>Süt verimi</figcaption></figure>
      <figure>${phoneRepro({ aria: 'Üreme ve gebelik takibi ekranı', eyebrow: 'Üreme', title: 'Gebelik Takibi', pregnant: 'Gebe', dueSoon: '30 gün içinde doğum', rows: [['TR-089', '274. gün', 'Beklenen doğum: 3 Kasım', 96], ['TR-154', '181. gün', 'Kuruya ayırma: 21 Kasım', 64], ['TR-212', '42. gün', 'Gebelik muayenesi: yarın', 15]], nav: navTr })}<figcaption>Üreme ve gebelik</figcaption></figure>
      <figure>${phoneFinance({ aria: 'Finans ekranı', eyebrow: 'Finans', title: 'Gelir ve Gider', net: 'Net kâr', period: 'Bu yıl', income: 'Gelir', expense: 'Gider', rows: [['Süt satışı', 'Mandıra · 24 Ekim', '+₺38.400'], ['Yem alımı', 'Silaj · 22 Ekim', '−₺21.750'], ['Veteriner', 'Aşı · 20 Ekim', '−₺4.200']], nav: navTr })}<figcaption>Finans</figcaption></figure>
    </div>
    <p class="showcase-note">Görseller uygulama arayüzünün temsili çizimleridir; örnek veriler içerir.</p>
  </div>
</section>

<section class="band">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Kimler için</span><h2>Büyükbaştan küçükbaşa</h2><p>Aile işletmesinden profesyonel çiftliğe kadar, hayvanlarını düzenli takip etmek isteyen herkes için.</p></div>
    <div class="audience">
      <div>Sığır<span>Süt ve besi</span></div>
      <div>Manda<span>Süt ve besi</span></div>
      <div>Koyun<span>Sürü ve kuzulama</span></div>
      <div>Keçi<span>Süt ve oğlaklama</span></div>
    </div>
  </div>
</section>

<section id="paketler">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">Paketler</span><h2>İşletmenize uygun planı seçin</h2><p>Ücretsiz başlayın; sürünüz büyüdükçe planınızı yükseltin.</p></div>
    <div class="plans">
      <div class="plan"><h3>Ücretsiz</h3><p class="price">Temel özellikler</p><ul><li>7 hayvan kaydı</li><li>Temel sağlık takibi (görüntüleme)</li><li>Takvim (ayda 5 etkinlik)</li><li>2 grup oluşturma</li></ul></div>
      <div class="plan featured"><h3>Basic <span class="pill">Popüler</span></h3><p class="price">Standart özellikler</p><ul><li>50 hayvan kaydı</li><li>Sağlık kaydı ekleme</li><li>Finansal takip</li><li>Temel raporlar</li><li>Hatırlatıcılar</li></ul></div>
      <div class="plan"><h3>Pro</h3><p class="price">Tüm özellikler</p><ul><li>Sınırsız hayvan</li><li>Tüm Basic özellikleri</li><li>Tedavi protokolleri</li><li>Rasyon hesaplama</li><li>Kârlılık analizi</li><li>PDF/Excel dışa aktarma</li><li>Çoklu çiftlik</li><li>Ekip yönetimi</li></ul></div>
    </div>
    <p class="plans-note">Fiyatlar, uygulama yayınlandığında App Store ve Google Play'de gösterilecektir. Ücretli planlar aylık veya yıllık olarak mağaza hesabınız üzerinden satın alınır, otomatik yenilenir ve istediğiniz zaman iptal edilebilir. Ayrıntılar: <a href="/kullanim-kosullari#abonelik">Kullanım Koşulları</a>.</p>
  </div>
</section>

<section style="padding-top:0">
  <div class="wrap">
    <div class="soon-box"><span class="icon t-sky">${icon('radio')}</span><div><h3>Yakında: akıllı sensör entegrasyonu</h3><p>Ahır ortamı ve hayvan sağlığı için sensör entegrasyonu üzerinde çalışıyoruz. Bu özellik henüz kullanımda değildir; hazır olduğunda burada duyuracağız.</p></div></div>
  </div>
</section>

<section id="sss" class="band">
  <div class="wrap">
    <div class="section-head center"><span class="eyebrow">SSS</span><h2>Sık sorulan sorular</h2></div>
    <div class="faq">
      ${faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}
    </div>
  </div>
</section>

<section id="iletisim">
  <div class="wrap">
    <div class="cta">
      <div><h2>Sorunuz mu var?</h2><p>Animora hakkında bilgi almak, öneri iletmek veya destek istemek için bize yazın. Daha fazla yardım için <a href="/destek">Destek</a> sayfasına göz atın.</p></div>
      <div class="contact-list">
        <a href="mailto:${C.email}?subject=Animora">${icon('mail')}<div><small>E-posta</small>${C.email}</div></a>
        <a href="/destek">${icon('help')}<div><small>Yardım merkezi</small>Destek ve iletişim</div></a>
      </div>
    </div>
  </div>
</section>`,
  };

  const privacy = {
    lang: 'tr',
    path: '/gizlilik',
    alt: '/en/privacy',
    title: 'Gizlilik Politikası — Animora',
    description: 'Animora mobil uygulamasının hangi kişisel verileri topladığı, nasıl kullandığı, kimlerle paylaştığı ve haklarınız.',
    eyebrow: 'Yasal',
    h1: 'Gizlilik Politikası',
    intro: 'Bu politika, Animora mobil uygulaması ("Uygulama") ve bu web sitesi kapsamında kişisel verilerinizin nasıl işlendiğini açıklar.',
    updated: UPDATED,
    sections: [
      { id: 'veri-sorumlusu', title: '1. Veri sorumlusu', html: `<p>Animora, aşağıdaki şirket tarafından geliştirilir ve işletilir. Kişisel verileriniz bakımından veri sorumlusu bu şirkettir.</p>${controllerBox}<p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamındaki ayrıntılı bilgilendirme için <a href="/kvkk">KVKK Aydınlatma Metni</a>'ne bakabilirsiniz.</p>` },
      { id: 'toplanan-veriler', title: '2. Topladığımız veriler', html: `
<h3>Hesap ve kimlik verileri</h3>
<ul>
<li>Ad soyad, e-posta adresi ve (bağlamanız hâlinde) telefon numarası. Telefon numaranızı hesabınıza bağlarsanız, numaranızı doğrulamak ve SMS ile giriş yapabilmeniz için Firebase Authentication üzerinden doğrulama kodu gönderilir.</li>
<li>Google ile veya Apple ile giriş yaptığınızda ilgili sağlayıcının bizimle paylaştığı ad ve e-posta adresi. Apple ile girişte "E-postamı gizle" seçeneğini kullanırsanız yalnızca Apple'ın oluşturduğu yönlendirme adresini alırız.</li>
<li>Kimlik doğrulama hizmetinin oluşturduğu kullanıcı kimliği. Şifreniz Firebase Authentication tarafından saklanır; biz şifrenizi göremeyiz.</li>
</ul>
<h3>Çiftlik ve işletme verileri</h3>
<ul>
<li>Uygulamaya girdiğiniz çiftlik bilgileri (çiftlik adı, işletme bilgileri, para birimi tercihi).</li>
<li>Hayvan kayıtları: küpe numarası, tür, ırk, doğum, soy, grup, sağlık, aşı, tedavi, süt, üreme ve gebelik kayıtları.</li>
<li>Finans, yem, rasyon, envanter, takvim ve padok kayıtları.</li>
<li>Yüklemeyi seçtiğiniz hayvan fotoğrafları, sağlık kayıtlarına eklediğiniz dosyalar ve notlar.</li>
</ul>
<h3>Ekip verileri</h3>
<ul><li>Ekibinize davet ettiğiniz kişilerin ad ve iletişim bilgileri (e-posta adresi veya telefon numarası), rolleri ve yetkileri; ekip üyelerinin ve veteriner hekimlerin hangi kaydı oluşturduğu bilgisi.</li></ul>
<h3>Abonelik verileri</h3>
<ul><li>Abonelik planınız, satın alma ve yenileme durumu, işlem kimlikleri. Ödemeler Apple veya Google tarafından alınır; kart bilgileriniz bize veya RevenueCat'e iletilmez.</li></ul>
<h3>Cihaz ve teknik veriler</h3>
<ul>
<li>Bildirim gönderebilmek için cihazınıza ait anlık bildirim (push) belirteci.</li>
<li>Cihaz modeli, işletim sistemi ve uygulama sürümü, dil tercihi.</li>
<li>Sunucularımıza yapılan isteklerin güvenlik kayıtları (IP adresi, istek zamanı, hata kayıtları).</li>
</ul>
<h3>Toplamadıklarımız</h3>
<div class="box note"><ul>
<li>Cihazınızın GPS konumunu toplamıyoruz.</li>
<li>Uygulamada reklam yoktur; reklam kimliğinizi toplamıyor, verilerinizi reklam amacıyla kullanmıyor veya satmıyoruz.</li>
<li>Uygulamada üçüncü taraf analiz veya izleme (tracking) aracı kullanmıyoruz.</li>
<li>Parmak izi ve yüz tanıma verileriniz cihazınızda kalır; bize iletilmez.</li>
</ul></div>` },
      { id: 'izinler', title: '3. Cihaz izinleri', html: `
<p>Uygulama aşağıdaki izinleri yalnızca ilgili özelliği kullandığınızda ister. İzinleri cihaz ayarlarından istediğiniz zaman geri alabilirsiniz.</p>
<table><thead><tr><th>İzin</th><th>Kullanım amacı</th></tr></thead><tbody>
<tr><td>Kamera</td><td>Hayvan fotoğrafı veya sağlık kaydına eklenecek belge fotoğrafı çekme.</td></tr>
<tr><td>Fotoğraflar / medya</td><td>Galeriden hayvan fotoğrafı seçme, oluşturulan raporları kaydetme.</td></tr>
<tr><td>Bildirimler</td><td>Aşı, muayene, doğum ve diğer hatırlatıcıları iletme.</td></tr>
<tr><td>Face ID / parmak izi</td><td>Uygulamaya hızlı ve güvenli giriş. Doğrulama cihazınızda yapılır.</td></tr>
</tbody></table>` },
      { id: 'amaclar', title: '4. Verileri hangi amaçlarla kullanıyoruz', html: `
<ul>
<li>Hesabınızı oluşturmak, oturum açmanızı sağlamak ve hesabınızı korumak.</li>
<li>Uygulamanın temel işlevlerini sunmak: kayıtlarınızı saklamak, raporlar ve hesaplamalar üretmek, ekibinizle paylaşmak.</li>
<li>Hatırlatıcı ve önemli hizmet bildirimleri göndermek.</li>
<li>Abonelik durumunuzu doğrulamak ve ücretli özelliklere erişim sağlamak.</li>
<li>Destek taleplerinizi yanıtlamak.</li>
<li>Hizmetin güvenliğini sağlamak, kötüye kullanımı ve hataları tespit edip gidermek.</li>
<li>Yasal yükümlülüklerimizi yerine getirmek.</li>
</ul>` },
      { id: 'hukuki-sebep', title: '5. Hukuki sebepler', html: `<p>Kişisel verilerinizi; sizinle yaptığımız sözleşmenin kurulması ve ifası (KVKK md. 5/2-c, GDPR md. 6/1-b), hukuki yükümlülüklerimiz (KVKK md. 5/2-ç, GDPR md. 6/1-c), bir hakkın tesisi, kullanılması veya korunması (KVKK md. 5/2-e) ve temel hak ve özgürlüklerinize zarar vermemek kaydıyla meşru menfaatimiz (KVKK md. 5/2-f, GDPR md. 6/1-f) hukuki sebeplerine dayanarak işleriz. Anlık bildirimler için işletim sisteminin izin ekranında verdiğiniz onay esas alınır.</p>` },
      { id: 'ucuncu-taraflar', title: '6. Paylaştığımız hizmet sağlayıcılar', html: `
<p>Verilerinizi satmayız. Hizmeti sunabilmek için yalnızca aşağıdaki hizmet sağlayıcılarla, gerekli olduğu ölçüde paylaşırız:</p>
<table><thead><tr><th>Sağlayıcı</th><th>Amaç</th><th>Paylaşılan veriler</th></tr></thead><tbody>
<tr><td>Google Firebase Authentication (Google LLC)</td><td>Hesap oluşturma ve giriş (e-posta/şifre, telefon/SMS, Google, Apple)</td><td>E-posta, telefon numarası (bağlanmışsa), ad, kullanıcı kimliği, giriş bilgileri</td></tr>
<tr><td>Firebase Cloud Messaging (Google LLC)</td><td>Anlık bildirim gönderimi</td><td>Bildirim belirteci, bildirim içeriği</td></tr>
<tr><td>Google ile Giriş (Google LLC)</td><td>Google hesabıyla giriş</td><td>Google'ın paylaştığı ad, e-posta</td></tr>
<tr><td>Apple ile Giriş (Apple Inc.)</td><td>Apple hesabıyla giriş</td><td>Apple'ın paylaştığı ad, e-posta veya yönlendirme adresi</td></tr>
<tr><td>RevenueCat (RevenueCat, Inc.)</td><td>Uygulama içi abonelik yönetimi</td><td>Uygulama kullanıcı kimliği, satın alma ve abonelik durumu</td></tr>
<tr><td>Apple App Store / Google Play</td><td>Ödeme ve abonelik tahsilatı</td><td>Mağazaların kendi politikalarına tabidir</td></tr>
<tr><td>Barındırma (Appouse tarafından yönetilen sunucular)</td><td>Uygulama verilerinin saklanması ve işlenmesi</td><td>Uygulamaya girdiğiniz veriler</td></tr>
</tbody></table>
<p>Döviz kurlarını göstermek için kamuya açık bir kur servisinden (Frankfurter) yalnızca kur verisi alınır; bu servise kişisel verileriniz gönderilmez. Ayrıca kanunen yetkili kamu kurum ve kuruluşlarının talebi hâlinde, mevzuatın gerektirdiği ölçüde bilgi paylaşabiliriz.</p>` },
      { id: 'yurt-disi', title: '7. Yurt dışına aktarım', html: `<p>Google, Apple ve RevenueCat'in sunucuları Türkiye dışında (başta ABD olmak üzere) bulunabilir. Bu hizmetlerin kullanılması nedeniyle kişisel verileriniz yurt dışına aktarılabilir. Bu aktarımlar KVKK md. 9'da öngörülen usul ve güvencelere uygun olarak gerçekleştirilir.</p>` },
      { id: 'saklama', title: '8. Saklama süresi', html: `
<ul>
<li>Hesap ve çiftlik verileriniz, hesabınız açık olduğu sürece saklanır.</li>
<li>Hesabınızı sildiğinizde, hesabınız, sahibi olduğunuz çiftlikler ve bunlara ait kayıtlar sistemlerimizden silinir. E-posta ile yapılan silme talepleri en geç 30 gün içinde sonuçlandırılır.</li>
<li>Güvenlik amaçlı sunucu kayıtları sınırlı bir süre tutulur ve ardından silinir.</li>
<li>Mevzuat gereği saklanması zorunlu veriler, ilgili kanuni süre boyunca saklanır ve süre sonunda silinir veya anonim hâle getirilir.</li>
</ul>` },
      { id: 'guvenlik', title: '9. Güvenlik', html: `<p>Verileriniz uygulama ile sunucularımız arasında şifreli bağlantı (HTTPS/TLS) üzerinden aktarılır. Erişim, kimlik doğrulama ve çiftlik bazlı yetkilendirme ile sınırlandırılır; her kullanıcı yalnızca üyesi olduğu çiftliklerin verilerine, rolünün izin verdiği ölçüde erişebilir. Hiçbir sistem tamamen risksiz olmasa da verilerinizi korumak için makul teknik ve idari tedbirleri uygularız.</p>` },
      { id: 'haklariniz', title: '10. Haklarınız', html: `
<p>KVKK md. 11 ve uygulanabildiği ölçüde GDPR kapsamında; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, verilerinize erişme ve bir kopyasını alma, eksik veya yanlış verilerin düzeltilmesini, verilerinizin silinmesini isteme, işlemeye itiraz etme ve zarara uğramanız hâlinde giderilmesini talep etme haklarına sahipsiniz.</p>
<p>Taleplerinizi ${mail} adresine iletebilirsiniz. Talepleriniz en geç 30 gün içinde yanıtlanır. Kişisel Verileri Koruma Kurulu'na şikâyette bulunma hakkınız saklıdır.</p>` },
      { id: 'hesap-silme', title: '11. Hesabınızı ve verilerinizi silme', html: `<p>Hesabınızı uygulama içinden <strong>Ayarlar → Hesabı Sil</strong> adımıyla dilediğiniz an silebilirsiniz. Uygulamaya erişemiyorsanız veya yalnızca belirli verilerinizin silinmesini istiyorsanız <a href="/hesap-silme">Hesap ve Veri Silme</a> sayfasındaki adımları izleyin.</p>` },
      { id: 'cocuklar', title: '12. Çocukların gizliliği', html: `<p>Animora, hayvancılık işletmelerine yönelik bir iş uygulamasıdır ve 18 yaşından küçüklere yönelik değildir. 13 yaşından küçük çocuklardan bilerek kişisel veri toplamayız. Böyle bir verinin toplandığını fark edersek siliriz; bu durumu fark ederseniz lütfen bize bildirin.</p>` },
      { id: 'web-sitesi', title: '13. Bu web sitesi', html: `<p>Bu web sitesi çerez, analiz veya izleme aracı kullanmaz ve harici kaynaklardan yazı tipi ya da betik yüklemez. Sunucu, güvenlik amacıyla standart erişim kayıtları (IP adresi, tarih, istenen sayfa) tutar. Ayrıntılar: <a href="/cerez-politikasi">Çerez Politikası</a>.</p>` },
      { id: 'degisiklikler', title: '14. Değişiklikler', html: `<p>Bu politikayı zaman zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayımlanır ve sayfanın başındaki tarih güncellenir. Önemli değişiklikleri uygulama içinden veya e-posta ile ayrıca bildiririz.</p>` },
      { id: 'iletisim', title: '15. İletişim', html: `<p>Gizlilikle ilgili tüm soru ve talepleriniz için: ${mail}</p>${controllerBox}` },
    ],
  };

  const kvkk = {
    lang: 'tr',
    path: '/kvkk',
    alt: '/en/privacy',
    title: 'KVKK Aydınlatma Metni — Animora',
    description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Animora kullanıcılarına yönelik aydınlatma metni.',
    eyebrow: 'Yasal',
    h1: 'KVKK Aydınlatma Metni',
    intro: '6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") md. 10 ve Aydınlatma Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar Hakkında Tebliğ uyarınca, Animora kullanıcılarını bilgilendirmek amacıyla hazırlanmıştır.',
    updated: UPDATED,
    sections: [
      { id: 'veri-sorumlusu', title: '1. Veri sorumlusunun kimliği', html: `${controllerBox}<p>(Bundan sonra "Şirket" olarak anılacaktır.)</p>` },
      { id: 'kategoriler', title: '2. İşlenen kişisel veri kategorileri', html: `
<table><thead><tr><th>Kategori</th><th>Veriler</th></tr></thead><tbody>
<tr><td>Kimlik</td><td>Ad soyad</td></tr>
<tr><td>İletişim</td><td>E-posta adresi, telefon numarası (hesaba bağlanması hâlinde); ekip daveti için girdiğiniz kişilerin e-posta adresi veya telefon numarası</td></tr>
<tr><td>Müşteri işlem</td><td>Çiftlik ve işletme bilgileri; hayvan, sağlık, süt, üreme, finans, yem, envanter, takvim ve padok kayıtları; destek talepleri</td></tr>
<tr><td>Görsel kayıt</td><td>Yüklemeyi seçtiğiniz hayvan fotoğrafları</td></tr>
<tr><td>İşlem güvenliği</td><td>Kullanıcı kimliği, oturum bilgileri, IP adresi, sunucu erişim ve hata kayıtları, cihaz ve uygulama sürümü bilgisi, bildirim belirteci</td></tr>
<tr><td>Finans</td><td>Abonelik planı, satın alma ve yenileme durumu, işlem kimlikleri (kart bilgisi işlenmez)</td></tr>
</tbody></table>
<p>Biyometrik verileriniz (parmak izi, yüz tanıma) cihazınızda işlenir; Şirket tarafından toplanmaz ve saklanmaz.</p>` },
      { id: 'amaclar', title: '3. İşleme amaçları', html: `
<ul>
<li>Üyelik ve hesap işlemlerinin yürütülmesi, kimlik doğrulama,</li>
<li>Uygulama hizmetlerinin sunulması ve sözleşmenin ifası,</li>
<li>Hatırlatıcı ve hizmet bildirimlerinin gönderilmesi,</li>
<li>Abonelik ve ödeme süreçlerinin yürütülmesi,</li>
<li>Ekip ve veteriner erişiminin yönetilmesi,</li>
<li>İletişim ve destek taleplerinin yanıtlanması,</li>
<li>Bilgi güvenliği süreçlerinin yürütülmesi, hataların tespiti ve giderilmesi,</li>
<li>Mevzuattan kaynaklanan yükümlülüklerin yerine getirilmesi ve yetkili kurumlara bilgi verilmesi.</li>
</ul>` },
      { id: 'hukuki-sebepler', title: '4. Hukuki sebepler', html: `
<p>Kişisel verileriniz KVKK md. 5/2 kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenir:</p>
<ul>
<li>(c) Bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması,</li>
<li>(ç) Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması,</li>
<li>(e) Bir hakkın tesisi, kullanılması veya korunması için zorunlu olması,</li>
<li>(f) İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla veri sorumlusunun meşru menfaatleri için zorunlu olması.</li>
</ul>` },
      { id: 'toplama-yontemi', title: '5. Toplama yöntemi', html: `<p>Kişisel verileriniz; Animora mobil uygulaması, giriş sağlayıcıları (Google, Apple), uygulama mağazaları ve abonelik altyapısı ile e-posta yoluyla, elektronik ortamda, kısmen otomatik yollarla toplanır.</p>` },
      { id: 'aktarim', title: '6. Kişisel verilerin aktarılması', html: `
<p>Kişisel verileriniz, yukarıdaki amaçlarla sınırlı olarak:</p>
<ul>
<li><strong>Yurt içinde:</strong> talep hâlinde kanunen yetkili kamu kurum ve kuruluşlarına,</li>
<li><strong>Yurt dışında:</strong> kimlik doğrulama ve bildirim hizmetleri için Google LLC (Firebase), Apple ile giriş için Apple Inc., abonelik yönetimi için RevenueCat, Inc. hizmet sağlayıcılarına</li>
</ul>
<p>aktarılabilir. Yurt dışına aktarımlar KVKK md. 9'da öngörülen usul ve güvencelere (uygun güvence sağlanması ve gerektiği hâllerde standart sözleşme dâhil) uygun olarak gerçekleştirilir. Ekip üyeliği kapsamında, kayıtlarınız yalnızca aynı çiftliğe yetki verdiğiniz kişilerce görüntülenebilir.</p>` },
      { id: 'saklama', title: '7. Saklama süresi', html: `<p>Kişisel verileriniz, hesabınız açık olduğu sürece ve işleme amacının gerektirdiği süre boyunca saklanır. Hesabın silinmesi veya işleme amacının ortadan kalkması hâlinde, mevzuatın öngördüğü saklama süreleri saklı kalmak kaydıyla silinir, yok edilir veya anonim hâle getirilir.</p>` },
      { id: 'haklar', title: '8. KVKK md. 11 kapsamındaki haklarınız', html: `
<p>Şirket'e başvurarak:</p>
<ol type="a">
<li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
<li>İşlenmişse buna ilişkin bilgi talep etme,</li>
<li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
<li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
<li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
<li>KVKK md. 7 çerçevesinde silinmesini veya yok edilmesini isteme,</li>
<li>(e) ve (f) bentleri uyarınca yapılan işlemlerin, verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
<li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
<li>Kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
</ol>
<p>haklarına sahipsiniz.</p>` },
      { id: 'basvuru', title: '9. Başvuru yöntemi', html: `
<p>Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak:</p>
<ul>
<li>Uygulamada kayıtlı e-posta adresinizden ${mail} adresine e-posta göndererek veya</li>
<li>Kimliğinizi tespit edici belgelerle birlikte yukarıdaki adrese yazılı olarak</li>
</ul>
<p>iletebilirsiniz. Başvurunuzda ad soyad, iletişim bilgileriniz ve talebinizin açık bir tanımı bulunmalıdır. Talepleriniz niteliğine göre en kısa sürede ve en geç 30 gün içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul'ca belirlenen tarifedeki ücret alınabilir.</p>` },
    ],
  };

  const terms = {
    lang: 'tr',
    path: '/kullanim-kosullari',
    alt: '/en/terms',
    title: 'Kullanım Koşulları — Animora',
    description: 'Animora mobil uygulamasının kullanım koşulları, abonelik, otomatik yenileme ve iptal kuralları.',
    eyebrow: 'Yasal',
    h1: 'Kullanım Koşulları',
    intro: `Bu koşullar, Animora mobil uygulamasını ("Uygulama") kullanan siz ile Uygulamayı geliştiren ve işleten ${C.name} ("Appouse", "biz") arasındaki ilişkiyi düzenler. Uygulamayı kullanarak bu koşulları kabul etmiş olursunuz.`,
    updated: UPDATED,
    sections: [
      { id: 'hizmet', title: '1. Hizmetin tanımı', html: `<p>Animora; hayvan kaydı, sağlık, aşı ve tedavi, süt üretimi, üreme ve gebelik, takvim, finans, yem ve rasyon, envanter, raporlama, ekip ve veteriner erişimi gibi özelliklerle çiftlik ve sürü yönetimini kolaylaştıran bir mobil uygulamadır. Bazı özellikler yalnızca ücretli planlarda sunulur.</p>` },
      { id: 'hesap', title: '2. Hesap', html: `
<ul>
<li>Uygulamayı kullanmak için hesap oluşturmanız gerekir. Hesap oluştururken doğru ve güncel bilgi vermeyi kabul edersiniz.</li>
<li>Uygulamayı kullanabilmek için en az 18 yaşında olmanız veya bir işletme adına hareket etme yetkinizin bulunması gerekir.</li>
<li>Hesabınızın ve giriş bilgilerinizin güvenliğinden siz sorumlusunuz. Yetkisiz kullanımı fark ederseniz bize derhâl bildirin.</li>
</ul>` },
      { id: 'kullanim', title: '3. Kullanım kuralları', html: `
<p>Uygulamayı; yürürlükteki mevzuata aykırı, başkalarının haklarını ihlal eden veya hizmetin işleyişini bozan şekilde kullanamazsınız. Özellikle:</p>
<ul>
<li>Sistemlere yetkisiz erişim girişiminde bulunamaz, güvenlik önlemlerini aşamazsınız,</li>
<li>Uygulamayı tersine mühendislik, kopyalama veya yeniden satış amacıyla kullanamazsınız,</li>
<li>Başkalarına ait verileri izinleri olmadan Uygulamaya giremezsiniz.</li>
</ul>` },
      { id: 'icerik', title: '4. Verileriniz ve sorumluluğunuz', html: `
<ul>
<li>Uygulamaya girdiğiniz veriler size aittir. Bu verileri yalnızca hizmeti sunmak amacıyla ve <a href="/gizlilik">Gizlilik Politikası</a>'na uygun olarak işleriz.</li>
<li>Girdiğiniz kayıtların doğruluğundan siz sorumlusunuz. Ekibinize davet ettiğiniz kişilere verdiğiniz yetkileri siz belirlersiniz.</li>
</ul>
<div class="box warn"><p><strong>Önemli:</strong> Animora bir kayıt ve takip aracıdır; veteriner hekim muayenesi, teşhisi veya tedavisinin yerini almaz. Hatırlatıcılar, hesaplamalar (ör. beklenen doğum tarihi, rasyon) ve raporlar bilgilendirme amaçlıdır. Hayvan sağlığı, ilaç kullanımı, arınma süreleri ve besleme kararlarında bir veteriner hekime danışınız.</p></div>` },
      { id: 'abonelik', title: '5. Abonelik, otomatik yenileme ve iptal', html: `
<p>Uygulama Ücretsiz plan ile birlikte Basic ve Pro ücretli abonelik planları sunar. Planların içerdiği özellikler ve güncel fiyatlar satın alma öncesinde Uygulama içinde gösterilir.</p>
<ul>
<li><strong>Ödeme:</strong> Ücretli abonelikler, satın alma onayınızla birlikte Apple App Store veya Google Play hesabınızdan tahsil edilir.</li>
<li><strong>Abonelik süresi:</strong> Abonelikler seçtiğiniz döneme göre aylık veya yıllık olarak sunulur.</li>
<li><strong>Otomatik yenileme:</strong> Abonelik, mevcut dönemin bitiminden en az 24 saat önce iptal edilmedikçe aynı süre ve o andaki fiyat üzerinden otomatik olarak yenilenir. Yenileme ücreti, dönemin bitiminden önceki 24 saat içinde hesabınızdan tahsil edilir.</li>
<li><strong>Yönetim ve iptal:</strong> Aboneliğinizi, satın alma sonrasında App Store'da <em>Ayarlar → Apple Kimliği → Abonelikler</em>, Google Play'de <em>Play Store → Profil → Ödemeler ve abonelikler → Abonelikler</em> üzerinden yönetebilir ve otomatik yenilemeyi kapatabilirsiniz. Uygulamanın abonelik ekranındaki bağlantı da sizi bu sayfaya yönlendirir.</li>
<li><strong>İptalin etkisi:</strong> İptal, içinde bulunulan dönemin sonunda geçerli olur; dönem sonuna kadar ücretli özellikleri kullanmaya devam edersiniz. Ardından hesabınız Ücretsiz plana geçer ve Ücretsiz plan sınırları uygulanır.</li>
<li><strong>Ücretsiz deneme:</strong> Bir ücretsiz deneme sunulması hâlinde, deneme süresinin kullanılmayan kısmı, abonelik satın aldığınızda sona erer. Deneme bitmeden iptal etmezseniz abonelik ücretli olarak başlar.</li>
<li><strong>İadeler:</strong> İade talepleri, satın almanın yapıldığı mağazanın (Apple veya Google) iade politikalarına göre mağaza tarafından değerlendirilir.</li>
<li><strong>Fiyat değişiklikleri:</strong> Fiyat değişiklikleri, mağaza kurallarına uygun olarak önceden bildirilir ve sonraki yenileme döneminden itibaren uygulanır.</li>
<li><strong>Satın alımları geri yükleme:</strong> Cihaz değiştirdiğinizde aboneliğinizi Uygulamadaki "Satın Alımları Geri Yükle" seçeneğiyle aynı mağaza hesabı üzerinden geri yükleyebilirsiniz.</li>
<li>Hesabınızı silmeniz, mağaza aboneliğinizi otomatik olarak iptal etmez; aboneliğinizi ayrıca mağaza üzerinden iptal etmeniz gerekir.</li>
</ul>
<p>iOS'ta Uygulamayı kullanımınız ayrıca Apple'ın <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener">Standart Son Kullanıcı Lisans Sözleşmesi (EULA)</a>'ne tabidir. Bu koşullar ile Apple EULA arasında çelişki olması hâlinde, Apple'a karşı haklarınız bakımından Apple EULA geçerlidir.</p>` },
      { id: 'tuketici', title: '6. Tüketici hakları', html: `<p>Tüketici sıfatıyla sahip olduğunuz yasal haklar saklıdır. Mesafeli Sözleşmeler Yönetmeliği uyarınca, elektronik ortamda anında ifa edilen hizmetler ve tüketiciye anında teslim edilen gayrimaddi mallarda cayma hakkı, ifaya başlanmasıyla birlikte kullanılamayabilir; bu durumda mağazaların iade politikaları uygulanır.</p>` },
      { id: 'fikri-mulkiyet', title: '7. Fikri mülkiyet', html: `<p>Uygulamanın yazılımı, tasarımı, logosu, adı ve içerikleri Appouse'a veya lisans verenlerine aittir. Size, bu koşullara uymanız şartıyla Uygulamayı kişisel veya işletme amaçlı kullanmanız için münhasır olmayan, devredilemez, geri alınabilir bir kullanım hakkı tanınır.</p>` },
      { id: 'degisiklik', title: '8. Hizmette değişiklik ve kesintiler', html: `<p>Uygulamayı geliştirmek için özellikleri değiştirebilir, yenilerini ekleyebilir veya bazılarını kaldırabiliriz. Bakım, güncelleme veya kontrolümüz dışındaki nedenlerle hizmette geçici kesintiler yaşanabilir. Ücretli planınızın temel özelliklerini olumsuz etkileyecek değişiklikleri önceden bildiririz.</p>` },
      { id: 'sorumluluk', title: '9. Sorumluluğun sınırlandırılması', html: `<p>Uygulama "olduğu gibi" sunulur. Yürürlükteki mevzuatın izin verdiği ölçüde; Uygulamaya girilen verilere dayanılarak alınan kararlardan, dolaylı zararlardan, kâr kaybından ve kontrolümüz dışındaki olaylardan (ör. üçüncü taraf hizmet kesintileri) doğan zararlardan sorumlu değiliz. Kasıt ve ağır ihmal hâlleri ile tüketici mevzuatından doğan haklarınız saklıdır. Önemli kayıtlarınızı Uygulamanın dışa aktarım özellikleriyle düzenli olarak yedeklemenizi öneririz.</p>` },
      { id: 'fesih', title: '10. Hesabın kapatılması', html: `<p>Hesabınızı istediğiniz zaman Uygulama içinden silebilirsiniz (<a href="/hesap-silme">Hesap ve Veri Silme</a>). Bu koşulları ağır şekilde veya tekrar eden biçimde ihlal etmeniz hâlinde, makul bir bildirimle hesabınızı askıya alabilir veya kapatabiliriz.</p>` },
      { id: 'degisiklikler', title: '11. Koşullardaki değişiklikler', html: `<p>Bu koşulları güncelleyebiliriz. Güncel sürüm bu sayfada yayımlanır; önemli değişiklikleri Uygulama üzerinden bildiririz. Değişikliklerden sonra Uygulamayı kullanmaya devam etmeniz, güncel koşulları kabul ettiğiniz anlamına gelir.</p>` },
      { id: 'hukuk', title: '12. Uygulanacak hukuk ve uyuşmazlıklar', html: `<p>Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul (Anadolu) Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici sıfatıyla hareket eden kullanıcıların, mevzuatta belirlenen parasal sınırlar dâhilinde Tüketici Hakem Heyetlerine ve Tüketici Mahkemelerine başvurma hakkı saklıdır.</p>` },
      { id: 'iletisim', title: '13. İletişim', html: `${controllerBox}` },
    ],
  };

  const deletion = {
    lang: 'tr',
    path: '/hesap-silme',
    alt: '/en/delete-account',
    title: 'Hesap ve Veri Silme — Animora',
    description: 'Animora hesabınızı ve verilerinizi uygulama içinden veya e-posta ile nasıl sileceğinizi öğrenin.',
    eyebrow: 'Hesap',
    h1: 'Hesap ve Veri Silme',
    intro: 'Animora hesabınızı ve ilişkili verilerinizi dilediğiniz zaman silebilirsiniz. Bu sayfa, Animora (Appouse Teknoloji Ltd. Şti.) uygulaması için hesap ve veri silme yollarını açıklar.',
    updated: UPDATED,
    sections: [
      { id: 'uygulama-ici', title: '1. Uygulama içinden silme (önerilen)', html: `
<ol class="steps">
<li><div>Animora uygulamasını açın ve silmek istediğiniz hesapla giriş yapın.</div></li>
<li><div>Alt menüden <strong>Ayarlar</strong> ekranına gidin.</div></li>
<li><div>Listenin sonundaki <strong>Hesabı Sil</strong> seçeneğine dokunun.</div></li>
<li><div>Açılan onay penceresinde işlemi onaylayın. Hesabınız ve verileriniz silinir, oturumunuz kapatılır.</div></li>
</ol>
<div class="box warn"><p>Bu işlem geri alınamaz. Silmeden önce saklamak istediğiniz kayıtları raporlar bölümünden PDF veya Excel olarak dışa aktarabilirsiniz.</p></div>` },
      { id: 'e-posta', title: '2. E-posta ile silme talebi', html: `
<p>Uygulamaya erişemiyorsanız (ör. cihazınızı kaybettiyseniz veya uygulamayı kaldırdıysanız) silme talebinizi e-posta ile iletebilirsiniz:</p>
<div class="box"><ul>
<li><strong>Alıcı:</strong> <a href="mailto:${C.email}?subject=Animora%20hesap%20silme%20talebi">${C.email}</a></li>
<li><strong>Konu:</strong> Animora hesap silme talebi</li>
<li><strong>İçerik:</strong> Uygulamaya kayıtlı e-posta adresiniz ve (varsa) çiftlik adınız.</li>
</ul></div>
<p>Hesabın size ait olduğunu doğrulayabilmemiz için talebi mümkünse uygulamada kayıtlı e-posta adresinizden gönderin. Gerekirse kimliğinizi doğrulamak için size ek soru yöneltebiliriz. Talepler en geç 30 gün içinde sonuçlandırılır ve sonuç e-posta ile bildirilir.</p>` },
      { id: 'kismi', title: '3. Hesabı silmeden belirli verileri silme', html: `<p>Hesabınızı korumak ancak bazı verilerinizi silmek istiyorsanız, hayvan, sağlık, süt, finans gibi kayıtlarınızı uygulama içinden tek tek silebilirsiniz. Belirli bir veri grubunun (ör. tüm fotoğraflar veya bir çiftliğe ait kayıtlar) silinmesini istiyorsanız yukarıdaki e-posta adresine "Animora veri silme talebi" konusuyla yazabilirsiniz.</p>` },
      { id: 'silinenler', title: '4. Silinen ve saklanan veriler', html: `
<div class="cards-2">
<div class="box"><h3>Silinenler</h3><ul>
<li>Hesap ve profil bilgileriniz (ad, e-posta, telefon)</li>
<li>Giriş hesabınız (Firebase Authentication kaydı)</li>
<li>Sahibi olduğunuz çiftlikler ve bunlara ait tüm kayıtlar (hayvan, sağlık, süt, üreme, finans, yem, envanter, takvim, padok)</li>
<li>Yüklediğiniz fotoğraflar</li>
<li>Cihazınıza ait bildirim kaydı</li>
</ul></div>
<div class="box"><h3>Saklanabilecekler</h3><ul>
<li>Mevzuat gereği saklanması zorunlu kayıtlar, ilgili kanuni süre boyunca</li>
<li>Güvenlik amaçlı sunucu erişim kayıtları, sınırlı bir süre boyunca</li>
<li>Satın alma kayıtları: Apple ve Google tarafından kendi politikalarına göre tutulur</li>
</ul></div>
</div>
<p>Saklama süresi dolan veriler silinir veya anonim hâle getirilir.</p>` },
      { id: 'abonelik', title: '5. Aboneliğiniz hakkında', html: `<div class="box note"><p>Hesabınızı silmek, App Store veya Google Play aboneliğinizi <strong>otomatik olarak iptal etmez</strong>. Tekrar ücretlendirilmemek için aboneliğinizi hesabınızı silmeden önce mağaza ayarlarınızdan iptal edin: <a href="https://apps.apple.com/account/subscriptions" rel="noopener">App Store abonelikleri</a> · <a href="https://play.google.com/store/account/subscriptions" rel="noopener">Google Play abonelikleri</a>.</p></div>` },
      { id: 'ekip', title: '6. Ekip üyeleri', html: `<p>Başka bir kullanıcının çiftliğinde ekip üyesi veya veteriner olarak yer alıyorsanız, hesabınızın silinmesiyle bu çiftliklere erişiminiz sona erer. O çiftliğin kayıtları çiftlik sahibine ait olduğundan, sizin oluşturduğunuz kayıtlar çiftlik sahibinin verisi olarak kalabilir.</p>` },
    ],
  };

  const support = {
    lang: 'tr',
    path: '/destek',
    alt: '/en/support',
    title: 'Destek ve İletişim — Animora',
    description: 'Animora uygulaması için destek, sık sorulan sorular ve iletişim bilgileri.',
    eyebrow: 'Destek',
    h1: 'Destek ve İletişim',
    intro: 'Animora ile ilgili sorularınız, hata bildirimleriniz ve önerileriniz için buradayız.',
    updated: UPDATED,
    sections: [
      { id: 'iletisim', title: 'Bize ulaşın', html: `
<div class="box note"><p><strong>E-posta:</strong> <a href="mailto:${C.email}?subject=Animora%20destek">${C.email}</a><br>Talepler iş günlerinde yanıtlanır.</p></div>
<p>Size daha hızlı yardımcı olabilmemiz için mesajınıza şunları ekleyin:</p>
<ul>
<li>Uygulamaya kayıtlı e-posta adresiniz,</li>
<li>Cihaz modeliniz ve işletim sistemi sürümü (iOS / Android),</li>
<li>Uygulama sürümü (<em>Ayarlar → Hakkında</em>),</li>
<li>Sorunun kısa açıklaması ve mümkünse ekran görüntüsü.</li>
</ul>
<p>Lütfen e-posta ile şifre veya ödeme kartı bilgisi paylaşmayın.</p>` },
      { id: 'giris', title: 'Giriş ve hesap', html: `
<h3>Şifremi unuttum</h3><p>E-posta ile giriş ekranındaki "Unuttum?" bağlantısıyla e-posta adresinize sıfırlama bağlantısı gönderebilirsiniz. Google, Apple veya telefon numarasıyla kayıt olduysanız aynı yöntemle giriş yapın.</p>
<h3>Hesabımı silmek istiyorum</h3><p>Uygulamada <strong>Ayarlar → Hesabı Sil</strong> adımını izleyin. Ayrıntılar ve e-posta ile silme için: <a href="/hesap-silme">Hesap ve Veri Silme</a>.</p>` },
      { id: 'abonelik', title: 'Abonelik ve ödemeler', html: `
<h3>Aboneliğimi nasıl iptal ederim?</h3><p>Abonelikler mağaza hesabınız üzerinden yönetilir: <a href="https://apps.apple.com/account/subscriptions" rel="noopener">App Store abonelikleri</a> veya <a href="https://play.google.com/store/account/subscriptions" rel="noopener">Google Play abonelikleri</a>. İptal, içinde bulunulan dönemin sonunda geçerli olur.</p>
<h3>Cihaz değiştirdim, aboneliğim görünmüyor</h3><p>Yeni cihazda aynı Animora hesabıyla giriş yapın ve abonelik ekranındaki <strong>Satın Alımları Geri Yükle</strong> seçeneğini kullanın. Satın alma yaptığınız Apple veya Google hesabıyla oturum açmış olmanız gerekir.</p>
<h3>İade talebi</h3><p>Ödemeler Apple veya Google tarafından alındığından iade talepleri ilgili mağaza üzerinden yapılır: <a href="https://reportaproblem.apple.com" rel="noopener">Apple — Sorun bildir</a> · <a href="https://support.google.com/googleplay/answer/2479637?hl=tr" rel="noopener">Google Play iade</a>.</p>` },
      { id: 'bildirimler', title: 'Bildirimler', html: `<p>Hatırlatıcılar gelmiyorsa cihaz ayarlarından Animora için bildirim izninin açık olduğunu ve pil tasarrufu modunun uygulamayı kısıtlamadığını kontrol edin.</p>` },
      { id: 'yasal', title: 'Yasal belgeler', html: `<ul><li><a href="/gizlilik">Gizlilik Politikası</a></li><li><a href="/kvkk">KVKK Aydınlatma Metni</a></li><li><a href="/kullanim-kosullari">Kullanım Koşulları</a></li><li><a href="/cerez-politikasi">Çerez Politikası</a></li></ul>${controllerBox}` },
    ],
  };

  const cookies = {
    lang: 'tr',
    path: '/cerez-politikasi',
    alt: '/en/cookies',
    title: 'Çerez Politikası — Animora',
    description: 'animora.appouse.com web sitesinin çerez ve benzeri teknolojileri kullanımı hakkında bilgi.',
    eyebrow: 'Yasal',
    h1: 'Çerez Politikası',
    intro: 'Bu politika, animora.appouse.com web sitesi için geçerlidir.',
    updated: UPDATED,
    sections: [
      { id: 'cerez-yok', title: '1. Çerez kullanmıyoruz', html: `<div class="box note"><p>Bu web sitesi çerez (cookie), yerel depolama, analiz, reklam veya izleme aracı kullanmaz. Bu nedenle bir çerez onay penceresi göstermiyoruz.</p></div><p>Site, yazı tiplerini ve tüm dosyalarını kendi sunucusundan sunar; Google Fonts gibi harici hizmetlerden içerik yüklemez.</p>` },
      { id: 'sunucu-kayitlari', title: '2. Sunucu kayıtları', html: `<p>Siteyi ziyaret ettiğinizde, web sunucusu güvenlik ve hizmetin işleyişi amacıyla standart erişim kayıtları tutar: IP adresi, tarih ve saat, istenen sayfa, tarayıcı bilgisi. Bu kayıtlar kimliğinizi belirlemek veya profil oluşturmak amacıyla kullanılmaz ve sınırlı bir süre sonra silinir.</p>` },
      { id: 'dis-baglantilar', title: '3. Dış bağlantılar', html: `<p>Sitede App Store, Google Play veya Apple gibi üçüncü taraf sitelere bağlantılar bulunabilir. Bu sitelere geçtiğinizde ilgili sitenin kendi çerez ve gizlilik politikaları geçerlidir.</p>` },
      { id: 'uygulama', title: '4. Mobil uygulama', html: `<p>Animora mobil uygulamasında işlenen veriler için <a href="/gizlilik">Gizlilik Politikası</a>'na bakınız.</p>` },
      { id: 'degisiklik', title: '5. Değişiklikler ve iletişim', html: `<p>Sitede ileride çerez kullanmaya başlarsak bu politikayı güncelleyecek ve gerekiyorsa onayınızı isteyeceğiz. Sorularınız için: ${mail}</p>` },
    ],
  };

  const notFound = {
    lang: 'tr',
    file: '404.html',
    path: '/404',
    title: 'Sayfa bulunamadı — Animora',
    description: 'Aradığınız sayfa bulunamadı.',
    body: `<section class="notfound"><div class="wrap"><h1>404</h1><p class="lead center">Aradığınız sayfa bulunamadı. / Page not found.</p><p><a class="btn btn-primary" href="/">Ana sayfaya dön</a> <a class="btn btn-ghost" href="/en/">English</a></p></div></section>`,
  };

  return [home, privacy, kvkk, terms, deletion, support, cookies, notFound];
};
