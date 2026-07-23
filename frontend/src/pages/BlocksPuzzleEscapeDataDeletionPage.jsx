import React from 'react';
import { Link } from 'react-router-dom';
import BlocksPuzzleEscapeNav from '@/components/BlocksPuzzleEscapeNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#cfe1ff] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#17345f]">{title}</h3>
    <div className="text-[#6b86af] leading-7 space-y-3">{children}</div>
  </section>
);

const BlocksPuzzleEscapeDataDeletionPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#17345f]">
      <BlocksPuzzleEscapeNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#1f7cff]">
              {isTR ? 'VERİ SİLME' : 'DATA DELETION'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Blocks - Puzzle Escape Veri Silme Talebi' : 'Blocks - Puzzle Escape Data Deletion Request'}
            </h1>
            <p className="mt-3 text-[#6b86af]">
              {isTR
                ? 'Blocks - Puzzle Escape hesabınızla veya oyun kullanımınızla ilişkili verilerin silinmesini talep etmek için aşağıdaki adımları izleyebilirsiniz.'
                : 'Use the steps below to request deletion of data associated with your Blocks - Puzzle Escape account or game usage.'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? 'Uygulama ve Geliştirici' : 'App and Developer'}>
              <p>
                {isTR
                  ? 'Bu sayfa yalnızca Blocks - Puzzle Escape mobil oyunu için geçerlidir. Talebiniz Blocks - Puzzle Escape destek ekibi tarafından incelenir.'
                  : 'This page applies only to the Blocks - Puzzle Escape mobile game. Requests are reviewed by the Blocks - Puzzle Escape support team.'}
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
                    ? 'Konu satırına "Blocks - Puzzle Escape Data Deletion Request" yazın.'
                    : 'Use the subject line "Blocks - Puzzle Escape Data Deletion Request".'}
                </li>
                <li>
                  {isTR
                    ? 'Uygulamada kullandığınız e-posta adresini, cihaz/platform bilgisini ve silinmesini istediğiniz veri türlerini belirtin.'
                    : 'Include the email address you used in the app, your device/platform, and the data types you want deleted.'}
                </li>
                <li>
                  {isTR
                    ? 'Talebi doğrulamak için gerekirse sizden ek bilgi isteyebiliriz.'
                    : 'We may ask for additional information if needed to verify the request.'}
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
                <li>
                  {isTR
                    ? 'Bulutta tutuluyorsa oyun ilerlemesi, seviye durumu ve uygulama tercihleri'
                    : 'Cloud-stored game progress, level state, and app preferences, if any'}
                </li>
                <li>
                  {isTR
                    ? 'Destek talepleriyle ilişkili e-posta adresi ve mesaj içerikleri'
                    : 'Email address and message content related to support requests'}
                </li>
                <li>
                  {isTR
                    ? 'Hesabınız veya cihazınızla ilişkilendirilebilen teknik kayıtlar ve bildirim belirteçleri'
                    : 'Technical records and notification tokens that can be associated with your account or device'}
                </li>
                <li>
                  {isTR
                    ? 'Varsa uygulama içi profil veya kullanıcı tanımlayıcıları'
                    : 'In-app profile data or user identifiers, if any'}
                </li>
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
                    ? 'Google Play veya ilgili ödeme sağlayıcısı ödeme, abonelik veya satın alma kayıtlarını ayrıca tutabilir.'
                    : 'Google Play or the relevant payment provider may retain payment, subscription, or purchase records separately.'}
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
                  ? 'Blocks - Puzzle Escape bazı oyun ilerlemesi veya tercihleri cihazınızda yerel olarak saklayabilir. Uygulamayı kaldırmak veya cihaz ayarlarından uygulama verilerini temizlemek bu yerel verileri silebilir.'
                  : 'Blocks - Puzzle Escape may store some game progress or preferences locally on your device. Uninstalling the app or clearing app data from device settings may remove this local data.'}
              </p>
            </Section>

            <Section title={isTR ? 'İletişim' : 'Contact'}>
              <p>
                {isTR
                  ? 'Veri silme talebiyle ilgili sorularınız için support@aveniaichat.com adresine yazabilirsiniz.'
                  : 'For questions about data deletion requests, contact support@aveniaichat.com.'}
              </p>
              <Link to="/blocks-puzzle-escape/privacy" className="text-[#1f7cff] font-bold hover:text-[#17345f] transition-colors">
                {isTR ? 'Blocks - Puzzle Escape Gizlilik Politikası' : 'Blocks - Puzzle Escape Privacy Policy'}
              </Link>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlocksPuzzleEscapeDataDeletionPage;
