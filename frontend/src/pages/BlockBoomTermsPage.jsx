import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const BlockBoomTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Kullanım Şartları' : 'Terms of Use'}
      gameName="Block Boom!"
      lastUpdated={isTR ? 'Son güncelleme: 13 Temmuz 2026' : 'Last updated: July 13, 2026'}
      gameRoute="/block-boom"
      activeTab="terms"
    >
      <LegalSection title={isTR ? '1. Kabul' : '1. Acceptance'}>
        <p>
          {isTR
            ? 'Block Boom! uygulamasını kullanarak bu şartları kabul etmiş olursunuz. Şartları kabul etmiyorsanız lütfen oyunu kullanmayın.'
            : 'By using Block Boom!, you agree to these terms. If you do not agree, please do not use the game.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '2. Hizmetin Kapsamı' : '2. Service Scope'}>
        <p>
          {isTR
            ? 'Block Boom!, blokları ızgaraya yerleştirip çizgi ve kombo yapmaya dayalı bir bulmaca oyunudur. Seviyeler, reklamlar veya uygulama içi özellikler sunulabilir.'
            : 'Block Boom! is a puzzle game about placing blocks on a grid to complete lines and combos. Levels, ads, or in-app features may be offered.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '3. Kurallar ve Sorumluluk' : '3. Rules and Responsibility'}>
        <p>
          {isTR
            ? 'Hile, otomasyon veya sistemi kötüye kullanma girişimleri yasaktır. Oyun “olduğu gibi” sunulur.'
            : 'Cheating, automation, or attempts to abuse the system are prohibited. The game is provided "as is".'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? '4. İletişim' : '4. Contact'}>
        <p>
          {isTR
            ? 'Sorularınız için: support@aveniaichat.com'
            : 'For questions: support@aveniaichat.com'}
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlockBoomTermsPage;
