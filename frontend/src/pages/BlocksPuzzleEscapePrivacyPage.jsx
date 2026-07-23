import React from 'react';
import { Link } from 'react-router-dom';
import BlocksPuzzleEscapeNav from '@/components/BlocksPuzzleEscapeNav';
import { useLanguage } from '@/context/LanguageContext';

const SUPPORT_EMAIL = 'iammustafakucukkoc@gmail.com';

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: July 23, 2026',
    sections: [
      {
        title: '1. Who We Are and Scope',
        paragraphs: [
          'This Privacy Policy explains how the developer and operator of Blocks - Puzzle Escape (“we,” “us,” or “our”) handles information when you use the mobile game, visit its related website, or contact us for support.',
          'The policy applies to the current version of Blocks - Puzzle Escape. If a feature has a separate privacy notice, that notice will supplement this policy.',
        ],
      },
      {
        title: '2. Privacy at a Glance',
        bullets: [
          'You can play without creating an account or providing your name, phone number, or email address.',
          'Game progress and preferences are primarily stored locally on your device.',
          'The app uses Google Mobile Ads to display banner, interstitial, and optional rewarded ads.',
          'The current iOS version requests non-personalized ads and does not request App Tracking Transparency permission.',
          'We do not sell personal information for money.',
        ],
      },
      {
        title: '3. Information Stored Locally on Your Device',
        paragraphs: [
          'To operate the game and remember your choices, the app may store information on your device using local application storage. This information normally remains on the device and is not sent to us.',
        ],
        bullets: [
          'Level progress, completed levels, stars, scores, streaks, lives, hints, coins, and unlocked themes',
          'Daily-puzzle status and other gameplay state',
          'Sound, music, vibration, accessibility, theme, and language preferences',
          'Technical flags needed to start, restore, and operate the game',
        ],
        note: 'Removing the app, clearing its storage, or changing devices may permanently remove locally stored progress unless a platform backup restores it.',
      },
      {
        title: '4. Information Processed by Advertising and Technical Partners',
        paragraphs: [
          'Google Mobile Ads and the operating system may automatically process limited device and usage information when ads are requested or displayed. Depending on your device, region, consent choices, and Google settings, this may include:',
        ],
        bullets: [
          'IP address, which may be used to estimate a general or coarse location',
          'Device or advertising identifiers and app-instance identifiers',
          'Device model, operating-system version, language, app version, and network information',
          'Ad impressions, clicks, rewarded-ad completion, and other product-interaction or advertising data',
          'Crash logs, diagnostics, performance data, and fraud-prevention signals',
        ],
        note: 'Advertising partners process this information under their own privacy policies. We do not receive your complete advertising profile or direct identifiers such as your name from the ad SDK.',
      },
      {
        title: '5. Information You Provide to Us',
        paragraphs: [
          'If you contact us, we receive the information you choose to include, such as your email address, message, screenshots, device details, or support history. Please do not send sensitive personal information that is not necessary to resolve your request.',
          'The current version does not require an account and does not require an in-app purchase. If purchases are offered in a future version, Apple or Google will process payment details. We may receive transaction identifiers and entitlement status, but not your full card or bank details.',
        ],
      },
      {
        title: '6. Information We Do Not Request for Gameplay',
        bullets: [
          'Precise GPS location',
          'Contacts, call logs, or messages',
          'Photos, videos, microphone recordings, or camera access',
          'Health, biometric, financial-account, or government-identifier data',
          'Browsing history or search history outside the app',
        ],
      },
      {
        title: '7. How and Why We Use Information',
        bullets: [
          'Provide the game, save local progress, remember settings, and grant optional rewarded-ad benefits',
          'Display and measure ads, limit repeated ads, and support aggregated reporting',
          'Diagnose crashes, improve stability and performance, secure the service, and prevent fraud or abuse',
          'Answer support, privacy, and data-deletion requests',
          'Comply with legal obligations and protect users, our rights, and the integrity of the service',
        ],
        note: 'Where a legal basis is required, we rely on performance of the service you request, our legitimate interests in operating and securing the app, consent where required for advertising or device access, and compliance with law.',
      },
      {
        title: '8. Advertising, Consent, and Device Choices',
        paragraphs: [
          'Rewarded ads are optional, but the ad must generally be completed before the in-game reward is granted. Banner or interstitial ads may appear during normal use.',
          'The current iOS version requests non-personalized ads and does not request permission to track you across other companies’ apps and websites. Non-personalized ads may still use contextual information, frequency capping, aggregated reporting, security signals, and limited device identifiers.',
          'You can review advertising, privacy, and identifier controls in your iOS or Android settings. Depending on your region, Google may also present a consent or privacy-options form.',
        ],
      },
      {
        title: '9. When Information May Be Shared',
        paragraphs: [
          'We share information only as needed to operate the service, comply with law, or protect legitimate interests. Recipients may include:',
        ],
        bullets: [
          'Advertising and technical service providers, including Google Mobile Ads',
          'Apple App Store, Google Play, device-platform, hosting, and infrastructure providers',
          'Professional advisers, authorities, or other parties when required by law or necessary to protect rights and safety',
          'A successor in a merger, acquisition, financing, or transfer of the app, subject to appropriate safeguards',
        ],
        note: 'We do not sell personal information for money. Certain advertising disclosures may be treated as “sharing” under some privacy laws even when no money is exchanged.',
      },
      {
        title: '10. Website Data and Cookies',
        paragraphs: [
          'When you visit the Blocks - Puzzle Escape website, the hosting and analytics infrastructure may receive standard technical logs such as IP address, browser type, device type, pages viewed, referral source, timestamps, and error information. The site may use cookies or similar technologies for security, basic functionality, traffic measurement, and performance.',
          'You can restrict cookies through your browser settings, although some site functions may not work as expected.',
        ],
      },
      {
        title: '11. Retention and Deletion',
        bullets: [
          'Local game data remains on your device until you clear the app’s storage, reset progress, or uninstall the app.',
          'Support correspondence is kept only as long as reasonably necessary to resolve the request, maintain records, prevent abuse, and meet legal obligations.',
          'Advertising, diagnostic, and platform data is retained by the relevant provider under its own retention rules.',
          'Verified privacy or deletion requests are handled as soon as reasonably possible and normally within 30 days, unless law allows or requires additional time.',
        ],
      },
      {
        title: '12. Security and International Transfers',
        paragraphs: [
          'We use reasonable administrative and technical measures designed to protect information. No storage or transmission method is completely secure, so absolute security cannot be guaranteed.',
          'Service providers may process information in countries other than your own. Where required, transfers are supported by recognized safeguards, contractual protections, or other lawful transfer mechanisms.',
        ],
      },
      {
        title: '13. Children’s Privacy',
        paragraphs: [
          'Blocks - Puzzle Escape is a general-audience puzzle game and is not specifically directed to children under 13. The app does not require a child to create an account or provide a name or email address.',
          'If you are a parent or guardian and believe a child provided personal information to us, contact us so we can review and delete it where appropriate. Age thresholds may differ by country.',
        ],
      },
      {
        title: '14. Your Rights and Choices',
        paragraphs: [
          'Depending on where you live, you may have rights to access, correct, delete, restrict, object to, or receive a portable copy of personal information, and to withdraw consent without affecting earlier lawful processing. You may also have the right to complain to your local data-protection authority.',
        ],
        bullets: [
          'Manage ad and privacy controls in your device settings and any consent form shown in the app',
          'Delete local game data by clearing storage or uninstalling the app',
          'Use our data-deletion page or email us to submit a verified request',
          'California residents may also have rights to know, correct, delete, or opt out of sale or sharing where applicable, without discriminatory treatment',
        ],
      },
      {
        title: '15. Third-Party Privacy Information',
        paragraphs: [
          'Third-party services control their own processing practices. Review their policies for more information about collection, retention, security, and privacy controls.',
        ],
        links: [
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
          { label: 'How Google uses information for advertising', href: 'https://policies.google.com/technologies/ads' },
          { label: 'Apple Privacy Policy', href: 'https://www.apple.com/legal/privacy/' },
        ],
      },
      {
        title: '16. Changes to This Policy',
        paragraphs: [
          'We may update this policy to reflect changes to the app, service providers, or legal requirements. We will post the revised policy on this page and update the date above. Material changes may also be communicated in the app where appropriate.',
        ],
      },
      {
        title: '17. Contact and Data Requests',
        paragraphs: [
          'For privacy questions, requests, or complaints, contact the developer of Blocks - Puzzle Escape at the email address below. We may ask for limited information to verify and locate the relevant data before completing a request.',
        ],
      },
    ],
  },
  tr: {
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 23 Temmuz 2026',
    sections: [
      {
        title: '1. Biz Kimiz ve Politikanın Kapsamı',
        paragraphs: [
          'Bu Gizlilik Politikası, Blocks - Puzzle Escape geliştiricisinin ve işletmecisinin (“biz”, “bize” veya “bizim”) mobil oyunu kullandığınızda, ilgili web sitesini ziyaret ettiğinizde veya destek için bizimle iletişime geçtiğinizde bilgileri nasıl işlediğini açıklar.',
          'Politika, Blocks - Puzzle Escape uygulamasının mevcut sürümü için geçerlidir. Bir özellik için ayrıca gizlilik bildirimi sunulursa o bildirim bu politikayı tamamlar.',
        ],
      },
      {
        title: '2. Kısaca Gizlilik',
        bullets: [
          'Hesap oluşturmadan ve ad, telefon numarası veya e-posta adresi vermeden oynayabilirsiniz.',
          'Oyun ilerlemesi ve tercihler esas olarak cihazınızda yerel biçimde saklanır.',
          'Uygulama banner, geçiş ve isteğe bağlı ödüllü reklamlar için Google Mobile Ads kullanır.',
          'Mevcut iOS sürümü kişiselleştirilmemiş reklam talep eder ve Uygulama Takibi Şeffaflığı izni istemez.',
          'Kişisel bilgileri para karşılığında satmayız.',
        ],
      },
      {
        title: '3. Cihazınızda Yerel Olarak Saklanan Bilgiler',
        paragraphs: [
          'Oyunu çalıştırmak ve tercihlerinizi hatırlamak için uygulama, yerel uygulama depolamasını kullanarak bazı bilgileri cihazınızda saklayabilir. Bu bilgiler normalde cihazda kalır ve bize gönderilmez.',
        ],
        bullets: [
          'Seviye ilerlemesi, tamamlanan seviyeler, yıldızlar, puanlar, seri, can, ipucu, jeton ve açılan temalar',
          'Günlük bulmaca durumu ve diğer oynanış bilgileri',
          'Ses, müzik, titreşim, erişilebilirlik, tema ve dil tercihleri',
          'Oyunu başlatmak, geri yüklemek ve çalıştırmak için gereken teknik işaretler',
        ],
        note: 'Uygulamayı kaldırmak, depolamasını temizlemek veya cihaz değiştirmek, platform yedeği geri yüklemediği sürece yerel ilerlemeyi kalıcı olarak silebilir.',
      },
      {
        title: '4. Reklam ve Teknik İş Ortaklarının İşlediği Bilgiler',
        paragraphs: [
          'Reklam istendiğinde veya gösterildiğinde Google Mobile Ads ve işletim sistemi sınırlı cihaz ve kullanım bilgilerini otomatik olarak işleyebilir. Cihazınıza, bölgenize, izin tercihlerinize ve Google ayarlarınıza bağlı olarak bunlar şunları içerebilir:',
        ],
        bullets: [
          'Genel veya yaklaşık konumu tahmin etmek için kullanılabilen IP adresi',
          'Cihaz veya reklam tanımlayıcıları ve uygulama örneği tanımlayıcıları',
          'Cihaz modeli, işletim sistemi sürümü, dil, uygulama sürümü ve ağ bilgisi',
          'Reklam gösterimleri, tıklamalar, ödüllü reklam tamamlama ve diğer ürün etkileşimi ya da reklam verileri',
          'Çökme kayıtları, tanılama, performans verileri ve dolandırıcılığı önleme sinyalleri',
        ],
        note: 'Reklam ortakları bu bilgileri kendi gizlilik politikalarına göre işler. Reklam SDK’sından adınız gibi doğrudan tanımlayıcıları veya eksiksiz reklam profilinizi almayız.',
      },
      {
        title: '5. Bize Sağladığınız Bilgiler',
        paragraphs: [
          'Bizimle iletişime geçerseniz e-posta adresiniz, mesajınız, ekran görüntüleri, cihaz bilgileri veya destek geçmişi gibi paylaşmayı seçtiğiniz bilgileri alırız. Talebinizi çözmek için gerekmeyen hassas kişisel bilgileri göndermeyin.',
          'Mevcut sürüm hesap açılmasını veya uygulama içi satın alma yapılmasını gerektirmez. Gelecekte satın alma sunulursa ödeme bilgilerini Apple veya Google işler. İşlem tanımlayıcısı ve hak durumu bize iletilebilir; kart veya banka bilgilerinizin tamamı iletilmez.',
        ],
      },
      {
        title: '6. Oynanış İçin İstemediğimiz Bilgiler',
        bullets: [
          'Kesin GPS konumu',
          'Kişiler, arama kayıtları veya mesajlar',
          'Fotoğraflar, videolar, mikrofon kayıtları veya kamera erişimi',
          'Sağlık, biyometrik, finansal hesap veya resmî kimlik bilgileri',
          'Uygulama dışındaki tarama ya da arama geçmişi',
        ],
      },
      {
        title: '7. Bilgileri Nasıl ve Neden Kullanırız',
        bullets: [
          'Oyunu sunmak, yerel ilerlemeyi kaydetmek, ayarları hatırlamak ve isteğe bağlı ödüllü reklam faydalarını vermek',
          'Reklam göstermek ve ölçmek, reklam tekrarını sınırlandırmak ve toplu raporlama yapmak',
          'Çökmeleri incelemek, kararlılık ve performansı geliştirmek, hizmeti güvenceye almak ve dolandırıcılık ya da kötüye kullanımı önlemek',
          'Destek, gizlilik ve veri silme taleplerine yanıt vermek',
          'Yasal yükümlülüklere uymak; kullanıcıları, haklarımızı ve hizmetin bütünlüğünü korumak',
        ],
        note: 'Hukuki dayanak gereken yerlerde, talep ettiğiniz hizmetin ifası, uygulamayı işletme ve güvenceye almaya ilişkin meşru menfaatlerimiz, reklam veya cihaz erişimi için gerektiğinde rıza ve yasal yükümlülüklere uyma dayanaklarına güveniriz.',
      },
      {
        title: '8. Reklam, Rıza ve Cihaz Seçenekleri',
        paragraphs: [
          'Ödüllü reklamlar isteğe bağlıdır; ancak oyun içi ödülün verilmesi için reklamın genellikle tamamlanması gerekir. Normal kullanım sırasında banner veya geçiş reklamları gösterilebilir.',
          'Mevcut iOS sürümü kişiselleştirilmemiş reklam ister ve diğer şirketlerin uygulama ve web siteleri arasında takip için izin talep etmez. Kişiselleştirilmemiş reklamlarda da bağlamsal bilgi, sıklık sınırlaması, toplu raporlama, güvenlik sinyalleri ve sınırlı cihaz tanımlayıcıları kullanılabilir.',
          'iOS veya Android ayarlarınızdan reklam, gizlilik ve tanımlayıcı kontrollerini inceleyebilirsiniz. Bölgenize bağlı olarak Google ayrıca bir rıza veya gizlilik seçenekleri formu gösterebilir.',
        ],
      },
      {
        title: '9. Bilgiler Ne Zaman Paylaşılabilir',
        paragraphs: [
          'Bilgileri yalnızca hizmeti işletmek, yasalara uymak veya meşru menfaatleri korumak için gerektiği ölçüde paylaşırız. Alıcılar şunları içerebilir:',
        ],
        bullets: [
          'Google Mobile Ads dâhil reklam ve teknik hizmet sağlayıcıları',
          'Apple App Store, Google Play, cihaz platformu, barındırma ve altyapı sağlayıcıları',
          'Yasa gerektirdiğinde veya hakları ve güvenliği korumak için gerektiğinde profesyonel danışmanlar, yetkili makamlar veya diğer taraflar',
          'Uygun güvencelere tabi olmak üzere birleşme, satın alma, finansman veya uygulamanın devri durumunda halef',
        ],
        note: 'Kişisel bilgileri para karşılığında satmayız. Bazı gizlilik yasaları, para alışverişi olmasa bile belirli reklam açıklamalarını “paylaşım” olarak değerlendirebilir.',
      },
      {
        title: '10. Web Sitesi Verileri ve Çerezler',
        paragraphs: [
          'Blocks - Puzzle Escape web sitesini ziyaret ettiğinizde barındırma ve analitik altyapısı; IP adresi, tarayıcı ve cihaz türü, görüntülenen sayfalar, yönlendirme kaynağı, zaman damgaları ve hata bilgileri gibi standart teknik kayıtları alabilir. Site; güvenlik, temel işlevler, trafik ölçümü ve performans için çerez veya benzer teknolojiler kullanabilir.',
          'Çerezleri tarayıcı ayarlarınızdan sınırlandırabilirsiniz; ancak bu durumda bazı site işlevleri beklendiği gibi çalışmayabilir.',
        ],
      },
      {
        title: '11. Saklama ve Silme',
        bullets: [
          'Yerel oyun verileri, uygulama depolamasını temizleyene, ilerlemeyi sıfırlayana veya uygulamayı kaldırana kadar cihazınızda kalır.',
          'Destek yazışmaları yalnızca talebi çözmek, kayıt tutmak, kötüye kullanımı önlemek ve yasal yükümlülükleri yerine getirmek için makul ölçüde gerekli süre boyunca saklanır.',
          'Reklam, tanılama ve platform verileri ilgili sağlayıcı tarafından kendi saklama kurallarına göre tutulur.',
          'Doğrulanmış gizlilik veya silme talepleri makul olan en kısa sürede ve yasa ek süreye izin vermediği veya bunu gerektirmediği sürece normalde 30 gün içinde ele alınır.',
        ],
      },
      {
        title: '12. Güvenlik ve Uluslararası Aktarımlar',
        paragraphs: [
          'Bilgileri korumak için tasarlanmış makul idari ve teknik önlemler kullanırız. Hiçbir saklama veya iletim yöntemi tamamen güvenli olmadığından mutlak güvenlik garanti edilemez.',
          'Hizmet sağlayıcılar bilgileri bulunduğunuz ülke dışındaki ülkelerde işleyebilir. Gerektiğinde aktarımlar kabul edilen güvenceler, sözleşmesel korumalar veya diğer hukuka uygun aktarım mekanizmalarıyla desteklenir.',
        ],
      },
      {
        title: '13. Çocukların Gizliliği',
        paragraphs: [
          'Blocks - Puzzle Escape genel kitleye yönelik bir bulmaca oyunudur ve özellikle 13 yaşın altındaki çocuklara yönelik değildir. Uygulama, bir çocuğun hesap oluşturmasını veya ad ya da e-posta adresi vermesini gerektirmez.',
          'Bir ebeveyn veya vasiyseniz ve bir çocuğun bize kişisel bilgi sağladığını düşünüyorsanız uygun olduğu ölçüde inceleyip silebilmemiz için bizimle iletişime geçin. Yaş sınırları ülkeye göre değişebilir.',
        ],
      },
      {
        title: '14. Haklarınız ve Seçimleriniz',
        paragraphs: [
          'Yaşadığınız yere bağlı olarak kişisel bilgilere erişme, bunları düzeltme, silme, işlemeyi kısıtlama veya işleme itiraz etme, taşınabilir bir kopya alma ve önceki hukuka uygun işlemleri etkilemeden rızayı geri çekme haklarına sahip olabilirsiniz. Yerel veri koruma makamına şikâyet etme hakkınız da olabilir.',
        ],
        bullets: [
          'Cihaz ayarlarından ve uygulamada gösterilen izin formundan reklam ve gizlilik kontrollerini yönetin',
          'Depolamayı temizleyerek veya uygulamayı kaldırarak yerel oyun verilerini silin',
          'Doğrulanmış talep göndermek için veri silme sayfamızı kullanın veya bize e-posta gönderin',
          'Kaliforniya sakinleri, uygulanabilir olduğu ölçüde ayrımcı muamele görmeden öğrenme, düzeltme, silme veya satış/paylaşımdan çıkma haklarına da sahip olabilir',
        ],
      },
      {
        title: '15. Üçüncü Taraf Gizlilik Bilgileri',
        paragraphs: [
          'Üçüncü taraf hizmetleri kendi veri işleme uygulamalarını kontrol eder. Toplama, saklama, güvenlik ve gizlilik kontrolleri hakkında ayrıntılı bilgi için kendi politikalarını inceleyin.',
        ],
        links: [
          { label: 'Google Gizlilik Politikası', href: 'https://policies.google.com/privacy?hl=tr' },
          { label: 'Google’ın reklamlar için bilgi kullanımı', href: 'https://policies.google.com/technologies/ads?hl=tr' },
          { label: 'Apple Gizlilik Politikası', href: 'https://www.apple.com/tr/legal/privacy/' },
        ],
      },
      {
        title: '16. Bu Politikadaki Değişiklikler',
        paragraphs: [
          'Uygulamadaki, hizmet sağlayıcılardaki veya yasal gerekliliklerdeki değişiklikleri yansıtmak için bu politikayı güncelleyebiliriz. Güncellenmiş politikayı bu sayfada yayımlar ve yukarıdaki tarihi değiştiririz. Önemli değişiklikler uygun olduğunda uygulama içinde de bildirilebilir.',
        ],
      },
      {
        title: '17. İletişim ve Veri Talepleri',
        paragraphs: [
          'Gizlilik soruları, talepleri veya şikâyetleri için aşağıdaki e-posta adresinden Blocks - Puzzle Escape geliştiricisine ulaşın. Talebi tamamlamadan önce kimliği doğrulamak ve ilgili veriyi bulmak için sınırlı bilgi isteyebiliriz.',
        ],
      },
    ],
  },
};

