import React from 'react';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#dfe3f3] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#273052]">{title}</h3>
    <div className="text-[#68708a] leading-7 space-y-3">{children}</div>
  </section>
);

const PrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, can/hint kullanımı ve uygulama tercihleri',
        'Cihaz, işletim sistemi, uygulama sürümü, hata kayıtları ve performans verileri',
        'Reklam gösterimi, ödüllü reklam etkileşimi ve mağaza abonelik/ödeme durumu',
        'Destek için bizimle iletişime geçerseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, level state, hearts/hints usage, and app preferences',
        'Device, operating system, app version, crash logs, and performance data',
        'Ad delivery, rewarded ad interactions, and store subscription/payment status',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, seviyeleri ve ilerlemeyi kaydetmek',
        'Ödüllü reklam, abonelik ve premium özelliklerini yönetmek',
        'Hataları tespit etmek, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek taleplerine yanıt vermek ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Operate the game and save levels and progress',
        'Manage rewarded ads, subscriptions, and premium features',
        'Detect errors, improve performance, and prevent misuse',
        'Respond to support requests and comply with legal obligations',
      ];

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#273052]">
      <BrandNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#e5484d]">
              {isTR ? 'ARROWS PUZZLE MASTER' : 'ARROWS PUZZLE MASTER'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-[#68708a]">
              {isTR ? 'Son güncelleme: 4 Temmuz 2026' : 'Last updated: July 4, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Arrows Puzzle Master mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlendiğini, neden işlendiğini ve haklarınızı açıklar.'
                  : 'This Privacy Policy explains what data is processed in connection with the Arrows Puzzle Master mobile game and related web pages, why it is processed, and your rights.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Toplanan Veriler' : '2. Data We Collect'}>
              <ul className="list-disc list-inside space-y-2">
                {collected.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {isTR
                  ? 'Arrows Puzzle Master, oynanış için kullanıcıdan fotoğraf veya dosya yüklemesini istemez.'
                  : 'Arrows Puzzle Master does not ask users to upload photos or files for gameplay.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Verileri Kullanma Amaçlarımız' : '3. How We Use Data'}>
              <ul className="list-disc list-inside space-y-2">
                {purposes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. Üçüncü Taraf Hizmetler' : '4. Third-Party Services'}>
              <p>
                {isTR
                  ? 'Uygulama, reklam gösterimi, uygulama mağazası satın alma/abonelik doğrulaması, hata raporlama veya analitik için üçüncü taraf hizmetleri kullanabilir. Bu hizmetler kendi gizlilik politikalarına göre sınırlı teknik verileri işleyebilir.'
                  : 'The app may use third-party services for advertising, app store purchase/subscription validation, crash reporting, or analytics. These services may process limited technical data under their own privacy policies.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Ödüllü Reklamlar' : '5. Ads and Rewarded Ads'}>
              <p>
                {isTR
                  ? 'Oyunda ipucu veya can gibi ödüller için reklam izleme seçeneği sunulabilir. Reklam ağları, reklam sunumu ve ölçümü için cihaz tanımlayıcıları veya benzer teknik verileri işleyebilir.'
                  : 'The game may offer optional rewarded ads for hints, hearts, or similar rewards. Ad networks may process device identifiers or similar technical data for ad delivery and measurement.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama Süresi' : '6. Retention'}>
              <p>
                {isTR
                  ? 'Yerel oyun ilerlemesi cihazınızda saklanabilir. Sunucu tarafında işlenen destek, reklam, satın alma veya teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Hesap veya veri silme talebiniz doğrulandıktan sonra ilgili veriler en geç 30 gün içinde silinir; yasal zorunluluklar bunun istisnasıdır.'
                  : 'Local game progress may be stored on your device. Server-side support, ad, purchase, or technical records are kept only as long as needed. After a verified account or data deletion request, relevant data is removed within 30 days unless legal obligations require otherwise.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Oyun genel kitleye yöneliktir ancak 13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz. Böyle bir veri işlendiğini öğrenirsek silmek için makul adımları atarız.'
                  : 'The game is intended for a general audience but does not knowingly seek to collect personal data from children under 13. If we learn such data has been processed, we will take reasonable steps to delete it.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Haklarınız' : '8. Your Rights'}>
              <p>
                {isTR
                  ? 'Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işlemeye itiraz etme haklarınız olabilir. Talepleriniz için destek adresinden bize ulaşabilirsiniz.'
                  : 'Depending on applicable law, you may have rights to access, correct, delete, or object to processing of your data. You can contact us through the support address below.'}
              </p>
            </Section>

            <Section title={isTR ? '9. İletişim' : '9. Contact'}>
              <p>
                {isTR
                  ? 'Gizlilik ile ilgili sorular için: support@aveniaichat.com'
                  : 'Questions about privacy: support@aveniaichat.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;
