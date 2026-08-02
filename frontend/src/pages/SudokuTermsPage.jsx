import React from 'react';
import SudokuNav from '@/components/SudokuNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#fed7aa] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#431407]">{title}</h3>
    <div className="text-[#7c2d12] leading-7 space-y-3">{children}</div>
  </section>
);

const SudokuTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#fff7ed] text-[#431407]">
      <SudokuNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#431407] via-[#9a3412] to-[#ea580c] p-8 sm:p-10 shadow-[0_24px_60px_rgba(234,88,12,0.28)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/sudoku/icon.png"
                alt="Sudoku Quest"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#ffedd5]">SUDOKU QUEST</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 07 Temmuz 2026' : 'Last updated: July 07, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kabul' : '1. Acceptance'}>
              <p>
                {isTR
                  ? 'Sudoku Quest uygulamasını indirerek, açarak veya kullanarak bu Kullanım Şartlarını kabul etmiş olursunuz. Şartları kabul etmiyorsanız uygulamayı kullanmayınız.'
                  : 'By downloading, opening, or using Sudoku Quest, you agree to these Terms of Use. If you do not agree to these terms, please do not use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmetin Tanımı' : '2. Service Description'}>
              <p>
                {isTR
                  ? 'Sudoku Quest, 9x9 ızgaraya 1-9 arası rakamları çakışmayacak şekilde yerleştirmeye dayalı klasik mantık bulmaca oyunudur. Uygulama; seviye ilerlemesi, ipuçları, günlük bulmacalar, ödüllü reklamlar, temalar ve premium özellikler içerebilir.'
                  : 'Sudoku Quest is a classic logic puzzle game based on placing numbers 1-9 on a 9x9 grid without repeating. The app may include level progression, hints, daily challenges, rewarded ads, themes, and premium features.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Oyun Kuralları ve Kullanım' : '3. Game Rules and Conduct'}>
              <p>
                {isTR
                  ? 'Uygulamayı yalnızca kişisel ve yasal amaçlarla kullanabilirsiniz. Hile, tersine mühendislik, otomatik oynatma, güvenlik önlemlerini aşma, hizmeti bozma veya diğer kullanıcıların deneyimini kötüleştirme girişimleri yasaktır.'
                  : 'You may use the app solely for personal and lawful purposes. Cheating, reverse engineering, automation, bypassing security measures, disrupting service, or impairing other users’ experience is strictly prohibited.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Reklamlar ve Ödüller' : '4. Ads and Rewards'}>
              <p>
                {isTR
                  ? 'Uygulama reklamlar veya ödüllü reklamlar gösterebilir. Ödüllü reklamlar izlenerek ipucu, can veya benzeri oyun içi avantajlar kazanılabilir. Reklam kullanılabilirliği bölgeye, cihaza veya reklam sağlayıcısına göre değişebilir.'
                  : 'The app may show ads or rewarded video ads. Watching rewarded ads may grant hints, lives, or in-game benefits. Ad availability may vary by region, device, or advertising provider.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Satın Alımlar ve Abonelikler' : '5. Purchases and Subscriptions'}>
              <p>
                {isTR
                  ? 'Uygulama içi satın alımlar, ipucu paketleri, reklam kaldırma veya abonelikler ilgili uygulama mağazasının (Google Play / Apple App Store) ödeme kurallarına ve politikalarına tabidir.'
                  : 'In-app purchases, hint packs, ad-removal options, or subscriptions are subject to the payment policies and terms of the respective app store (Google Play / Apple App Store).'}
              </p>
            </Section>

            <Section title={isTR ? '6. Fikri Mülkiyet' : '6. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Sudoku Quest markası, tasarımı, kodları, bulmaca seviyeleri, görselleri ve içeriği geliştiriciye veya lisans verenlerine aittir. İzinsiz kopyalanamaz veya dağıtılamaz.'
                  : 'The Sudoku Quest brand, design, source code, puzzle levels, graphics, and content belong to the developer or its licensors. Unauthorized copying or redistribution is prohibited.'}
              </p>
            </Section>

            <Section title={isTR ? '7. Sorumluluk Sınırı' : '7. Limitation of Liability'}>
              <p>
                {isTR
                  ? 'Uygulama “olduğu gibi” sunulur. Kesintisiz veya hatasız çalışma garanti edilmez. Yerel veri kayıplarından dolaylı olarak sorumluluk kabul edilmez.'
                  : 'The app is provided "as is". We do not guarantee uninterrupted or error-free operation. We are not liable for indirect damages or local data loss.'}
              </p>
            </Section>

            <Section title={isTR ? '8. İletişim' : '8. Contact'}>
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

export default SudokuTermsPage;
