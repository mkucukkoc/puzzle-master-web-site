import React from 'react';
import BlockBoomNav from '@/components/BlockBoomNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d8d2f4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#251b52]">{title}</h3>
    <div className="text-[#7b6cb2] leading-7 space-y-3">{children}</div>
  </section>
);

const BlockBoomTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const serviceIncludes = isTR
    ? [
        'Grid tabanlı blok/puzzle seviyeleri ve görsel efektler',
        'İpucu, can, ilerleme kaydı ve ödüllü reklam özellikleri',
        'Varsa premium veya reklamsız sürüm seçenekleri',
      ]
    : [
        'Grid-based block puzzle levels and visual effects',
        'Hints, hearts, progress saving, and rewarded-ad features',
        'Premium or ad-free version options where available',
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
        'Güncellenmiş sürüm yayınlandığında kullanımınıza devam etmeniz yeni koşulları kabul ettiğiniz anlamına gelebilir.',
      ]
    : [
        'Content, levels, ad flow, prices, or technical infrastructure may be updated from time to time.',
        'The app, or parts of it, may be suspended or discontinued.',
        'Continuing to use an updated version may mean you accept the revised terms.',
      ];

  return (
    <div className="min-h-screen bg-[#fbfaff] text-[#251b52]">
      <BlockBoomNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#6a45d8]">BLOCK BOOM!</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-[#7b6cb2]">
              {isTR ? 'Son güncelleme: 11 Temmuz 2026' : 'Last updated: July 11, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Block Boom! uygulamasını indirerek veya kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen uygulamayı kullanmayın.'
                  : 'By downloading or using Block Boom!, you agree to these terms. If you do not agree, please do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Kapsamı' : '2. Service Scope'}>
              <p>
                {isTR
                  ? 'Block Boom!, blokları doğru sırayla yerleştirip temizlemeye dayalı bir mobil puzzle oyunudur. Hizmet şunları içerebilir:'
                  : 'Block Boom! is a mobile puzzle game built around placing and clearing blocks in the correct order. The service may include:'}
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
                  ? 'Bazı ilerleme verileri cihazınızda veya platform doğrulama sistemlerinde saklanabilir. Cihaz değişikliği, uygulamanın kaldırılması veya teknik bir sorun, yerel ilerlemenizin bir kısmını etkileyebilir.'
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
                  ? 'Block Boom! adı, logosu, arayüzü, seviye düzenleri, oyun mantığı, yazılımı ve görsel varlıkları ilgili hak sahiplerinin mülkiyetindedir. Size yalnızca kişisel, devredilemez ve sınırlı bir kullanım hakkı verilir.'
                  : 'The Block Boom! name, logo, interface, level layouts, gameplay mechanics, software, and visual assets belong to the relevant rights holders. You are granted only a personal, non-transferable, limited right to use the app.'}
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

export default BlockBoomTermsPage;
