import React from 'react';
import ScrewMasterNav from '@/components/ScrewMasterNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-[#0c162d] border border-white/10 p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-white">{title}</h3>
    <div className="text-white/80 leading-7 space-y-3">{children}</div>
  </section>
);

const ScrewMasterTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#070b16] text-white">
      <ScrewMasterNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#2d1205] via-[#9a3412] to-[#ea580c] p-8 sm:p-10 shadow-[0_24px_60px_rgba(234,88,12,0.25)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/screw-master/icon.png"
                alt="Screw Master: Nuts & Bolts"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#ffedd5]">SCREW MASTER</p>
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
                  ? 'Screw Master: Nuts & Bolts oyununu indirerek veya kullanarak bu kullanım koşullarını kabul etmiş olursunuz.'
                  : 'By downloading or using Screw Master: Nuts & Bolts, you agree to these Terms of Use.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Lisans ve Kullanım' : '2. License and Usage'}>
              <p>
                {isTR
                  ? 'Size, uygulamayı kişisel ve ticari olmayan amaçlarla kullanmanız için kişisel bir lisans verilmektedir.'
                  : 'You are granted a personal, non-commercial license to use the app.'}
              </p>
            </Section>

            <Section title={isTR ? '3. Fikri Mülkiyet' : '3. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Screw Master oyunundaki tüm tasarımlar, grafikler, vida animasyonları ve marka unsurları geliştiriciye aittir.'
                  : 'All visual assets, animations, design, and branding belong to the developer.'}
              </p>
            </Section>

            <Section title={isTR ? '4. İletişim' : '4. Contact'}>
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

export default ScrewMasterTermsPage;
