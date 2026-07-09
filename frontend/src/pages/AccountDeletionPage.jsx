import React from 'react';
import { Link } from 'react-router-dom';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d6e8e4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#1f3d3a]">{title}</h3>
    <div className="text-[#8a9d9a] leading-7 space-y-3">{children}</div>
  </section>
);

const AccountDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1f3d3a]">
      <BrandNav />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#0ea394]">
              {isTR ? 'VERİ KONTROLÜ' : 'DATA CONTROL'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Hesap Silme Talebi' : 'Account Deletion Request'}
            </h1>
            <p className="mt-3 text-[#8a9d9a]">
              {isTR
                ? 'Arrows Puzzle Master hesabınızı ve ilişkili verileri silme süreci.'
                : 'How to delete your Arrows Puzzle Master account and related data.'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? 'Uygulama İçinden Silme' : 'Delete From the App'}>
              <ol className="list-decimal list-inside space-y-2">
                <li>{isTR ? 'Uygulamada Ayarlar ekranına gidin.' : 'Open Settings in the app.'}</li>
                <li>{isTR ? 'Hesap veya veri silme seçeneğini seçin.' : 'Choose the account or data deletion option.'}</li>
                <li>{isTR ? 'Talebinizi onaylayın.' : 'Confirm your request.'}</li>
              </ol>
              <p>
                {isTR
                  ? 'Talebiniz doğrulandıktan sonra ilişkili veriler en geç 30 gün içinde silinir.'
                  : 'After your request is verified, related data is removed within 30 days.'}
              </p>
            </Section>

            <Section title={isTR ? 'E-posta ile Talep' : 'Request by Email'}>
              <p>
                {isTR
                  ? 'Uygulamaya erişemiyorsanız support@aveniaichat.com adresine yazabilirsiniz. Hesabınızla ilişkili e-posta adresini ve talebinizi belirtin.'
                  : 'If you cannot access the app, email support@aveniaichat.com. Include the email address associated with your account and your request.'}
              </p>
            </Section>

            <Section title={isTR ? 'Silinebilecek Veriler' : 'Data That May Be Deleted'}>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Hesap verileri ve kullanıcı tanımlayıcıları' : 'Account data and user identifiers'}</li>
                <li>{isTR ? 'Bulutta tutuluyorsa oyun ilerlemesi ve seviye kayıtları' : 'Cloud-stored game progress and level records, if any'}</li>
                <li>{isTR ? 'Destek talebi kayıtları ve uygulama kullanımına ilişkin teknik kayıtlar' : 'Support request records and technical app usage logs'}</li>
              </ul>
              <p>
                {isTR
                  ? 'Yasal yükümlülükler, ödeme uyuşmazlıkları veya güvenlik gerekçeleriyle bazı kayıtlar sınırlı süreyle saklanabilir.'
                  : 'Some records may be retained for a limited time due to legal obligations, payment disputes, or security reasons.'}
              </p>
            </Section>

            <Section title={isTR ? 'Hesabı Silmeden Veri Silme' : 'Delete Data Without Deleting Account'}>
              <p>
                {isTR
                  ? 'Sadece belirli verileri silmek istiyorsanız veri silme talebi sayfasını kullanabilirsiniz.'
                  : 'If you only want to delete certain data, use the data deletion request page.'}
              </p>
              <Link to="/data-deletion" className="text-[#0ea394] font-bold hover:text-[#1f3d3a] transition-colors">
                {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
              </Link>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountDeletionPage;
