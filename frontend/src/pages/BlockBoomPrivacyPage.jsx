import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const BlockBoomPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, en yüksek skor, seviye durumu ve tercih verileri',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, çökme verileri ve teşhis sinyalleri',
        'Reklam gösterimleri, ödüllü reklam tamamlama durumu ve reklam kimliği',
        'Destek için iletişime geçildiğinde e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, high score, level state, and preference data',
        'Device model, operating system, app version, crash data, and diagnostic signals',
        'Ad impressions, rewarded ad completion state, and advertising ID',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, skorları tutmak ve seviye geçişlerini sağlamak',
        'Reklamları, kombo ödüllerini ve uygulama içi özellikleri sunmak',
        'Hataları gidermek, performansı artırmak ve güvenliği sağlamak',
        'Destek bildirimlerine yanıt vermek',
      ]
    : [
        'Run the game, keep track of scores, and manage level progression',
        'Deliver ads, combo rewards, and in-app features',
        'Fix bugs, improve performance, and maintain security',
        'Respond to support inquiries',
      ];

  return (
    <LegalPageLayout
      title={isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
      gameName="Block Boom!"
      lastUpdated={isTR ? 'Son güncelleme: 13 Temmuz 2026' : 'Last updated: July 13, 2026'}
      gameRoute="/block-boom"
      activeTab="privacy"
    >
      <LegalSection title={isTR ? '1. Kapsam' : '1. Scope'}>
        <p>
          {isTR
            ? 'Bu Gizlilik Politikası, Block Boom! mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlendiğini, neden işlendiğini ve haklarınızı açıklar.'
            : 'This Privacy Policy explains what data is processed in connection with the Block Boom! mobile game and related web pages, why it is processed, and your rights.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '2. Toplanan Veriler' : '2. Data We Collect'}>
        <ul className="list-disc list-inside space-y-2">
          {collected.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? '3. Kullanım Amaçları' : '3. How We Use Data'}>
        <ul className="list-disc list-inside space-y-2">
          {purposes.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title={isTR ? '4. Üçüncü Taraf Hizmetler' : '4. Third-Party Services'}>
        <p>
          {isTR
            ? 'Uygulama; reklam sunumu, analiz ve çökme raporlaması için üçüncü taraf hizmetleri kullanabilir. Bu hizmetler kendi gizlilik politikalarına tabi sınırlı teknik verileri işleyebilir.'
            : 'The app may use third-party services for advertising, analytics, and crash reporting. These services may process limited technical data under their own privacy policies.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '5. Saklama ve Silme' : '5. Retention and Deletion'}>
        <p>
          {isTR
            ? 'Yerel veriler cihazınızda tutulabilir. Doğrulanmış veri silme talepleri 30 gün içinde işlenir.'
            : 'Local data may be kept on your device. Verified data deletion requests are processed within 30 days.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '6. İletişim' : '6. Contact'}>
        <p>
          {isTR
            ? 'Sorularınız için: support@aveniaichat.com'
            : 'For questions: support@aveniaichat.com'}
        </p>
        <div className="mt-3">
          <Link to="/block-boom/data-deletion" className="text-[#8b5cf6] font-bold hover:text-white transition-colors underline">
            {isTR ? 'Block Boom! Veri Silme Talebi' : 'Block Boom! Data Deletion Request'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlockBoomPrivacyPage;
