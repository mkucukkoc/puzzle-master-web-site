import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import LegalPageLayout, { LegalSection } from '@/components/LegalPageLayout';

const AccountDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <LegalPageLayout
      title={isTR ? 'Hesap Silme Talebi' : 'Account Deletion Request'}
      gameName="Arrows Puzzle Master"
      lastUpdated={isTR ? 'Son güncelleme: 4 Temmuz 2026' : 'Last updated: July 4, 2026'}
      gameRoute="/arrows-puzzle-master"
      activeTab="data-deletion"
    >
      <LegalSection title={isTR ? 'Uygulama İçinden Silme' : 'Delete From the App'}>
        <ol className="list-decimal list-inside space-y-2">
          <li>{isTR ? 'Uygulamada Ayarlar ekranına gidin.' : 'Open Settings in the app.'}</li>
          <li>{isTR ? 'Hesap veya veri silme seçeneğini seçin.' : 'Choose the account or data deletion option.'}</li>
          <li>{isTR ? 'Talebinizi onaylayın.' : 'Confirm your request.'}</li>
        </ol>
        <p className="mt-3">
          {isTR
            ? 'Talebiniz doğrulandıktan sonra ilişkili veriler en geç 30 gün içinde silinir.'
            : 'After your request is verified, related data is removed within 30 days.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'E-posta ile Talep' : 'Request by Email'}>
        <p>
          {isTR
            ? 'Uygulamaya erişemiyorsanız support@aveniaichat.com adresine yazabilirsiniz. Hesabınızla ilişkili e-posta adresini ve talebinizi belirtin.'
            : 'If you cannot access the app, email support@aveniaichat.com. Include the email address associated with your account and your request.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Silinebilecek Veriler' : 'Data That May Be Deleted'}>
        <ul className="list-disc list-inside space-y-2">
          <li>{isTR ? 'Hesap verileri ve kullanıcı tanımlayıcıları' : 'Account data and user identifiers'}</li>
          <li>{isTR ? 'Bulutta tutuluyorsa oyun ilerlemesi ve seviye kayıtları' : 'Cloud-stored game progress and level records, if any'}</li>
          <li>{isTR ? 'Destek talebi kayıtları ve uygulama kullanımına ilişkin teknik kayıtlar' : 'Support request records and technical app usage logs'}</li>
        </ul>
        <p className="mt-3">
          {isTR
            ? 'Yasal yükümlülükler, ödeme uyuşmazlıkları veya güvenlik gerekçeleriyle bazı kayıtlar sınırlı süreyle saklanabilir.'
            : 'Some records may be retained for a limited time due to legal obligations, payment disputes, or security reasons.'}
        </p>
      </LegalSection>

      <LegalSection title={isTR ? 'Hesabı Silmeden Veri Silme' : 'Delete Data Without Deleting Account'}>
        <p>
          {isTR
            ? 'Sadece belirli verileri silmek istiyorsanız veri silme talebi sayfasını kullanabilirsiniz.'
            : 'If you only want to delete certain data, use the data deletion request page.'}
        </p>
        <div className="mt-3">
          <Link to="/data-deletion" className="text-[#0ea394] font-bold hover:text-white transition-colors underline">
            {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
          </Link>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
};

export default AccountDeletionPage;
