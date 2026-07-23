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

const BlocksPuzzleEscapePrivacyPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const collectedData = isTR
    ? [
        'Oyun ilerlemesi, seviye durumu, can/ipucu kullanımı, ayarlar ve tercih edilen dil',
        'Cihaz modeli, işletim sistemi, uygulama sürümü, çökme kayıtları ve performans sinyalleri',
        'Reklam gösterimi, ödüllü reklam tamamlanmaları ve reklam kimlikleri gibi teknik ölçüm verileri',
        'Satın alma, abonelik veya platform doğrulama durumu',
        'Destek için bizimle iletişime geçerseniz e-posta adresi ve mesaj içeriği',
      ]
    : [
        'Game progress, level state, hearts/hints usage, settings, and preferred language',
        'Device model, operating system, app version, crash logs, and performance signals',
        'Ad delivery, rewarded-ad completions, and technical measurement data such as advertising identifiers',
        'Purchase, subscription, or platform verification status',
        'Email address and message content if you contact support',
      ];

  const uses = isTR
    ? [
        'Oyunu çalıştırmak, ilerlemenizi kaydetmek ve aynı cihaz üzerinde deneyimi korumak',
        'Reklamları, ödüllü içerikleri ve varsa premium özellikleri sunmak',
        'Hata ayıklamak, performansı iyileştirmek ve kötüye kullanımı önlemek',
        'Destek, hesap/ödemeye ilişkin talepler ve veri silme isteklerine yanıt vermek',
      ]
    : [
        'Run the game, save progress, and preserve the experience on the same device',
        'Deliver ads, rewarded content, and any premium features where available',
        'Debug issues, improve performance, and prevent abuse',
        'Respond to support, account/payment-related requests, and data deletion requests',
      ];

  const choices = isTR
    ? [
        'Blocks - Puzzle Escape oynanış için kişi listesi, fotoğraf, video veya hassas konum istemez.',
        'İsterseniz reklam kimliği ayarlarınızı cihazınızdan sınırlayabilir veya sıfırlayabilirsiniz.',
        'Destek talepleri için bize e-posta gönderebilirsiniz; yalnızca talebinizi çözmek için gerekli bilgiler tutulur.',
      ]
    : [
        'Blocks - Puzzle Escape does not require contacts, photos, videos, or precise location for gameplay.',
        'You can limit or reset your advertising ID settings from your device if desired.',
        'You can email us for support; we keep only the information needed to resolve your request.',
      ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#17345f]">
      <BlocksPuzzleEscapeNav active="privacy" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0f5aa7] via-[#1f7cff] to-[#2f89ff] p-8 sm:p-10 shadow-[0_24px_60px_rgba(31,124,255,0.26)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-6 w-6 rounded-md bg-[#1f7cff] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#17c3b2] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#0ea394] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffb800] shadow-[inset_0_2px_0_rgba(255,255,255,0.5)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#d9ecff]">BLOCKS - PUZZLE ESCAPE</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 23 Temmuz 2026' : 'Last updated: July 23, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kapsam' : '1. Scope'}>
              <p>
                {isTR
                  ? 'Bu Gizlilik Politikası, Blocks - Puzzle Escape mobil oyunu ve ilgili web sayfaları kapsamında hangi verilerin işlenebileceğini, bunların neden işlendiğini ve kullanıcıların hangi haklara sahip olabileceğini açıklar.'
                  : 'This Privacy Policy explains what data may be processed in connection with the Blocks - Puzzle Escape mobile game and related web pages, why it is processed, and what rights users may have.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Toplayabileceğimiz Veriler' : '2. Data We May Process'}>
              <ul className="list-disc list-inside space-y-2">
                {collectedData.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '3. Verileri Nasıl Kullanırız' : '3. How We Use Data'}>
              <ul className="list-disc list-inside space-y-2">
                {uses.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. Paylaşım ve Üçüncü Taraf Hizmetler' : '4. Sharing and Third-Party Services'}>
              <p>
                {isTR
                  ? 'Uygulama; reklam sunumu, ödüllü reklamlar, çökme raporlama, analitik veya uygulama mağazası doğrulaması için üçüncü taraf hizmetleri kullanabilir. Bu hizmetler, kendi gizlilik politikalarına tabi olarak sınırlı teknik verileri işleyebilir.'
                  : 'The app may use third-party services for ad delivery, rewarded ads, crash reporting, analytics, or app store validation. Those services may process limited technical data under their own privacy policies.'}
              </p>
              <p>
                {isTR
                  ? 'Blocks - Puzzle Escape, yasaların gerektirdiği durumlar dışında kişisel verileri satmaz.'
                  : 'Blocks - Puzzle Escape does not sell personal data except where required by law.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Reklamlar ve Ödüller' : '5. Ads and Rewards'}>
              <p>
                {isTR
                  ? 'Blocks - Puzzle Escape bazı seviyelerde ödüllü reklam gösterebilir. Reklamı izlemeyi seçmeniz halinde, ödülün verilebilmesi için reklamın tamamlanması gerekebilir. Reklam ortakları, reklam ölçümü için cihaz tanımlayıcıları veya benzer teknik veriler kullanabilir.'
                  : 'Blocks - Puzzle Escape may show rewarded ads in some parts of the experience. If you choose to watch an ad, it may need to be completed before the reward is granted. Advertising partners may use device identifiers or similar technical data for measurement.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Saklama ve Silme' : '6. Retention and Deletion'}>
              <p>
                {isTR
                  ? 'Yerel oyun ilerlemesi cihazınızda saklanabilir. Destek, reklam, satın alma ve teknik kayıtlar yalnızca gerekli olduğu süre boyunca tutulur. Doğrulanmış veri silme talepleri mümkün olan en kısa sürede, çoğunlukla 30 gün içinde işlenir.'
                  : 'Local game progress may be stored on your device. Support, ad, purchase, and technical records are kept only as long as necessary. Verified deletion requests are processed as soon as reasonably possible, usually within 30 days.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Çocukların Gizliliği' : "7. Children's Privacy"}>
              <p>
                {isTR
                  ? 'Blocks - Puzzle Escape genel kitleye yöneliktir ve 13 yaşın altındaki çocuklardan bilerek kişisel veri toplamayı amaçlamaz.'
                  : 'Blocks - Puzzle Escape is intended for a general audience and does not knowingly collect personal data from children under 13.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Haklarınız ve Seçimleriniz' : '8. Your Rights and Choices'}>
              <ul className="list-disc list-inside space-y-2">
                {choices.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {isTR
                  ? 'Geçerli mevzuata göre verilerinize erişme, düzeltme, silme veya işleme itiraz etme gibi haklara sahip olabilirsiniz.'
                  : 'Depending on applicable law, you may have rights to access, correct, delete, or object to the processing of your data.'}
              </p>
            </Section>

            <Section title={isTR ? '9. İletişim' : '9. Contact'}>
              <p>
                {isTR
                  ? 'Gizlilik ile ilgili sorular için: support@aveniaichat.com'
                  : 'Questions about privacy: support@aveniaichat.com'}
              </p>
              <Link to="/blocks-puzzle-escape/data-deletion" className="text-[#1f7cff] font-bold hover:text-[#17345f] transition-colors">
                {isTR ? 'Veri Silme Talebi' : 'Data Deletion Request'}
              </Link>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlocksPuzzleEscapePrivacyPage;
