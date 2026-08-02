import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const BlockBoomDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Block Boom! Veri Silme Talebi' : 'Block Boom! Data Deletion Request'}
      gameName="Block Boom!"
      lastUpdated={isTR ? 'Son güncelleme: 13 Temmuz 2026' : 'Last updated: July 13, 2026'}
      gameRoute="/block-boom"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? 'Veri Silme Talebi Gönderme' : 'Submitting Data Deletion Request'}>
        <p>
          {isTR
            ? 'Block Boom! verilerinizin silinmesi için support@aveniaichat.com adresine "Block Boom Data Deletion Request" başlığıyla e-posta gönderebilirsiniz.'
            : 'To request deletion of your Block Boom! data, email support@aveniaichat.com with the subject line "Block Boom Data Deletion Request".'}
        </p>
        <p className="mt-3">
          {isTR
            ? 'Doğrulanmış talepler 30 gün içinde işleme alınır.'
            : 'Verified requests are processed within 30 days.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}>
        <Link to="/block-boom/privacy" className="text-[#8b5cf6] font-bold hover:text-white transition-colors underline">
          {isTR ? 'Block Boom! Gizlilik Politikasını Görüntüle' : 'View Block Boom! Privacy Policy'}
        </Link>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default BlockBoomDataDeletionPage;