const Section = ({ section }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#cfe1ff] p-6 shadow-sm">
    <h2 className="text-xl font-black mb-3 text-[#17345f]">{section.title}</h2>
    <div className="text-[#6b86af] leading-7 space-y-3">
      {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.bullets && (
        <ul className="list-disc pl-6 space-y-2">
          {section.bullets.map(item => <li key={item}>{item}</li>)}
        </ul>
      )}
      {section.note && <p className="rounded-2xl bg-[#f4f8ff] px-4 py-3 text-[#52739f]">{section.note}</p>}
      {section.links && (
        <ul className="space-y-2">
          {section.links.map(link => (
            <li key={link.href}>
              <a className="font-bold text-[#1f7cff] hover:text-[#17345f] transition-colors" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </section>
);

const BlocksPuzzleEscapePrivacyPage = () => {
  const { language } = useLanguage();
  const copy = language === 'tr' ? content.tr : content.en;
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#17345f]">
      <BlocksPuzzleEscapeNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0f5aa7] via-[#1f7cff] to-[#2f89ff] p-8 sm:p-10 shadow-[0_24px_60px_rgba(31,124,255,0.26)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5" aria-hidden="true">
                <span className="h-6 w-6 rounded-md bg-[#1f7cff] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#17c3b2] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#0ea394] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffb800] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#d9ecff]">BLOCKS - PUZZLE ESCAPE</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">{copy.title}</h1>
            <p className="mt-3 text-white/70">{copy.updated}</p>
          </div>

          <div className="space-y-5">
            {copy.sections.map(section => <Section key={section.title} section={section} />)}

            <section className="rounded-[1.5rem] bg-[#17345f] p-6 text-white shadow-sm">
              <h2 className="text-xl font-black mb-3">{isTR ? 'Bize Ulaşın' : 'Contact Us'}</h2>
              <div className="space-y-3 text-white/75 leading-7">
                <a className="block font-bold text-white hover:text-[#b8dcff] transition-colors" href={`mailto:${SUPPORT_EMAIL}`}>
                  {SUPPORT_EMAIL}
                </a>
                <Link to="/blocks-puzzle-escape/data-deletion" className="inline-flex font-bold text-[#8ec5ff] hover:text-white transition-colors">
                  {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlocksPuzzleEscapePrivacyPage;
