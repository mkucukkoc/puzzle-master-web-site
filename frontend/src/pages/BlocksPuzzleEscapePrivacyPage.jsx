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
        title: '6. Contact & Data Requests',
        paragraphs: [
          'For privacy questions or data deletion requests, contact us via email.',
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
          'Blocks - Puzzle Escape temel oyunu çevrimdışı oynanacak şekilde tasarlanmıştır. Oyun ilerlemesi, açılan seviyeler ve tercihler yerel olarak cihazınızda saklanır.',
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
        ],
      },
      {
        title: '6. İletişim ve Veri Talepleri',
        paragraphs: [
          'Gizlilik soruları ve veri silme talepleri için bizimle e-posta yoluyla iletişime geçebilirsiniz.',
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
      {copy.sections.map(section => (
        <LegalSection key={section.title} title={section.title}>
          {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && (
            <ul className="list-disc list-inside space-y-2 mt-2">
              {section.bullets.map(item => <li key={item}>{item}</li>)}
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
