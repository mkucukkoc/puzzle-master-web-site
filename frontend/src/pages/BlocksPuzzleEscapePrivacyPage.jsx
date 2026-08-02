import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const SUPPORT_EMAIL = 'support@aveniaichat.com';

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: August 2, 2026',
    sections: [
      {
        title: '1. Overview and Scope',
        paragraphs: [
          'This Privacy Policy explains how data is collected, used, disclosed, stored, and protected in connection with the Blocks - Puzzle Escape mobile application and related web pages.',
          'Blocks - Puzzle Escape is designed to operate primarily offline for core gameplay. Most game progress, levels unlocked, stars, and preferences are stored locally on your mobile device.',
        ],
      },
      {
        title: '2. Data Collected Directly from You',
        paragraphs: [
          'In general, you do not need to create an account or provide personal details to play the core game.',
        ],
        bullets: [
          'Support requests (email address, subject, message content, optional screenshots)',
          'User feedback, ratings, and optional survey responses',
        ],
      },
      {
        title: '3. Data Processed Automatically',
        paragraphs: [
          'When the app connects to the internet, limited technical and usage information may be processed automatically by standard platform SDKs and services.',
        ],
        bullets: [
          'Device identifiers (advertising ID, IDFV on iOS, vendor/installation IDs)',
          'Device details (model, manufacturer, OS version, language, screen resolution, country)',
          'App performance data (launch time, crash logs, diagnostic traces)',
          'Ad interaction signals (ad views, clicks, rewarded video completion events)',
        ],
      },
      {
        title: '4. How We Use Data',
        paragraphs: [
          'We process data to deliver, operate, maintain, and improve Blocks - Puzzle Escape, specifically for the following purposes:',
        ],
        bullets: [
          'Delivering core gameplay, levels, daily challenges, and hint features',
          'Serving non-personalized or personalized advertising and managing rewarded video rewards',
          'Diagnosing crashes, fixing bugs, and optimizing app responsiveness',
          'Responding to support requests and user feedback',
          'Complying with applicable legal, tax, accounting, and store compliance obligations',
        ],
      },
      {
        title: '5. Advertising and Monetization',
        paragraphs: [
          'The app may feature banner ads, interstitial ads, and optional rewarded video ads.',
          'Ad networks may process device identifiers, advertising IDs, IP addresses, and performance data to serve, measure, frequency cap, and detect fraud for ad units.',
        ],
      },
      {
        title: '6. Disclosure of Data',
        paragraphs: [
          'We do not sell personal data. Data may be shared only with standard platform and cloud infrastructure providers (e.g. Google Play, Apple App Store, Firebase Analytics/Crashlytics, Google AdMob) or as required by applicable law.',
        ],
      },
      {
        title: '7. Analytics and Diagnostics',
        paragraphs: [
          'Limited technical data and crash traces may be processed to identify stability issues, resolve bugs, and monitor frame rates across different device screen sizes.',
        ],
      },
      {
        title: '8. In-App Purchases and Payment Data',
        paragraphs: [
          'Payments for optional hint packs, theme unlocks, or ad-removal options are handled directly by Google Play Store or Apple App Store. We do not store financial card numbers or payment credentials on our servers.',
        ],
      },
      {
        title: '9. Data Security',
        paragraphs: [
          'We implement reasonable technical and organizational safeguards to protect information against unauthorized access, loss, or alteration.',
        ],
      },
      {
        title: '10. Cookies and Web Technologies',
        paragraphs: [
          'Our promotional landing pages may use minimal technical session cookies to preserve language preferences.',
        ],
      },
      {
        title: '11. Data Retention and Deletion',
        bullets: [
          'Local game progress remains stored on your device until you clear app storage or uninstall the application.',
          'Support messages are retained only as long as necessary to address your request and maintain necessary legal/support records.',
          'Verified data deletion requests are processed within 30 days.',
        ],
      },
      {
        title: '12. Security and International Transfers',
        paragraphs: [
          'Information may be processed by service providers in countries outside your residence, subject to lawful transfer mechanisms and safeguards.',
        ],
      },
      {
        title: '13. Children’s Privacy',
        paragraphs: [
          'Blocks - Puzzle Escape is intended for a general audience and does not knowingly collect personal information from children under 13.',
        ],
      },
      {
        title: '14. Your Rights and Choices',
        bullets: [
          'Manage ad and privacy preferences via device settings',
          'Clear local app storage or uninstall the app to remove local game state',
          'Submit a verified deletion request by contacting support or visiting our Data Deletion page',
        ],
      },
      {
        title: '15. Third-Party Links & Information',
        links: [
          { label: 'Google Privacy Policy', href: 'https://policies.google.com/privacy' },
          { label: 'Google Ad Technology Details', href: 'https://policies.google.com/technologies/ads' },
          { label: 'Apple Privacy Policy', href: 'https://www.apple.com/legal/privacy/' },
        ],
      },
      {
        title: '16. Updates to This Policy',
        paragraphs: [
          'We may update this policy periodically. Revisions will be posted on this page with an updated effective date.',
        ],
      },
      {
        title: '17. Contact and Data Requests',
        paragraphs: [
          'For privacy questions, data requests, or support, email us at support@aveniaichat.com.',
        ],
      },
    ],
  },
  tr: {
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 2 Ağustos 2026',
    sections: [
      {
        title: '1. Genel Bakış ve Kapsam',
        paragraphs: [
          'Bu Gizlilik Politikası, Blocks - Puzzle Escape mobil uygulaması ve ilgili web sayfaları kapsamında verilerin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklar.',
          'Blocks - Puzzle Escape temel oyunu çevrimdışı oynanacak şekilde tasarlanmıştır. Oyun ilerlemesi, açılan seviyeler, yıldızlar ve tercihler yerel olarak cihazınızda saklanır.',
        ],
      },
      {
        title: '2. Doğrudan Sağladığınız Veriler',
        paragraphs: [
          'Genel olarak temel oyunu oynamak için bir hesap oluşturmanız gerekmez.',
        ],
        bullets: [
          'Destek talepleri (e-posta adresi, konu, mesaj içeriği, isteğe bağlı ekran görüntüleri)',
          'Geri bildirimler, derecelendirmeler ve anket yanıtları',
        ],
      },
      {
        title: '3. Otomatik İşlenen Veriler',
        paragraphs: [
          'Uygulama internete bağlandığında platform SDK’ları tarafından teknik veriler işlenebilir.',
        ],
        bullets: [
          'Cihaz tanımlayıcıları (reklam kimliği, IDFV, kurulum kimlikleri)',
          'Cihaz bilgileri (model, üretici, işletim sistemi sürümü, dil, ekran çözünürlüğü)',
          'Uygulama performans verileri (çökme raporları, tanılama verileri)',
          'Reklam etkileşim sinyalleri (reklam izleme, ödüllü video tamamlama)',
        ],
      },
      {
        title: '4. Verilerin Kullanım Amaçları',
        paragraphs: [
          'Veriler oyunu çalıştırmak, geliştirmek ve destek sunmak amacıyla işlenir:',
        ],
        bullets: [
          'Temel oyun deneyimini, seviyeleri ve ipucu sistemini sunmak',
          'Reklamları ve ödüllü videoları yönetmek',
          'Çökmeleri gidermek ve uygulama performansını artırmak',
          'Destek taleplerine yanıt vermek ve yasal zorunluluklara uymak',
        ],
      },
      {
        title: '5. Reklamlar ve Gelir Modeli',
        paragraphs: [
          'Uygulamada banner, geçiş reklamları ve ödüllü videolar sunulabilir.',
          'Reklam ağları ad birimlerini sunmak, ölçmek, sıklığı sınırlandırmak ve dolandırıcılığı önlemek için cihaz tanımlayıcılarını işleyebilir.',
        ],
      },
      {
        title: '6. Verilerin Açıklanması ve Paylaşımı',
        paragraphs: [
          'Kişisel veriler satılmaz. Veriler yalnızca standart platform sağlayıcıları (Google Play, Apple App Store, AdMob vb.) veya yasal zorunluluklar çerçevesinde işlenebilir.',
        ],
      },
      {
        title: '7. Analiz ve Tanılama',
        paragraphs: [
          'Kararlılık sorunlarını tespit etmek, hataları çözmek ve performans sağlamak amacıyla sınırlı teknik veriler işlenebilir.',
        ],
      },
      {
        title: '8. Uygulama İçi Satın Alımlar',
        paragraphs: [
          'İsteğe bağlı ipucu paketleri ve reklam kaldırma ödemeleri doğrudan Google Play Store veya Apple App Store tarafından işlenir.',
        ],
      },
      {
        title: '9. Veri Güvenliği',
        paragraphs: [
          'Bilgileri yetkisiz erişim, kayıp veya değiştirmeye karşı korumak için idari ve teknik önlemler kullanırız.',
        ],
      },
      {
        title: '10. Çerezler',
        paragraphs: [
          'Tanıtım sayfalarımız dil tercihlerini korumak için teknik oturum çerezleri kullanabilir.',
        ],
      },
      {
        title: '11. Saklama ve Silme',
        bullets: [
          'Yerel oyun verileri, uygulama depolamasını temizleyene veya uygulamayı kaldırana kadar cihazınızda kalır.',
          'Destek yazışmaları yalnızca talebi çözmek ve kayıt tutmak için gerekli süre boyunca saklanır.',
          'Doğrulanmış veri silme talepleri 30 gün içinde ele alınır.',
        ],
      },
      {
        title: '12. Güvenlik ve Uluslararası Aktarımlar',
        paragraphs: [
          'Hizmet sağlayıcılar bilgileri bulunduğunuz ülke dışındaki ülkelerde işleyebilir.',
        ],
      },
      {
        title: '13. Çocukların Gizliliği',
        paragraphs: [
          'Blocks - Puzzle Escape genel kitleye yönelik bir oyundur ve 13 yaşın altındaki çocuklardan bilerek kişisel bilgi toplamaz.',
        ],
      },
      {
        title: '14. Haklarınız ve Seçimleriniz',
        bullets: [
          'Cihaz ayarlarından reklam ve gizlilik kontrollerini yönetin',
          'Depolamayı temizleyerek yerel oyun verilerini silin',
          'Doğrulanmış veri silme talebi göndermek için bize e-posta atın',
        ],
      },
      {
        title: '15. Üçüncü Taraf Bağlantıları',
        links: [
          { label: 'Google Gizlilik Politikası', href: 'https://policies.google.com/privacy?hl=tr' },
          { label: 'Google Advertising', href: 'https://policies.google.com/technologies/ads?hl=tr' },
          { label: 'Apple Gizlilik Politikası', href: 'https://www.apple.com/tr/legal/privacy/' },
        ],
      },
      {
        title: '16. Bu Politikadaki Değişiklikler',
        paragraphs: [
          'Gerektiğinde bu politikayı güncelleyebiliriz. Güncel politikayı bu sayfada yayımlarız.',
        ],
      },
      {
        title: '17. İletişim ve Veri Talepleri',
        paragraphs: [
          'Gizlilik soruları ve talepleri için support@aveniaichat.com adresinden bizimle iletişime geçebilirsiniz.',
        ],
      },
    ],
  },
};

