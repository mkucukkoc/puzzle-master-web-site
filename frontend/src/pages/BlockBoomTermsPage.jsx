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

  const serviceScopeItems = isTR
    ? [
        'Grid tabanlı blok/puzzle seviyeleri',
        'İpucu, can, seviye ilerlemesi ve ödüllü reklam özellikleri',
        'Varsa premium veya reklamsız seçenekler',
      ]
    : [
        'Grid-based block puzzle levels',
        'Hints, hearts, level progress, and rewarded ad features',
        'Premium or ad-free options where available',
      ];

  const prohibitedUseItems = isTR
    ? [
        'Oyunu, reklamları veya satın alma sistemlerini kötüye kullanmak',
        'Hile, otomasyon, tersine mühendislik veya güvenlik önlemlerini aşmaya çalışmak',
        'Uygulamayı yasa dışı, zararlı veya başkalarının haklarını ihlal edecek şekilde kullanmak',
        'Marka, görsel, seviye verisi veya yazılımı izinsiz kopyalamak',
      ]
    : [
        'Misusing the game, ads, or purchase systems',
        'Cheating, automation, reverse engineering, or bypassing security measures',
        'Using the app unlawfully, harmfully, or in a way that violates third-party rights',
        'Copying or using the brand, artwork, level data, or software without permission',
      ];

  return (
    <div className="min-h-screen bg-[#fbfaff] text-[#251b52]">
      <BlockBoomNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#6a45d8]">
              BLOCK BOOM!
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Service'}
            </h1>
            <p className="mt-3 text-[#7b6cb2]">
              {isTR ? 'Son güncelleme: 11 Temmuz 2026' : 'Last updated: July 11, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Block Boom! uygulamasını kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız uygulamayı kullanmayınız.'
                  : 'By using the Block Boom! app, you agree to these terms. If you do not agree, do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Kapsamı' : '2. Service Scope'}>
              <p>
                {isTR
                  ? 'Block Boom!, blokları doğru sırayla temizlemeye dayalı mobil bir puzzle oyunudur. Hizmet şunları içerebilir:'
                  : 'Block Boom! is a mobile puzzle game based on clearing blocks in the correct order. The service may include:'}
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
                  ? 'Bazı özellikler cihaz depolaması, hesap doğrulaması veya uygulama mağazası satın alma doğrulaması gerektirebilir. Cihaz değişikliği, uygulamayı silme veya teknik sorunlar yerel ilerleme kayıtlarını etkileyebilir.'
                  : 'Some features may require device storage, account validation, or app store purchase verification. Device changes, deleting the app, or technical issues may affect locally stored progress.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Reklamlar, Ödüller ve Premium' : '4. Ads, Rewards, and Premium'}>
              <p>
                {isTR
                  ? 'Oyun ödüllü reklamlar veya ücretli özellikler sunabilir. Reklam izlemek isteğe bağlı olabilir; ödülün verilebilmesi için reklamın tamamlanması gerekebilir.'
                  : 'The game may offer rewarded ads or paid features. Watching ads may be optional; rewards may require completing the ad.'}
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
                  ? 'Block Boom! adı, logosu, arayüzü, seviye verileri, oyun tasarımı, yazılımı ve görsel varlıkları sağlayıcıya veya ilgili hak sahiplerine aittir. Size yalnızca kişisel, devredilemez ve sınırlı kullanım hakkı verilir.'
                  : 'The Block Boom! name, logo, interface, level data, game design, software, and visual assets belong to the provider or relevant rights holders. You receive only a personal, non-transferable, limited right to use the app.'}
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
                  ? 'Uygulama “olduğu gibi” sunulur. Kesintisiz veya hatasız çalışacağı garanti edilmez. Dolaylı, özel veya sonuç olarak ortaya çıkan zararlardan sorumluluk kabul edilmez.'
                  : 'The app is provided “as is.” We do not guarantee uninterrupted or error-free operation. We are not liable for indirect, special, or consequential damages.'}
              </p>
            </Section>

            <Section title={isTR ? '9. Gizlilik' : '9. Privacy'}>
              <p>
                {isTR
                  ? 'Veri işleme uygulamamız Gizlilik Politikası sayfasında açıklanır.'
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
