import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const SUPPORT_EMAIL = 'support@aveniaichat.com';

const content = {
  en: {
    title: 'Terms of Service',
    updated: 'Last updated: August 2, 2026',
    sections: [
      {
        title: '1. Agreement to Terms',
        paragraphs: [
          'By downloading, installing, accessing, or using Blocks - Puzzle Escape, you agree to be bound by these Terms of Service.',
        ],
      },
      {
        title: '2. Service Overview',
        paragraphs: [
          'Blocks - Puzzle Escape is a mobile logic puzzle game. The service includes offline stages, daily puzzle challenges, hint mechanics, and optional rewarded ad options.',
        ],
      },
      {
        title: '3. Acceptable Use',
        paragraphs: [
          'You agree not to cheat, modify app files, attempt reverse engineering, or disrupt ad/reward mechanisms.',
        ],
      },
      {
        title: '4. Limitation of Liability',
        paragraphs: [
          'The app is provided "as is" without warranties of any kind.',
        ],
      },
    ],
  },
  tr: {
    title: 'Kullanım Koşulları',
    updated: 'Son güncelleme: 2 Ağustos 2026',
    sections: [
      {
        title: '1. Koşulların Kabulü',
        paragraphs: [
          'Blocks - Puzzle Escape uygulamasını indirerek, kurarak veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz.',
        ],
      },
      {
        title: '2. Hizmetin Tanımı',
        paragraphs: [
          'Blocks - Puzzle Escape mobil zeka ve bulmaca oyunudur. Hizmet çevrimdışı seviyeleri, günlük bulmacaları, ipucu mekaniklerini ve isteğe bağlı ödüllü reklamları kapsar.',
        ],
      },
      {
        title: '3. Uygun Kullanım',
        paragraphs: [
          'Uygulamada hile yapmamayı, dosyaları değiştirmemeyi veya reklam/ödül mekanizmalarını kötüye kullanmamayı kabul edersiniz.',
        ],
      },
      {
        title: '4. Sorumluluk Sınırı',
        paragraphs: [
          'Uygulama herhangi bir garanti verilmeksizin "olduğu gibi" sunulmaktadır.',
        ],
      },
    ],
  },
};

const BlocksPuzzleEscapeTermsPage = () => {
  const { language } = useLanguage();
  const copy = language === 'tr' ? content.tr : content.en;
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={copy.title}
      gameName="Blocks - Puzzle Escape"
      lastUpdated={copy.updated}
      gameRoute="/blocks-puzzle-escape"
      activeTab="terms"
    >
      {copy.sections.map(section => (
        <LegalSection key={section.title} title={section.title}>
          {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </LegalSection>
      ))}

      <LegalSection title={isTR ? 'Bize Ulaşın' : 'Contact Us'}>
        <a className="font-bold text-[#1f7cff] hover:text-white transition-colors" href={`mailto:${SUPPORT_EMAIL}`}>
          {SUPPORT_EMAIL}
        </a>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlocksPuzzleEscapeTermsPage;
