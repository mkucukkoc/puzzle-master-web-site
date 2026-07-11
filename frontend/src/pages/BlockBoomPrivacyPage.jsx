import React from 'react';
import BlockBoomNav from '@/components/BlockBoomNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d8d2f4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#251b52]">{title}</h3>
    <div className="text-[#7b6cb2] leading-7 space-y-3">{children}</div>
  </section>
);

const BlockBoomPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, can/ipucu kullanımı ve uygulama tercihleri',
        'Cihaz bilgileri, işletim sistemi, uygulama sürümü, çökme kayıtları ve performans verileri',
        'Reklam gösterimi, ödüllü reklam etkileşimleri, reklam tanımlayıcıları ve ölçüm verileri',
        'Satın alma veya abonelik durumu',
        'Destek için bizimle iletişime geçerseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, level state, hearts/hints usage, and app preferences',
        'Device information, operating system, app version, crash logs, and performance data',
        'Ad delivery, rewarded ad interactions, ad identifiers, and measurement data',
        'Purchase or subscription status',
        'Email address and message content if you contact support',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, ilerlemeyi kaydetmek ve seviye verilerini senkronize etmek',
        'Ödüllü reklamları, premium özellikleri ve mağaza doğrulamalarını yönetmek',
        'Hataları tespit etmek, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek taleplerine ve veri silme isteklerine yanıt vermek',
      ]
    : [
        'Run the game, save progress, and sync level data',
        'Manage rewarded ads, premium features, and store validation',
        'Detect errors, improve performance, and prevent abuse',
        'Respond to support and data deletion requests',
      ];

  return (
    <div className="min-h-screen bg-[#fbfaff] text-[#251b52]">
      <BlockBoomNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#6a45d8]">
              BLOCK BOOM!
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-[#7b6cb2]">
              {isTR ? 'Son güncelleme: 11 Temmuz 2026' : 'Last updated: July 11, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Block Boom! mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlendiğini, neden işlendiğini ve kullanıcı haklarını açıklar.'
                  : 'This Privacy Policy explains what data is processed in connection with the Block Boom! mobile game and related web pages, why it is processed, and the rights available to users.'}
              </p>
            </Section>

            <Section title={isTR ? '2. İşleyebileceğimiz Veriler' : '2. Data We May Process'}>
              <ul className="list-disc list-inside space-y-2">
                {collected.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {isTR
                  ? 'Block Boom! oynanış için fotoğraf, video, kişi listesi veya hassas konum verisi istemez.'
                  : 'Block Boom! does not require photos, videos, contacts, or precise location for gameplay.'}
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
                  ? 'Uygulama, reklam sunumu, ödüllü reklamlar, uygulama mağazası doğrulamaları, analitik, hata raporlama veya benzer hizmetler için üçüncü taraf sağlayıcılar kullanabilir. Bu sağlayıcılar kendi politikalarına göre sınırlı teknik verileri işleyebilir.'
                  : 'The app may use third-party providers for ad delivery, rewarded ads, app store validation, analytics, crash reporting, or similar services. These providers may process limited technical data under their own policies.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Reklam Kimliği' : '5. Ads and Advertising ID'}>
              <p>
                {isTR
                  ? 'Block Boom!, ipucu, can veya benzer ödüller için reklam izleme seçeneği sunabilir. Reklam ortakları, reklam sunumu ve ölçüm için cihaz tanımlayıcılarını veya benzer teknik verileri kullanabilir.'
                  : 'Block Boom! may offer rewarded ads for hints, hearts, or similar rewards. Advertising partners may use device identifiers or similar technical data for ad delivery and measurement.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama Süresi' : '6. Retention'}>
              <p>
                {isTR
                  ? 'Yerel ilerleme cihazınızda saklanabilir. Destek, reklam, satın alma veya teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Doğrulanmış veri silme talepleri genellikle 30 gün içinde işlenir.'
                  : 'Local progress may be stored on your device. Support, ad, purchase, or technical records are kept only as long as needed. Verified data deletion requests are usually processed within 30 days.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Block Boom! genel kitleye yöneliktir ve 13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz.'
                  : 'Block Boom! is intended for a general audience and does not knowingly seek to collect personal data from children under 13.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Haklarınız' : '8. Your Rights'}>
              <p>
                {isTR
                  ? 'Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işlemeye itiraz etme haklarınız olabilir.'
                  : 'Depending on applicable law, you may have rights to access, correct, delete, or object to the processing of your data.'}
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

export default BlockBoomPrivacyPage;
