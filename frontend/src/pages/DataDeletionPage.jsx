import React from 'react';
import { Link } from 'react-router-dom';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#dfe3f3] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#273052]">{title}</h3>
    <div className="text-[#68708a] leading-7 space-y-3">{children}</div>
  </section>
);

const DataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#273052]">
      <BrandNav />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#e5484d]">
              {isTR ? 'VERİ SİLME' : 'DATA DELETION'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
            </h1>
            <p className="mt-3 text-[#68708a]">
              {isTR
                ? 'Hesabınızı silmeden Arrows Puzzle Master verilerinizin silinmesini talep edebilirsiniz.'
                : 'You can request deletion of Arrows Puzzle Master data without deleting your account.'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? 'Uygulama İçinden' : 'From the App'}>
              <p>
                {isTR
                  ? 'Uygulama içindeki ayarlardan yerel ilerleme, ses/titreşim tercihleri veya desteklenen kayıtları sıfırlayabilirsiniz. Uygulamayı silmek cihazdaki yerel verileri kaldırabilir.'
                  : 'From in-app settings, you may reset local progress, sound/vibration preferences, or supported records. Deleting the app may remove local data on your device.'}
              </p>
            </Section>

            <Section title={isTR ? 'E-posta ile Talep' : 'Request by Email'}>
              <p>
                {isTR
                  ? 'Uygulama üzerinden silemediğiniz veriler için support@aveniaichat.com adresine yazabilirsiniz. Lütfen hesap e-postanızı ve silmek istediğiniz veri türlerini belirtin.'
                  : 'For data you cannot delete from the app, email support@aveniaichat.com. Include your account email and the data types you want deleted.'}
              </p>
            </Section>

            <Section title={isTR ? 'Silinebilecek Veri Türleri' : 'Data Types That May Be Deleted'}>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Bulutta tutuluyorsa oyun ilerlemesi, seviye ve tercih kayıtları' : 'Cloud-stored progress, level, and preference records, if any'}</li>
                <li>{isTR ? 'Destek talepleriyle ilişkili mesajlar' : 'Messages related to support requests'}</li>
                <li>{isTR ? 'Uygulama kullanımına ilişkin teknik kayıtlar' : 'Technical logs related to app usage'}</li>
              </ul>
              <p>
                {isTR
                  ? 'Ödeme, abonelik ve mağaza işlem kayıtları ilgili uygulama mağazası tarafından ayrıca yönetilebilir.'
                  : 'Payment, subscription, and store transaction records may also be managed by the relevant app store.'}
              </p>
            </Section>

            <Section title={isTR ? 'Hesap Silme' : 'Account Deletion'}>
              <p>
                {isTR
                  ? 'Hesabınızı tamamen silmek isterseniz hesap silme sayfasını ziyaret edin.'
                  : 'If you want to delete your account entirely, visit the account deletion page.'}
              </p>
              <Link to="/account-deletion" className="text-[#e5484d] font-bold hover:text-[#273052] transition-colors">
                {isTR ? 'Hesap Silme Talebi' : 'Account Deletion Request'}
              </Link>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DataDeletionPage;