const BlocksPuzzleEscapePrivacyPage = () => {
  const { language } = useLanguage();
  const copy = language === 'tr' ? content.tr : content.en;
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={copy.title}
      gameName="Blocks - Puzzle Escape"
      lastUpdated={copy.updated}
      gameRoute="/blocks-puzzle-escape"
      activeTab="privacy"
    >
      {copy.sections.map((section, idx) => (
        <LegalSection key={section.title || idx} title={section.title}>
          {section.paragraphs?.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
          {section.bullets && (
            <ul className="list-disc list-inside space-y-2 mt-2">
              {section.bullets.map((item, bIdx) => (
                <li key={bIdx}>{item}</li>
              ))}
            </ul>
          )}
          {section.note && (
            <p className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-white/90 font-medium mt-2">
              {section.note}
            </p>
          )}
          {section.links && (
            <ul className="space-y-2 mt-2">
              {section.links.map((link, lIdx) => (
                <li key={lIdx}>
                  <a
                    className="font-bold text-[#0ea394] hover:text-white transition-colors underline"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </LegalSection>
      ))}

      <LegalSection title={isTR ? 'Bize Ulaşın' : 'Contact Us'}>
        <div className="space-y-3">
          <a className="block font-bold text-[#1f7cff] hover:text-white transition-colors" href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          <Link to="/blocks-puzzle-escape/data-deletion" className="inline-flex font-bold text-white/80 hover:text-white transition-colors underline">
            {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlocksPuzzleEscapePrivacyPage;
