import React from 'react';
import MinesweeperNav from '@/components/MinesweeperNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#d7e3f4] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#12305f]">{title}</h3>
    <div className="text-[#5a7196] leading-7 space-y-3">{children}</div>
  </section>
);

const MinesweeperTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#12305f]">
      <MinesweeperNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0b2558] via-[#143a85] to-[#2d63db] p-8 sm:p-10 shadow-[0_24px_60px_rgba(18,48,95,0.28)]">
            <div className="flex items-center gap-4">
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-6 w-6 rounded-md bg-[#4bb2ff] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#ff8d5a] shadow-[inset_0_2px_0_rgba(255,255,255,0.45)]" />
                <span className="h-6 w-6 rounded-md bg-[#dfe9ff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
                <span className="h-6 w-6 rounded-md bg-[#ffffff] shadow-[inset_0_2px_0_rgba(255,255,255,0.65)]" />
              </div>
              <p className="text-[11px] font-black tracking-[0.28em] text-[#cae0ff]">MINESWEEPER</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 25 Temmuz 2026' : 'Last updated: July 25, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Minesweeper: Mine Quest uygulamasını indirerek, açarak veya kullanarak bu şartları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen uygulamayı kullanmayın.'
                  : 'By downloading, opening, or using Minesweeper: Mine Quest, you agree to these terms. If you do not agree, please do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmet Kapsamı' : '2. Service Scope'}>
              <p>
                {isTR
                  ? 'Minesweeper: Mine Quest, sayılarla güvenli kareleri bulmaya ve mayınları işaretlemeye dayalı klasik bir bulmaca oyunudur. Hizmet aşağıdakileri içerebilir:'
                  : 'Minesweeper: Mine Quest is a classic puzzle game focused on reading numbers, uncovering safe tiles, and flagging mines. The service may include:'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Mayın tarama seviyeleri, günlük hedefler ve ilerleme sistemi' : 'Minesweeper levels, daily goals, and progression systems'}</li>
                <li>{isTR ? 'İpuçları, ödüllü reklamlar ve premium özellikler' : 'Hints, rewarded ads, and premium features'}</li>
                <li>{isTR ? 'Giriş, puan tablosu veya mağaza doğrulaması gibi platform akışları' : 'Platform flows such as sign-in, leaderboards, or store validation'}</li>
              </ul>
            </Section>

            <Section title={isTR ? '3. İlerleme ve Cihazlar' : '3. Progress and Devices'}>
              <p>
                {isTR
                  ? 'Bazı ilerleme verileri cihazınızda veya platform doğrulama sistemlerinde saklanabilir. Cihaz değiştirmek, uygulamayı kaldırmak veya teknik bir sorun bazı yerel ilerlemeleri etkileyebilir.'
                  : 'Some progress data may be stored on your device or in platform verification systems. Changing devices, uninstalling the app, or a technical issue may affect some locally stored progress.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Reklamlar, Ödüller ve Satın Alımlar' : '4. Ads, Rewards, and Purchases'}>
              <p>
                {isTR
                  ? 'Uygulama ödüllü reklamlar veya ücretli özellikler sunabilir. Bir reklamı izlemek isteğe bağlı olabilir; ancak ödülü almak için reklamın tamamlanması gerekebilir. Abonelikler, iadeler ve ödeme kuralları Google Play veya Apple App Store politikalarına tabidir.'
                  : 'The app may offer rewarded ads or paid features. Watching an ad may be optional; however, completing the ad may be required to receive the reward. Subscriptions, refunds, and payment rules are subject to Google Play or Apple App Store policies.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Yasaklı Kullanım' : '5. Prohibited Use'}>
              <ul className="list-disc list-inside space-y-2">
                <li>{isTR ? 'Oyun, reklam, ödül veya satın alma sistemlerini kötüye kullanmak' : 'Misusing the game, ads, rewards, or purchase systems'}</li>
                <li>{isTR ? 'Hile yapmak, otomasyon kullanmak, tersine mühendislik uygulamak veya güvenliği aşmak' : 'Cheating, automation, reverse engineering, or bypassing security measures'}</li>
                <li>{isTR ? 'Uygulamayı yasa dışı, zararlı, adaletsiz veya üçüncü taraf haklarını ihlal edecek şekilde kullanmak' : 'Using the app unlawfully, harmfully, unfairly, or in a way that violates third-party rights'}</li>
                <li>{isTR ? 'Markayı, görselleri, seviye verilerini veya yazılımı izinsiz kopyalamak ya da dağıtmak' : 'Copying or distributing the brand, artwork, level data, or software without permission'}</li>
              </ul>
            </Section>

            <Section title={isTR ? '6. Fikri Mülkiyet' : '6. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Minesweeper: Mine Quest adı, logosu, arayüzü, seviye yapıları, oyun mekaniği, yazılımı ve görsel varlıkları ilgili hak sahiplerine aittir. Size yalnızca kişisel, devredilemez ve sınırlı bir kullanım hakkı tanınır.'
                  : 'The Minesweeper: Mine Quest name, logo, interface, level structures, gameplay mechanics, software, and visual assets belong to the relevant rights holders. You are granted only a personal, non-transferable, limited right to use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Değişiklikler ve Sonlandırma' : '7. Changes and Termination'}>
              <p>
                {isTR
                  ? 'İçerik, seviyeler, reklam akışı, fiyatlar veya teknik altyapı zaman zaman güncellenebilir. Uygulama veya bazı bölümleri askıya alınabilir ya da sonlandırılabilir. Güncellenmiş sürümü kullanmaya devam etmeniz, revize edilmiş şartları kabul ettiğiniz anlamına gelebilir.'
                  : 'Content, levels, ad flow, prices, or technical infrastructure may be updated from time to time. The app, or parts of it, may be suspended or discontinued. Continuing to use an updated version may mean you accept the revised terms.'}
              </p>
              <p>
                {isTR
                  ? 'Bu şartları ihlal etmeniz durumunda uygulamaya erişiminiz sınırlandırılabilir veya sonlandırılabilir.'
                  : 'If you violate these terms, your access to the app may be restricted or terminated.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Sorumluluk Sınırı' : '8. Limitation of Liability'}>
              <p>
                {isTR
                  ? 'Uygulama “olduğu gibi” sunulur. Kesintisiz, güvenli veya hatasız çalışacağını garanti etmeyiz. Yasaların izin verdiği azami ölçüde, dolaylı veya sonuçsal zararlardan sorumlu değiliz.'
                  : 'The app is provided “as is.” We do not guarantee uninterrupted, secure, or error-free operation. To the fullest extent permitted by law, we are not responsible for indirect or consequential damages.'}
              </p>
            </Section>

            <Section title={isTR ? '9. Gizlilik' : '9. Privacy'}>
              <p>
                {isTR
                  ? 'Veri işleme uygulamalarımız Gizlilik Politikası sayfasında açıklanmıştır.'
                  : 'Our data handling practices are described in the Privacy Policy page.'}
              </p>
            </Section>

            <Section title={isTR ? '10. İletişim' : '10. Contact'}>
              <p>
                {isTR
                  ? 'Yasal sorular için: iammustafakucukkoc@gmail.com'
                  : 'For legal requests and questions: iammustafakucukkoc@gmail.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MinesweeperTermsPage;
