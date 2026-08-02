import React from 'react';
import TileMatchNav from '@/components/TileMatchNav';
import { useLanguage } from '@/context/LanguageContext';

const Section = ({ title, children }) => (
  <section className="rounded-[1.5rem] bg-white border border-[#bbf7d0] p-6 shadow-sm">
    <h3 className="text-xl font-black mb-3 text-[#052e16]">{title}</h3>
    <div className="text-[#365314] leading-7 space-y-3">{children}</div>
  </section>
);

const TileMatchTermsPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const features = isTR
    ? [
        '3.000 çözülebilir katmanlı taş bulmaca seviyesi',
        'Geri Al (Undo) ve Karıştır (Shuffle) güçlendiricileri',
        'Seçilebilir oyun arka planları ve temalar',
        'İnternet gerektirmeyen çevrimdışı oynanış',
      ]
    : [
        '3,000 solvable layered tile puzzle levels',
        'Undo and Shuffle boosters',
        'Selectable game backgrounds and visual themes',
        'Offline core gameplay experience',
      ];

  const prohibited = isTR
    ? [
        'Yazılımı tersine mühendislikle çözmeye veya kopyalamaya çalışmak',
        'Reklam veya oyun içi mekanizmaları yanıltıcı şekilde manipüle etmek',
        'Marka görsellerini veya seviye kütüphanelerini izinsiz dağıtmak',
      ]
    : [
        'Attempting to reverse engineer or duplicate the software',
        'Manipulating ad delivery or in-game reward systems',
        'Distributing game assets or level libraries without permission',
      ];

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#052e16]">
      <TileMatchNav active="terms" />

      <main className="pt-24 sm:pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#052e16] via-[#14532d] to-[#16a34a] p-8 sm:p-10 shadow-[0_24px_60px_rgba(5,46,22,0.28)]">
            <div className="flex items-center gap-4">
              <img
                src="/games/tile-match/icon.png"
                alt="Triple Grove: Tile Match"
                className="h-12 w-12 rounded-2xl border border-white/20 object-cover"
              />
              <p className="text-[11px] font-black tracking-[0.28em] text-[#bbf7d0]">TRIPLE GROVE</p>
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-black text-white">
              {isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
            </h1>
            <p className="mt-3 text-white/70">
              {isTR ? 'Son güncelleme: 28 Temmuz 2026' : 'Last updated: July 28, 2026'}
            </p>
          </div>

          <div className="space-y-5">
            <Section title={isTR ? '1. Kullanım Kabulü' : '1. Acceptance of Terms'}>
              <p>
                {isTR
                  ? 'Triple Grove: Tile Match uygulamasını indirerek veya kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız lütfen oyunu kullanmayın.'
                  : 'By downloading or using Triple Grove: Tile Match, you agree to be bound by these terms. If you do not agree, please do not use the application.'}
              </p>
            </Section>

            <Section title={isTR ? '2. Hizmet Kapsamı' : '2. Service Description'}>
              <p>
                {isTR
                  ? 'Triple Grove: Tile Match, taş eşleştirme mekaniklerine dayalı mobil bulmaca oyunudur. Hizmet şunları kapsar:'
                  : 'Triple Grove: Tile Match is a mobile puzzle game based on tile matching mechanics. The service includes:'}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {features.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '3. Kullanım Kuralları ve Yasaklar' : '3. User Conduct and Restrictions'}>
              <ul className="list-disc list-inside space-y-2">
                {prohibited.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Section>

            <Section title={isTR ? '4. Fikri Mülkiyet' : '4. Intellectual Property'}>
              <p>
                {isTR
                  ? 'Triple Grove markası, grafik tasarımları, seviye şablonları, kod yapısı ve oyuna ait tüm varlıklar hak sahiplerine aittir. Kullanıcıya kişisel ve devredilemez bir kullanım hakkı verilir.'
                  : 'The Triple Grove brand, graphic assets, level templates, source code, and game components belong to the rights holder. Users are granted a personal, non-exclusive license for entertainment.'}
              </p>
            </Section>

            <Section title={isTR ? '5. Garanti Reddi ve Sorumluluk Sınırı' : '5. Disclaimer of Warranties'}>
              <p>
                {isTR
                  ? 'Uygulama olduğu gibi sunulur. Kesintisiz veya hatasız çalışma taahhüdü verilmez. Olası yerel veri kayıplarından sorumluluk doğmaz.'
                  : 'The application is provided "as is" without warranties of uninterrupted service. We are not responsible for any local data loss on user devices.'}
              </p>
            </Section>

            <Section title={isTR ? '6. İletişim' : '6. Contact'}>
              <p>
                {isTR
                  ? 'Kullanım koşullarıyla ilgili sorularınız için: iammustafakucukkoc@gmail.com'
                  : 'For questions regarding terms of use: iammustafakucukkoc@gmail.com'}
              </p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TileMatchTermsPage;
