import React from 'react';
import { Link } from 'react-router-dom';
import FlowConnectsNav from '@/components/FlowConnectsNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#bbf7d0] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#052e16]">{title}</h3>
    <div className="text-[#365314] leading-7 space-y-3">{children}</div>
  </section>
);

const FlowConnectsPrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collected = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, can ve ipucu kullanımı ve uygulama tercihleri',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, kilitlenme günlükleri ve teşhis verileri',
        'Reklam gösterimi, ödüllü reklam etkileşimleri ve Android Reklam Kimliği gibi teknik tanımlayıcılar',
        'Destek için bizimle iletişime geçerseniz e-posta adresiniz ve mesaj içeriğiniz',
        'Satın alma veya abonelik durumu',
      ]
    : [
        'Game progress, level state, hearts and hints usage, and app preferences',
        'Device model, operating system, app version, crash logs, and diagnostic data',
        'Ad delivery, rewarded ad interactions, and technical identifiers such as Advertising ID',
        'Email address and message content if you contact support',
        'Purchase or subscription status if applicable',
      ];

  const purposes = isTR
    ? [
        'Oyunu çalıştırmak, ilerlemeyi kaydetmek ve aynı cihazda deneyimi sürdürmek',
        'Ödüllü reklam ve premium özellikleri yönetmek',
        'Hataları tespit etmek, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek taleplerine yanıt vermek ve yasal yükümlülükleri yerine getirmek',
      ]
    : [
        'Run the game, save progress, and preserve the experience on the device',
        'Manage rewarded ads and premium features',
        'Detect errors, improve performance, and prevent misuse',
        'Respond to support requests and comply with legal obligations',
      ];

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#052e16]">
      <FlowConnectsNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#072421] via-[#0b4d45] to-[#0ea394] p-8 sm:p-10 shadow-[0_24px_60px_rgba(14,163,148,0.28)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/flow-connects/icon.png"
                alt="Flow Connects"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#bbf7d0]">FLOW CONNECTS</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 07 Temmuz 2026' : 'Last updated: July 07, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Flow Connects mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlendiğini, neden işlendiğini ve kullanıcı haklarını açıklar.'
                  : 'This Privacy Policy explains what data is processed in connection with the Flow Connects mobile game and related web pages, why it is processed, and the rights available to users.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Toplayabileceğimiz Veriler' : '2. Data We May Collect'}>
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
                  ? 'Flow Connects reklamlar ve ödüllü reklamlar gösterebilir. Reklam ortakları, reklam sunumu, ölçüm, dolandırıcılığı önleme ve uyumluluk için Android Reklam Kimliği gibi cihaz tanımlayıcılarını kullanabilir.'
                  : 'Flow Connects may show ads and rewarded ads. Advertising partners may use device identifiers, including the Android Advertising ID, for ad delivery, measurement, fraud prevention, and compliance.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama ve Silme' : '6. Retention and Deletion'}>
              <p>
                {isTR
                  ? 'Yerel oyun ilerlemesi cihazınızda saklanabilir. Sunucu tarafında işlenen destek, reklam, satın alma veya teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Doğrulanmış veri silme talepleri genellikle 30 gün içinde işlenir; yedek kopyalar rutin döngülerle en geç 90 gün içinde kaldırılabilir.'
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
              <div className="mt-3">
                <Link to="/flow-connects/data-deletion" className="text-[#0ea394] font-bold hover:text-[#052e16] transition-colors underline">
                  {isTR ? 'Flow Connects Veri Silme Talebi' : 'Flow Connects Data Deletion Request'}
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlowConnectsPrivacyPage;
