import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const BlocksPuzzleEscapeDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Blocks - Puzzle Escape Veri Silme Talebi' : 'Blocks - Puzzle Escape Data Deletion Request'}
      gameName="Blocks - Puzzle Escape"
      lastUpdated={isTR ? 'Son güncelleme: 2 Ağustos 2026' : 'Last updated: August 2, 2026'}
      gameRoute="/blocks-puzzle-escape"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? 'Veri Silme Talebi Gönderme' : 'Submitting Data Deletion Request'}>
        <p>
          {isTR
            ? 'Blocks - Puzzle Escape verilerinizin silinmesi için support@aveniaichat.com adresine "Blocks Puzzle Escape Data Deletion Request" başlığıyla e-posta gönderebilirsiniz.'
            : 'To request deletion of your Blocks - Puzzle Escape data, email support@aveniaichat.com with the subject line "Blocks Puzzle Escape Data Deletion Request".'}
        </p>
        <p className="mt-3">
          {isTR
            ? 'Doğrulanmış talepler 30 gün içinde işleme alınır.'
            : 'Verified requests are processed within 30 days.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}>
        <Link to="/blocks-puzzle-escape/privacy" className="text-[#1f7cff] font-bold hover:text-white transition-colors underline">
          {isTR ? 'Blocks - Puzzle Escape Gizlilik Politikasını Görüntüle' : 'View Blocks - Puzzle Escape Privacy Policy'}
        </Link>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlocksPuzzleEscapeDataDeletionPage;
