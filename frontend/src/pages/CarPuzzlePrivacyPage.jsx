import React from 'react';
import CarPuzzleNav from '@/components/CarPuzzleNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#cfe0ec] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#11304e]">{title}</h3>
    <div className="text-[#5f7692] leading-7 space-y-3">{children}</div>
  </section>
);

const CarPuzzlePrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, ipucu kullanımı ve uygulama tercihleri',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, hata kayıtları ve teşhis verileri',
        'Reklam gösterimi, ödüllü reklam etkileşimleri ve reklam kimliği gibi teknik tanımlayıcılar',
        'Destek için bizimle iletişime geçerseniz e-posta adresi ve mesaj içeriği',
        'Varsa satın alma, abonelik veya mağaza doğrulama durumu',
      ]
    : [
        'Game progress, level state, hint usage, and app preferences',
        'Device model, operating system, app version, crash logs, and diagnostic data',
        'Ad delivery, rewarded-ad interactions, and technical identifiers such as the advertising ID',
        'Email address and message content if you contact support',
        'Purchase, subscription, or store verification status if applicable',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, ilerlemeyi kaydetmek ve aynı cihazda deneyimi sürdürmek',
        'Reklam, ödül ve premium özellikleri yönetmek',
        'Hataları tespit etmek, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek taleplerine yanıt vermek ve yasal yükümlülüklere uymak',
      ]
    : [
        'Run the game, save progress, and preserve the experience on the same device',
        'Manage ads, rewards, and premium features',
        'Detect issues, improve performance, and prevent misuse',
        'Respond to support requests and meet legal obligations',
      ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#11304e]">
      <CarPuzzleNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#0f5cab]">CARS -PUZZLE ESCAPE</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-[#5f7692]">
              {isTR ? 'Son güncelleme: 13 Temmuz 2026' : 'Last updated: July 13, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Cars -Puzzle Escape mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlenebileceğini, neden işlendiğini ve kullanıcı haklarını açıklar.'
                  : 'This Privacy Policy explains what data may be processed in connection with the Cars -Puzzle Escape mobile game and related web pages, why it is processed, and the rights available to users.'}
              </p>
            </Section>

            <Section title={isTR ? '2. İşleyebileceğimiz Veriler' : '2. Data We May Process'}>
              <ul className="list-disc list-inside space-y-2">
                {collected.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
                  ? 'Uygulama; Google Play hizmetleri, Google Mobile Ads, Firebase, satın alma doğrulama, hata raporlama ve analiz gibi üçüncü taraf SDK veya hizmetleri kullanabilir. Bu hizmetler kendi gizlilik politikalarına göre sınırlı teknik verileri işleyebilir.'
                  : 'The app may use third-party SDKs or services such as Google Play services, Google Mobile Ads, Firebase, purchase validation, crash reporting, and analytics. These services may process limited technical data under their own privacy policies.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Reklam Kimliği' : '5. Ads and Advertising ID'}>
              <p>
                {isTR
                  ? 'Cars -Puzzle Escape reklamlar ve ödüllü reklamlar gösterebilir. Reklam ortakları, reklam sunumu, ölçüm, dolandırıcılığı önleme ve uyumluluk için Android Reklam Kimliği gibi cihaz tanımlayıcılarını kullanabilir.'
                  : 'Cars -Puzzle Escape may show ads and rewarded ads. Advertising partners may use device identifiers, including the Android Advertising ID, for ad delivery, measurement, fraud prevention, and compliance.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama ve Silme' : '6. Retention and Deletion'}>
              <p>
                {isTR
                  ? 'Yerel oyun ilerlemesi cihazınızda saklanabilir. Sunucu tarafındaki destek, reklam, satın alma veya teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Doğrulanmış veri silme talepleri genellikle 30 gün içinde işlenir; yedek kopyalar rutin döngülerle en geç 90 gün içinde kaldırılabilir.'
                  : 'Local game progress may be stored on your device. Server-side support, ad, purchase, or technical records are kept only as long as needed. Verified data deletion requests are usually processed within 30 days; residual backup copies may be removed within 90 days through routine cycles.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Oyun genel kitleye yöneliktir ve 13 yaş altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz. Böyle bir veri işlendiğini öğrenirsek silmek için makul adımları atarız.'
                  : 'The game is intended for a general audience and does not knowingly seek to collect personal data from children under 13. If we learn such data has been processed, we will take reasonable steps to delete it.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Haklarınız' : '8. Your Rights'}>
              <p>
                {isTR
                  ? 'Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işlemeye itiraz etme haklarınız olabilir. Veri silme bağlantısını kullanabilir veya destek e-postası üzerinden bize ulaşabilirsiniz.'
                  : 'Depending on applicable law, you may have rights to access, correct, delete, or object to the processing of your data. You can use the data deletion link or contact us by support email.'}
              </p>
            </Section>

            <Section title={isTR ? '9. İletişim' : '9. Contact'}>
              <p>
                {isTR
                  ? 'Gizlilik soruları için: iammustafakucukkoc@gmail.com'
                  : 'For privacy questions: iammustafakucukkoc@gmail.com'}
              </p>
              <p>
                <a className="text-[#0f5cab] font-bold hover:text-[#11304e] transition-colors" href="/car-puzzle/data-deletion">
                  {isTR ? 'Cars -Puzzle Escape Veri Silme Talebi' : 'Cars -Puzzle Escape Data Deletion Request'}
                </a>
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarPuzzlePrivacyPage;
