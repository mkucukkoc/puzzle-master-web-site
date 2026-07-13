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

const DataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1f3d3a]">
      <BrandNav />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#0ea394]">
              {isTR ? 'VERİ SİLME' : 'DATA DELETION'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
            </h1>
            <p className="mt-3 text-[#8a9d9a]">
              {isTR
                ? 'Arrows Puzzle Master uygulamasıyla ilişkili verilerinizin silinmesini talep etmek için aşağıdaki adımları izleyebilirsiniz.'
                : 'Follow the steps below to request deletion of data associated with the Arrows Puzzle Master app.'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? 'Uygulama ve Geliştirici' : 'App and Developer'}>
              <p>
                {isTR
                  ? 'Bu sayfa Arrows Puzzle Master mobil oyunu için veri silme talebi sürecini açıklar. Talebiniz Arrows Puzzle Master destek ekibi tarafından incelenir.'
                  : 'This page explains the data deletion request process for the Arrows Puzzle Master mobile game. Requests are reviewed by the Arrows Puzzle Master support team.'}
              </p>
            </Section>

            <Section title={isTR ? 'Veri Silme Talebi Nasıl Gönderilir?' : 'How to Request Data Deletion'}>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  {isTR
                    ? 'support@aveniaichat.com adresine e-posta gönderin.'
                    : 'Send an email to support@aveniaichat.com.'}
                </li>
                <li>
                  {isTR
                    ? 'Konu satırına "Arrows Puzzle Master Data Deletion Request" yazın.'
                    : 'Use the subject line "Arrows Puzzle Master Data Deletion Request".'}
                </li>
                <li>
                  {isTR
                    ? 'Talebinizde kullandığınız e-posta adresini, cihaz/platform bilgisini ve silinmesini istediğiniz veri türlerini belirtin.'
                    : 'Include your email address, device/platform information, and the data types you want deleted.'}
                </li>
                <li>
                  {isTR
                    ? 'Talebi doğrulamak için gerekirse sizden ek bilgi isteyebiliriz.'
                    : 'We may request additional information if needed to verify the request.'}
                </li>
              </ol>
              <p>
                {isTR
                  ? 'Doğrulanmış talepler genellikle 30 gün içinde işlenir.'
                  : 'Verified requests are usually processed within 30 days.'}
              </p>
            </Section>

            <Section title={isTR ? 'Silinebilecek Veri Türleri' : 'Data Types That Can Be Deleted'}>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Bulutta tutuluyorsa oyun ilerlemesi, seviye durumu ve uygulama tercihleri' : 'Cloud-stored game progress, level state, and app preferences, if any'}</li>
                <li>{isTR ? 'Destek talepleriyle ilişkili e-posta adresi ve mesaj içerikleri' : 'Email address and message content related to support requests'}</li>
                <li>{isTR ? 'Hesabınız veya cihazınızla ilişkilendirilebilen teknik destek kayıtları' : 'Technical support records that can be associated with your account or device'}</li>
                <li>{isTR ? 'Varsa uygulama içi profil veya kullanıcı tanımlayıcıları' : 'In-app profile data or user identifiers, if any'}</li>
              </ul>
            </Section>

            <Section title={isTR ? 'Saklanabilecek Veriler ve Süreler' : 'Data That May Be Retained and Retention Periods'}>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {isTR
                    ? 'Yasal yükümlülük, güvenlik, dolandırıcılık önleme, ödeme uyuşmazlığı veya muhasebe gereklilikleri için bazı kayıtlar gerekli süre boyunca saklanabilir.'
                    : 'Some records may be retained as required for legal obligations, security, fraud prevention, payment disputes, or accounting requirements.'}
                </li>
                <li>
                  {isTR
                    ? 'Uygulama mağazası ödeme, abonelik veya satın alma kayıtları Google Play ya da ilgili ödeme sağlayıcısı tarafından ayrıca yönetilebilir.'
                    : 'App store payment, subscription, or purchase records may also be managed separately by Google Play or the relevant payment provider.'}
                </li>
                <li>
                  {isTR
                    ? 'Anonimleştirilmiş ve kullanıcıyla ilişkilendirilemeyen istatistikler silme talebinden sonra saklanabilir.'
                    : 'Aggregated or anonymized statistics that cannot identify a user may be retained after a deletion request.'}
                </li>
                <li>
                  {isTR
                    ? 'Yedek sistemlerde kalan kopyalar en geç 90 gün içinde rutin döngülerle silinir.'
                    : 'Residual backup copies are removed through routine cycles within 90 days.'}
                </li>
              </ul>
            </Section>

            <Section title={isTR ? 'Cihazdaki Yerel Veriler' : 'Local Data on Your Device'}>
              <p>
                {isTR
                  ? 'Arrows Puzzle Master bazı oyun ilerlemesi veya tercihleri cihazınızda yerel olarak saklayabilir. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek bu yerel verileri silebilir.'
                  : 'Arrows Puzzle Master may store some game progress or preferences locally on your device. Uninstalling the app or clearing app data from device settings may remove this local data.'}
              </p>
            </Section>

            <Section title={isTR ? 'Hesap Silme' : 'Account Deletion'}>
              <p>
                {isTR
                  ? 'Hesap tabanlı özellikler kullanıyorsanız hesabınızın ve ilişkili verilerin tamamen silinmesini de talep edebilirsiniz.'
                  : 'If you use account-based features, you may also request full deletion of your account and related data.'}
              </p>
              <Link to="/account-deletion" className="text-[#0ea394] font-bold hover:text-[#1f3d3a] transition-colors">
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
