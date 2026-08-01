import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TileMatchNav from '@/components/TileMatchNav';

const TilePreview = () => (
  <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#052e16] p-4 shadow-[0_24px_80px_rgba(5,46,22,0.22)] border border-[#bbf7d0]">
    <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#16a34a]/20" />
    <div className="absolute -bottom-7 -left-6 h-28 w-28 rounded-full bg-[#eab308]/15" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a4722]">
      <img
        src="/games/tile-match/feature.png"
        alt="Triple Grove: Tile Match feature graphic"
        className="h-auto w-full object-cover"
      />
      <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 px-3 py-2 backdrop-blur-md">
        <img
          src="/games/tile-match/icon.png"
          alt="Triple Grove: Tile Match icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#bbf7d0]">TRIPLE GROVE</div>
          <div className="text-sm font-black text-white">Tile Match</div>
        </div>
      </div>
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#bbf7d0]">
        <span>7-SLOT TRAY</span>
        <span className="text-[#facc15]">TRIPLE MATCH</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#16a34a] via-[#eab308] to-[#22c55e]" />
      </div>
    </div>
  </div>
);

const AppCard = ({
  title,
  subtitle,
  description,
  preview,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  accentClass,
}) => (
  <div className="rounded-[2rem] border border-[#bbf7d0] bg-white p-5 sm:p-6 shadow-[0_24px_80px_rgba(5,46,22,0.12)]">
    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center">
      <div>
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.18em] ${accentClass}`}>
          {subtitle}
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-[#052e16]">{title}</h3>
        <p className="mt-4 text-[#365314] leading-7">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="rounded-full bg-[#16a34a] px-5 py-3 font-bold text-white hover:bg-[#15803d] transition-colors"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="rounded-full bg-white px-5 py-3 font-bold text-[#052e16] border border-[#bbf7d0] hover:border-[#16a34a]/40 transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
      <div>{preview}</div>
    </div>
  </div>
);

const TileMatchHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const hero = {
    eyebrow: isTR ? 'ÜÇLÜ TAŞ EŞLEŞTİRME' : 'TRIPLE TILE MATCHING',
    title: 'Triple Grove: Tile Match',
    desc: isTR
      ? 'Katmanlı tahtalarda aynı taşları bul, 7 slotluk tepsiye yerleştir ve 3.000 çözülebilir bölümü temizle. Dinlendirici, zevkli ve çevrimdışı oynanabilen üçlü eşleştirme bulmacası.'
      : 'Find matching tiles on layered boards, collect them in the 7-slot tray, and clear 3,000 solvable levels. A calm, satisfying, offline-friendly triple tile puzzle.',
    cta: isTR ? 'Gizlilik Politikası' : 'Privacy Policy',
    secondary: isTR ? 'Kullanım Koşulları' : 'Terms of Use',
  };

  const features = isTR
    ? [
        ['3.000 Çözülebilir Seviye', 'Seviyeler rastgele dağıtılmaz; tepsiyi taşırmadan çözülebileceği garanti edilmiş 3 parkur bulunur.'],
        ['Güçlendiriciler ve Temalar', 'Geri al, karıştır boosterları ve 10 farklı renkli arka plan sahnesi.'],
        ['Çevrimdışı ve Rahat', 'İnternet bağlantısı gerektirmez, tek elle kolayca oynanabilir.'],
      ]
    : [
        ['3,000 Solvable Levels', 'Levels are not random; 3 difficulty tracks guaranteed solvable without overflowing the 7-slot tray.'],
        ['Boosters & Themes', 'Undo and shuffle boosters with 10 vibrant selectable background scenes.'],
        ['Offline & Relaxing', 'No internet required for core gameplay, optimized for smooth single-handed play.'],
      ];

  const stats = isTR
    ? [
        ['3.000', 'çözülebilir bölüm'],
        ['10', 'arka plan sahnesi'],
        ['7', 'slotluk tepsi'],
      ]
    : [
        ['3,000', 'solvable levels'],
        ['10', 'background scenes'],
        ['7', 'tray slots'],
      ];

  return (
    <div className="min-h-screen bg-[#f0fdf4] text-[#052e16]">
      <TileMatchNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#16a34a]">
                <span className="h-2 w-2 rounded-full bg-[#16a34a]" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Triple Grove
                <span className="block text-[#16a34a]">Tile Match</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#365314] leading-8">
                {hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/tile-match/privacy"
                  className="rounded-full bg-[#16a34a] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(22,163,74,0.26)] hover:bg-[#15803d] transition-colors"
                >
                  {hero.cta}
                </a>
                <a
                  href="/tile-match/terms"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#052e16] border border-[#bbf7d0] hover:border-[#16a34a]/40 transition-colors"
                >
                  {hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#bbf7d0] p-4">
                    <div className="text-2xl font-black text-[#052e16]">{value}</div>
                    <div className="mt-1 text-xs text-[#365314]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,197,94,0.18),transparent_50%)] blur-2xl" />
              <TilePreview />
            </div>
          </div>
        </section>

        <section id="legal" className="px-6 py-16 bg-white scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black">
                {isTR ? 'Öğrenmesi kolay, ustalaşması zevkli.' : 'Easy to learn, fun to master.'}
              </h2>
              <p className="mt-4 text-[#365314] max-w-2xl mx-auto">
                {isTR
                  ? 'Triple Grove: Tile Match, 3 aynı taşı tepside buluşturarak tahtayı temizlediğiniz rahatlatıcı bir bulmaca oyunudur. Ayrı legal ve veri sayfaları ile Google Play ve App Store standartlarına uygundur.'
                  : 'Triple Grove: Tile Match is a relaxing puzzle game where you clear the board by matching 3 identical tiles in the tray. Fully compliant with Google Play and App Store requirements.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#f0fdf4] border border-[#bbf7d0] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#052e16] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#365314]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <AppCard
                subtitle={isTR ? 'MAĞAZA UYUMLU OYUN' : 'STORE READY GAME'}
                title="Triple Grove: Tile Match"
                description={isTR
                  ? 'Üçlü taş eşleştirme, 3.000 seviye ve ayrı legal sayfalarla hazırlanmış mobil bulmaca oyunu.'
                  : 'Triple tile matching with 3,000 levels and separate legal pages ready for app store distribution.'}
                preview={<TilePreview />}
                primaryHref="https://play.google.com/store/apps/details?id=com.mkucukkoc.triplegrove"
                primaryLabel="Google Play"
                secondaryHref="/tile-match/privacy"
                secondaryLabel={isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
                accentClass="bg-[#dcfce7] text-[#16a34a] border border-[#bbf7d0]"
              />
            </div>
          </div>
        </section>

        <footer className="px-6 py-10 text-center text-sm text-[#365314]">
          <img
            src="/games/tile-match/icon.png"
            alt="Triple Grove: Tile Match"
            className="mx-auto mb-4 h-14 w-14 rounded-2xl object-cover shadow-md"
          />
          <p>© 2026 Triple Grove: Tile Match</p>
        </footer>
      </main>
    </div>
  );
};

export default TileMatchHomePage;
