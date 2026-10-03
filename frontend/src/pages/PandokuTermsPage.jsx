import React from 'react';
import PandokuNav from '@/components/PandokuNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const PandokuTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <PandokuNav active="terms" />

      <main className="pt-28 sm:pt-32 pb-12 px-4 sm:px-6 break-words">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0b2b30] via-[#0e7a84] to-[#14a3ad] p-8 sm:p-10 shadow-[0_24px_60px_rgba(20,163,173,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/pandoku/icon.png"
                alt="Pandoku"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#d6f5f7]">PANDOKU</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR ? 'Son güncelleme: 3 Ekim 2026' : 'Last updated: October 3, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Pandoku uygulamasını indirerek, açarak veya kullanarak bu Kullanım Koşullarını kabul etmiş olursunuz. Koşulları kabul etmiyorsanız uygulamayı kullanmayınız.'
                  : 'By downloading, opening, or using Pandoku, you agree to these Terms of Use. If you do not agree, please do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Tanımı' : '2. Service Description'}>
              <p>
                {isTR
                  ? 'Pandoku, renkli bir tahtaya pandalar yerleştirdiğiniz bir mantık bulmaca oyunudur: her satırda, her sütunda ve her renkte bir panda olur ve iki panda birbirine değemez. Uygulama ayrıca klasik Sudoku bölümleri ve günlük görevler içerir; bölüm ilerlemesi, kartpostal galerisi, ipuçları, canlar, seri takibi ve ödüllü reklamlar sunabilir.'
                  : 'Pandoku is a logic puzzle game where you place pandas on a coloured board: one panda in every row, every column and every colour, and no two pandas may touch. The app also includes classic Sudoku levels and Daily Challenges, and may offer level progress, a postcard gallery, hints, hearts, streaks and rewarded ads.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Oyun Kuralları ve Kullanım' : '3. Game Rules and Use'}>
              <p>
                {isTR
                  ? 'Uygulamayı yalnızca kişisel ve yasal amaçlarla kullanabilirsiniz. Hile, tersine mühendislik, otomatik oynatma, güvenlik önlemlerini aşma veya hizmeti bozma girişimleri yasaktır.'
                  : 'You may use the app only for personal and lawful purposes. Cheating, reverse engineering, automated play, bypassing security measures, or disrupting the service is prohibited.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Reklamlar ve Ödüller' : '4. Ads and Rewards'}>
              <p>
                {isTR
                  ? 'Uygulama geçiş reklamları ve ödüllü reklamlar gösterebilir. Ödüllü reklamlar izlenerek ipucu, can veya benzeri oyun içi avantajlar kazanılabilir. Oyun içi avantajların gerçek parayla değeri yoktur ve devredilemez. Reklam kullanılabilirliği bölgeye, cihaza veya reklam sağlayıcısına göre değişebilir.'
                  : 'The app may show interstitial and rewarded ads. Watching rewarded ads may grant hints, hearts, or similar in-game benefits. In-game benefits have no real-money value and cannot be transferred. Ad availability may vary by region, device, or advertising provider.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Oyun Verileri' : '5. Game Data'}>
              <p>
                {isTR
                  ? 'İlerlemeniz cihazınızda saklanır ve bir hesaba bağlı değildir. Uygulamanın silinmesi, cihaz değişikliği veya cihaz verilerinin temizlenmesi ilerlemenin kaybolmasına yol açabilir.'
                  : 'Your progress is stored on your device and is not tied to an account. Deleting the app, changing devices, or clearing device data may cause progress to be lost.'}
              </p>
            </Section>

            <Section title={isTR ? '6. Fikri Mülkiyet' : '6. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Pandoku adı, logosu, panda karakterleri, arayüzü, bölüm tasarımları, kartpostal görselleri, müzikleri, yazılımı ve diğer görsel varlıkları geliştiriciye veya ilgili hak sahiplerine aittir. Size yalnızca kişisel, sınırlı ve devredilemez bir kullanım hakkı verilir.'
                  : 'The Pandoku name, logo, panda characters, interface, level designs, postcard artwork, music, software and other visual assets belong to the developer or relevant rights holders. You receive only a personal, limited, non-transferable right to use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Sorumluluğun Sınırlandırılması' : '7. Limitation of Liability'}>
              <p>
                {isTR
                  ? 'Uygulama olduğu gibi sunulur. Oyunun, reklamların veya üçüncü taraf hizmetlerin kesintisiz ya da hatasız çalışacağı garanti edilmez. Yasal olarak izin verilen ölçüde dolaylı kayıplardan sorumlu olmayız.'
                  : 'The app is provided as is. We do not guarantee that the game, ads, or third-party services will run uninterrupted or error-free. To the extent permitted by law, we are not responsible for indirect losses.'}
              </p>
            </Section>

            <Section title={isTR ? '8. Değişiklikler' : '8. Changes'}>
              <p>
                {isTR
                  ? 'Uygulama özellikleri, bölümler, reklam yapısı veya bu koşullar zaman zaman güncellenebilir. Uygulamayı kullanmaya devam etmeniz güncel koşulları kabul ettiğiniz anlamına gelir.'
                  : 'App features, levels, ad structure, or these terms may be updated from time to time. Continued use of the app means you accept the current terms.'}
              </p>
            </Section>

            <Section title={isTR ? '9. İletişim' : '9. Contact'}>
              <p>
                {isTR
                  ? 'Sorularınız için: iammustafakucukkoc@gmail.com'
                  : 'For inquiries: iammustafakucukkoc@gmail.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PandokuTermsPage;
