import React from 'react';
import CarPuzzleNav from '@/components/CarPuzzleNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#cfe0ec] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#11304e]">{title}</h3>
    <div className="text-[#5f7692] leading-7 space-y-3">{children}</div>
  </section>
);

const CarPuzzleTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const serviceIncludes = isTR
    ? [
        'Trafik bulmacası seviyeleri ve görsel efektler',
        'İpuçları, ilerleme kaydı, can sistemi ve ödüllü reklam özellikleri',
        'Varsa premium veya reklamsız sürüm seçenekleri',
      ]
    : [
        'Traffic-puzzle levels and visual effects',
        'Hints, progress saving, hearts, and rewarded-ad features',
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
    <div className="min-h-screen bg-[#f7fbff] text-[#11304e]">
      <CarPuzzleNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-bold tracking-[0.22em] text-[#0f5cab]">CARS -PUZZLE ESCAPE</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-[#5f7692]">
              {isTR ? 'Son güncelleme: 13 Temmuz 2026' : 'Last updated: July 13, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Cars -Puzzle Escape uygulamasını indirerek, açarak veya kullanarak bu Kullanım Şartlarını kabul etmiş olursunuz. Şartları kabul etmiyorsanız uygulamayı kullanmayınız.'
                  : 'By downloading, opening, or using Cars -Puzzle Escape, you agree to these Terms of Use. If you do not agree, please do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Tanımı' : '2. Service Description'}>
              <p>
                {isTR
                  ? 'Cars -Puzzle Escape, araçları doğru sırayla sıkışık bir otoparktan çıkarıp trafiği çözmeye dayalı bir mobil bulmaca oyunudur. Uygulama; seviye ilerlemesi, ipuçları, canlar, ödüllü reklamlar, tema veya kozmetik seçenekler ve premium özellikler içerebilir.'
                  : 'Cars -Puzzle Escape is a mobile puzzle game about driving vehicles out of a packed parking lot in the correct order. The app may include level progress, hints, hearts, rewarded ads, themes or cosmetic options, and premium features.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Oyun Kuralları ve Kullanım' : '3. Game Rules and Use'}>
              <ul className="list-disc list-inside space-y-2">
                {prohibited.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. Reklamlar, Ödüller ve Satın Almalar' : '4. Ads, Rewards, and Purchases'}>
              <p>
                {isTR
                  ? 'Uygulama reklamlar veya ödüllü reklamlar gösterebilir. Ödüllü reklamlar izlenerek ipucu, can veya benzeri oyun içi avantajlar kazanılabilir. Reklam kullanılabilirliği bölgeye, cihaza veya reklam sağlayıcısına göre değişebilir.'
                  : 'The app may show ads or rewarded ads. Watching rewarded ads may grant hints, hearts, or similar in-game benefits. Ad availability may vary by region, device, or advertising provider.'}
              </p>
              <p>
                {isTR
                  ? 'Uygulama içi satın almalar, abonelikler veya reklam kaldırma gibi premium özellikler sunulabilir. Ödemeler Google Play veya ilgili uygulama mağazası üzerinden işlenir. İptal, iade ve abonelik yönetimi ilgili mağaza kurallarına tabidir.'
                  : 'The app may offer in-app purchases, subscriptions, or premium features such as removing ads. Payments are processed through Google Play or the relevant app store. Cancellations, refunds, and subscription management are subject to the applicable store rules.'}
              </p>
            </Section>

            <Section title={isTR ? '5. İlerleme ve Cihazlar' : '5. Progress and Devices'}>
              <p>
                {isTR
                  ? 'Bazı ilerleme verileri cihazınızda veya platform doğrulama sistemlerinde saklanabilir. Cihaz değişikliği, uygulamanın kaldırılması veya teknik bir sorun, yerel ilerlemenizin bir kısmını etkileyebilir.'
                  : 'Some progress data may be stored on your device or in platform verification systems. Changing devices, uninstalling the app, or a technical issue may affect some locally stored progress.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Fikri Mülkiyet' : '6. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Cars -Puzzle Escape adı, logosu, arayüzü, seviye düzenleri, oyun mantığı, yazılımı ve görsel varlıkları ilgili hak sahiplerinin mülkiyetindedir. Size yalnızca kişisel, devredilemez ve sınırlı bir kullanım hakkı verilir.'
                  : 'The Cars -Puzzle Escape name, logo, interface, level layouts, gameplay mechanics, software, and visual assets belong to the relevant rights holders. You are granted only a personal, non-transferable, limited right to use the app.'}
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
                  ? 'Bu şartları ihlal etmeniz halinde uygulamaya erişiminiz sınırlandırılabilir veya sona erdirilebilir.'
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
                  ? 'Hukuki talepler ve sorular için: iammustafakucukkoc@gmail.com'
                  : 'For legal requests and questions: iammustafakucukkoc@gmail.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarPuzzleTermsPage;
