import React from 'react';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d6e8e4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#1f3d3a]">{title}</h3>
    <div className="text-[#8a9d9a] leading-7 space-y-3">{children}</div>
  </section>
);

const TermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const serviceScopeItems = isTR
    ? [
        'Grid tabanlı ok puzzle seviyeleri',
        'Can, ipucu, seviye ilerlemesi ve ödüllü reklam özellikleri',
        'Varsa premium, reklamsız veya ek oyun içi özellikler',
      ]
    : [
        'Grid-based arrow puzzle levels',
        'Hearts, hints, level progress, and rewarded ad features',
        'Premium, ad-free, or additional in-game features where available',
      ];

  const prohibitedUseItems = isTR
    ? [
        'Oyunu, servisleri veya reklam/satın alma sistemlerini kötüye kullanmak',
        'Hile, otomasyon, tersine mühendislik veya güvenlik önlemlerini aşmaya çalışmak',
        'Uygulamayı yasa dışı, zararlı veya üçüncü kişilerin haklarını ihlal edecek şekilde kullanmak',
        'Marka, görsel, seviye verisi veya yazılımı izinsiz kopyalamak ya da ticari olarak kullanmak',
      ]
    : [
        'Misusing the game, services, or ad/purchase systems',
        'Cheating, automation, reverse engineering, or bypassing security measures',
        'Using the app unlawfully, harmfully, or in a way that violates third-party rights',
        'Copying or commercially using the brand, artwork, level data, or software without permission',
      ];

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#1f3d3a]">
      <BrandNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#0ea394]">
              {isTR ? 'ARROWS PUZZLE MASTER' : 'ARROWS PUZZLE MASTER'}
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Service'}
            </h1>
            <p className="mt-3 text-[#8a9d9a]">
              {isTR ? 'Son güncelleme: 4 Temmuz 2026' : 'Last updated: July 4, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Arrows Puzzle Master uygulamasını kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız uygulamayı kullanmayınız.'
                  : 'By using the Arrows Puzzle Master app, you agree to these terms. If you do not agree, do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Kapsamı' : '2. Service Scope'}>
              <p>
                {isTR
                  ? 'Arrows Puzzle Master, okları doğru sırayla çözmeye dayalı mobil bir puzzle oyunudur. Hizmet şunları içerebilir:'
                  : 'Arrows Puzzle Master is a mobile puzzle game based on clearing arrows in the right order. The service may include:'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {serviceScopeItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '3. Hesap ve İlerleme' : '3. Account and Progress'}>
              <p>
                {isTR
                  ? 'Bazı özellikler hesap, cihaz depolaması veya uygulama mağazası satın alma doğrulaması gerektirebilir. Cihaz değişikliği, uygulamayı silme veya teknik sorunlar yerel ilerleme kayıtlarını etkileyebilir.'
                  : 'Some features may require an account, device storage, or app store purchase validation. Device changes, deleting the app, or technical issues may affect locally stored progress.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Reklamlar, Ödüller ve Premium' : '4. Ads, Rewards, and Premium'}>
              <p>
                {isTR
                  ? 'Oyun, ödüllü reklamlar veya ücretli özellikler sunabilir. Reklam izlemek isteğe bağlı olabilir; ödülün verilebilmesi için reklamın tamamlanması ve ilgili reklam sağlayıcısından başarılı yanıt alınması gerekebilir.'
                  : 'The game may offer rewarded ads or paid features. Watching ads may be optional; rewards may require completing the ad and receiving a successful response from the ad provider.'}
              </p>
              <p>
                {isTR
                  ? 'Abonelikler, iadeler ve ödeme işlemleri Google Play Store veya Apple App Store kurallarına göre yönetilir.'
                  : 'Subscriptions, refunds, and payments are managed under Google Play Store or Apple App Store rules.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Yasaklı Kullanım' : '5. Prohibited Use'}>
              <ul className="list-disc list-inside space-y-2">
                {prohibitedUseItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '6. Fikri Mülkiyet' : '6. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Arrows Puzzle Master adı, logosu, arayüzü, seviye verileri, oyun tasarımı, yazılımı ve görsel varlıkları sağlayıcıya veya ilgili hak sahiplerine aittir. Size yalnızca kişisel, devredilemez ve sınırlı kullanım hakkı verilir.'
                  : 'The Arrows Puzzle Master name, logo, interface, level data, game design, software, and visual assets belong to the provider or relevant rights holders. You receive only a personal, non-transferable, limited right to use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Hizmet Değişiklikleri' : '7. Service Changes'}>
              <p>
                {isTR
                  ? 'Seviyeler, reklamlar, fiyatlar, özellikler veya teknik altyapı zaman zaman değiştirilebilir, askıya alınabilir veya kaldırılabilir.'
                  : 'Levels, ads, prices, features, or technical infrastructure may be changed, suspended, or removed from time to time.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Sorumluluk Sınırı' : '8. Limitation of Liability'}>
              <p>
                {isTR
                  ? 'Uygulama “olduğu gibi” sunulur. Kesintisiz, hatasız veya tüm cihazlarda aynı performansla çalışacağı garanti edilmez. Dolaylı, özel veya sonuç olarak ortaya çıkan zararlardan sorumluluk kabul edilmez.'
                  : 'The app is provided “as is.” We do not guarantee uninterrupted, error-free operation or identical performance on all devices. We are not liable for indirect, special, or consequential damages.'}
              </p>
            </Section>

            <Section title={isTR ? '9. Sonlandırma' : '9. Termination'}>
              <p>
                {isTR
                  ? 'Bu koşulları ihlal etmeniz halinde erişiminiz askıya alınabilir veya sonlandırılabilir. Uygulamayı kullanmayı bırakarak koşulları dilediğiniz zaman sonlandırabilirsiniz.'
                  : 'If you violate these terms, your access may be suspended or terminated. You may stop using the app at any time.'}
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

export default TermsPage;
