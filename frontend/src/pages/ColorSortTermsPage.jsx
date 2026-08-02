import React from 'react';
import ColorSortNav from '@/components/ColorSortNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const ColorSortTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <ColorSortNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#082f49] via-[#0e7490] to-[#06b6d4] p-8 sm:p-10 shadow-[0_24px_60px_rgba(6,182,212,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/color-sort/icon.png"
                alt="Color Sort: Water Puzzle"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#e0f2fe]">COLOR SORT</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-white/80">
              {isTR ? 'Son güncelleme: 2 Ağustos 2026' : 'Last updated: August 2, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Hizmet Koşullarının Kabulü' : '1. Acceptance of Terms'}>
              <p>
                {isTR
                  ? 'Color Sort: Water Puzzle oyununu indirerek veya kullanarak bu kullanım koşullarını kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen uygulamayı kullanmayın.'
                  : 'By downloading or using Color Sort: Water Puzzle, you agree to these Terms of Use. If you do not accept these terms, please do not use the application.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Lisans ve Kullanım' : '2. License and Usage'}>
              <p>
                {isTR
                  ? 'Size, uygulamayı kişisel ve ticari olmayan amaçlarla kullanmanız için devredilemez, münhasır olmayan kişisel bir lisans verilmektedir.'
                  : 'You are granted a non-exclusive, non-transferable personal license to use the app for personal, non-commercial entertainment purposes.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Fikri Mülkiyet' : '3. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Color Sort oyunundaki tüm grafikler, tasarım, kodlar, animasyonlar ve marka unsurları geliştiriciye aittir ve telif hakları ile korunmaktadır.'
                  : 'All visual assets, code, animations, designs, and brand elements in Color Sort are protected by intellectual property laws and belong to the developer.'}
              </p>
            </Section>

            <Section title={isTR ? '4. Sorumluluk Sınırlaması' : '4. Limitation of Liability'}>
              <p>
                {isTR
                  ? 'Uygulama "olduğu gibi" sunulmaktadır. Geliştirici, kesintisiz çalışma veya veri kaybı gibi durumlardan doğabilecek dolaylı zararlardan sorumlu tutulamaz.'
                  : 'The application is provided "as is". The developer is not liable for indirect damages, device incompatibilities, or lost save data.'}
              </p>
            </Section>

            <Section title={isTR ? '5. İletişim' : '5. Contact'}>
              <p>
                {isTR
                  ? 'Kullanım koşullarıyla ilgili sorularınız için: iammustafakucukkoc@gmail.com'
                  : 'For questions regarding the terms of use: iammustafakucukkoc@gmail.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ColorSortTermsPage;
