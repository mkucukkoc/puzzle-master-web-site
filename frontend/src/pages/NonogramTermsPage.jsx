import React from 'react';
import NonogramNav from '@/components/NonogramNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d6e8e8] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#06213a]">{title}</h3>
    <div className="text-[#4d6976] leading-7 space-y-3">{children}</div>
  </section>
);

const NonogramTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const serviceIncludes = isTR
    ? [
        'Grid tabanlı nonogram/picross seviyeleri, günlük bulmaca ve yıldız sistemi',
        'İpucu, seri, ödüllü reklam ve premium özellikler',
        'Varsa bulut eşitleme, giriş veya mağaza doğrulama akışları',
      ]
    : [
        'Grid-based nonogram/picross levels, daily puzzle, and star system',
        'Hints, streaks, rewarded ads, and premium features',
        'Cloud sync, sign-in, or store validation flows where available',
      ];

  const prohibited = isTR
    ? [
        'Oyunu, reklamları, ödülleri veya satın alma sistemlerini kötüye kullanmak',
        'Hile yapmak, otomasyon kullanmak, tersine mühendislik yapmak veya güvenlik önlemlerini aşmaya çalışmak',
        'Uygulamayı yasa dışı, zararlı, haksız veya başkalarının haklarını ihlal edecek şekilde kullanmak',
        'Marka, görsel, seviye verisi veya yazılımı izinsiz kopyalamak ya da dağıtmak',
      ]
    : [
        'Misusing the game, ads, rewards, or purchase systems',
        'Cheating, automation, reverse engineering, or bypassing security measures',
        'Using the app unlawfully, harmfully, unfairly, or in a way that violates third-party rights',
        'Copying or distributing the brand, artwork, level data, or software without permission',
      ];

  const changes = isTR
    ? [
        'İçerik, seviyeler, reklam akışı, fiyatlar veya teknik altyapı zaman zaman güncellenebilir.',
        'Uygulamanın tamamı veya bir bölümü askıya alınabilir ya da sonlandırılabilir.',
        'Güncellenmiş sürüm yayınlandığında kullanmaya devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelebilir.',
      ]
    : [
        'Content, levels, ad flow, prices, or technical infrastructure may be updated from time to time.',
        'The app, or parts of it, may be suspended or discontinued.',
        'Continuing to use an updated version may mean you accept the revised terms.',
      ];

  return (
    <div className="min-h-screen bg-[#f7fbfb] text-[#06213a]">
      <NonogramNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#05304f] via-[#0b4665] to-[#0f7180] p-8 sm:p-10 shadow-[0_24px_60px_rgba(6,33,58,0.28)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-6 w-6 rounded-md bg-[#1fdbc9] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#ff6f61] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffb86b] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffffff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#8feceb]">NONOGRAM</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 24 Temmuz 2026' : 'Last updated: July 24, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Nonogram - Pixel Puzzle uygulamasını indirerek, açarak veya kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen uygulamayı kullanmayın.'
                  : 'By downloading, opening, or using Nonogram - Pixel Puzzle, you agree to these terms. If you do not agree, please do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Kapsamı' : '2. Service Scope'}>
              <p>
                {isTR
                  ? 'Nonogram - Pixel Puzzle, sayı ipuçlarıyla piksel görselleri ortaya çıkarmaya dayalı bir mobil puzzle oyunudur. Hizmet şunları içerebilir:'
                  : 'Nonogram - Pixel Puzzle is a mobile puzzle game built around revealing pixel art from number clues. The service may include:'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {serviceIncludes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '3. İlerleme ve Cihazlar' : '3. Progress and Devices'}>
              <p>
                {isTR
                  ? 'Bazı ilerleme verileri cihazınızda veya platform doğrulama sistemlerinde saklanabilir. Cihaz değişikliği, uygulamayı silme veya teknik sorunlar yerel ilerlemenizin bir kısmını etkileyebilir.'
                  : 'Some progress data may be stored on your device or in platform verification systems. Changing devices, uninstalling the app, or a technical issue may affect some locally stored progress.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Reklamlar, Ödüller ve Satın Almalar' : '4. Ads, Rewards, and Purchases'}>
              <p>
                {isTR
                  ? 'Oyun, ödüllü reklamlar veya ücretli özellikler sunabilir. Reklam izlemek isteğe bağlı olabilir; ancak ödül almak için reklamın tamamlanması gerekebilir.'
                  : 'The game may offer rewarded ads or paid features. Watching an ad may be optional; however, completing the ad may be required to receive the reward.'}
              </p>
              <p>
                {isTR
                  ? 'Abonelikler, iade süreçleri ve ödeme kuralları Google Play veya Apple App Store politikalarına tabidir.'
                  : 'Subscriptions, refunds, and payment rules are subject to Google Play or Apple App Store policies.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Yasaklı Kullanım' : '5. Prohibited Use'}>
              <ul className="list-disc list-inside space-y-2">
                {prohibited.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '6. Fikri Mülkiyet' : '6. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Nonogram - Pixel Puzzle adı, logosu, arayüzü, seviye düzenleri, oyun mantığı, yazılımı ve görsel varlıkları ilgili hak sahiplerinin mülkiyetindedir. Size yalnızca kişisel, devredilemez ve sınırlı bir kullanım hakkı verilir.'
                  : 'The Nonogram - Pixel Puzzle name, logo, interface, level layouts, gameplay mechanics, software, and visual assets belong to the relevant rights holders. You are granted only a personal, non-transferable, limited right to use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Değişiklikler ve Kullanımın Sonlandırılması' : '7. Changes and Termination'}>
              <ul className="list-disc list-inside space-y-2">
                {changes.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                {isTR
                  ? 'Bu koşulları ihlal etmeniz halinde uygulamaya erişiminiz sınırlandırılabilir veya sona erdirilebilir.'
                  : 'If you violate these terms, your access to the app may be restricted or terminated.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Sorumluluk Sınırı' : '8. Limitation of Liability'}>
              <p>
                {isTR
                  ? 'Uygulama “olduğu gibi” sunulur. Kesintisiz, güvenli veya hatasız çalışacağına dair garanti verilmez. Kanunen izin verilen en geniş ölçüde, dolaylı veya sonuç olarak doğan zararlardan sorumluluk kabul edilmez.'
                  : 'The app is provided “as is.” We do not guarantee uninterrupted, secure, or error-free operation. To the fullest extent permitted by law, we are not responsible for indirect or consequential damages.'}
              </p>
            </Section>

            <Section title={isTR ? '9. Gizlilik' : '9. Privacy'}>
              <p>
                {isTR
                  ? 'Veri işleme uygulamalarımız Gizlilik Politikası sayfasında açıklanır.'
                  : 'Our data handling practices are described in the Privacy Policy page.'}
              </p>
            </Section>

            <Section title={isTR ? '10. İletişim' : '10. Contact'}>
              <p>
                {isTR
                  ? 'Hukuki talepler ve sorular için: support@aveniaichat.com'
                  : 'For legal requests and questions: support@aveniaichat.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NonogramTermsPage;
