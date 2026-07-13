import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import CarPuzzleNav from '@/components/CarPuzzleNav';

const RoadTile = ({ className = '', active = false, direction = 'straight' }) => {
  const rotate = {
    straight: '0deg',
    left: '180deg',
    right: '0deg',
    up: '270deg',
    down: '90deg',
  }[direction];

  return (
    <div
      className={`relative h-14 rounded-2xl bg-white border border-[#cfe0ec] shadow-sm overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,92,171,0.05),transparent_48%,rgba(255,180,84,0.08))]" />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${rotate})` }}
      >
        <div className={`h-1.5 w-8 rounded-full ${active ? 'bg-[#0f5cab]' : 'bg-[#11304e]'}`} />
        <div
          className={`-ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] ${
            active ? 'border-l-[#0f5cab]' : 'border-l-[#11304e]'
          }`}
        />
      </div>
    </div>
  );
};

const CarPreview = () => (
  <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-[#082f51] p-5 shadow-[0_24px_80px_rgba(8,47,81,0.22)] border border-[#bed6ea]">
    <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-[#3fc9ff]/15" />
    <div className="absolute -bottom-7 -left-6 h-28 w-28 rounded-full bg-[#ffb454]/10" />
    <div className="relative grid grid-cols-4 gap-3">
      <RoadTile active />
      <RoadTile direction="right" />
      <RoadTile direction="down" />
      <RoadTile direction="left" />
      <RoadTile direction="up" />
      <RoadTile direction="straight" active />
      <RoadTile direction="right" />
      <RoadTile direction="down" />
      <RoadTile direction="left" />
      <RoadTile direction="up" />
      <RoadTile direction="straight" />
      <RoadTile direction="right" />
      <RoadTile direction="down" />
      <RoadTile direction="left" active />
      <RoadTile direction="up" />
      <RoadTile direction="straight" />
    </div>
    <div className="relative mt-5 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#cfe0ec]">
        <span>PARKING LOT</span>
        <span className="text-[#ffb454]">TRAFFIC MODE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#3fc9ff] via-[#0f5cab] to-[#ffb454]" />
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
  <div className="rounded-[2rem] border border-[#cfe0ec] bg-white p-5 sm:p-6 shadow-[0_24px_80px_rgba(17,48,78,0.12)]">
    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center">
      <div>
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.18em] ${accentClass}`}>
          {subtitle}
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-[#11304e]">{title}</h3>
        <p className="mt-4 text-[#5f7692] leading-7">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            className="rounded-full bg-[#0f5cab] px-5 py-3 font-bold text-white hover:bg-[#0b4a87] transition-colors"
          >
            {primaryLabel}
          </a>
          <a
            href={secondaryHref}
            className="rounded-full bg-white px-5 py-3 font-bold text-[#11304e] border border-[#cfe0ec] hover:border-[#0f5cab]/40 transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
      <div>{preview}</div>
    </div>
  </div>
);

const CarPuzzleHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const hero = {
    eyebrow: isTR ? 'ARABA TEMALI BULMACA' : 'TRAFFIC PUZZLE GAME',
    title: isTR ? 'Cars -Puzzle Escape' : 'Cars -Puzzle Escape',
    desc: isTR
      ? 'Park alanını aç, araçları doğru sırayla çıkar ve her seviyeyi pürüzsüz bir akışla tamamla. Ayrı legal sayfalar ve sade bir site yapısıyla yayın için hazır bir sayfa.'
      : 'Clear the lot, move vehicles in the right order, and finish every level with a smooth flow. A separate legal stack and a clean site layout make it ready for store publishing.',
    cta: isTR ? 'Gizlilik Politikası' : 'Privacy Policy',
    secondary: isTR ? 'Kullanım Şartları' : 'Terms of Use',
  };

  const features = isTR
    ? [
        ['Sıkışık trafik mantığı', 'Her araç yalnızca uygun yönde hareket eder; doğru sırayı bulmak oyunun ana fikridir.'],
        ['Temiz mağaza akışı', 'Gizlilik, kullanım şartları ve veri silme sayfaları ayrı tutulur.'],
        ['Hızlı tekrar denemeleri', 'Kısa seviyeler, rahat oynanış ve net görsel geri bildirim.'],
      ]
    : [
        ['Packed-lot logic', 'Each vehicle moves only in a valid direction; finding the right order is the core challenge.'],
        ['Clean store flow', 'Privacy, terms, and data deletion are handled on separate pages.'],
        ['Fast replay loops', 'Short levels, smooth play, and clear visual feedback.'],
      ];

  const stats = isTR
    ? [
        ['40+', 'tasarlanmış bölüm'],
        ['2', 'dil desteği'],
        ['1', 'ayrı legal akış'],
      ]
    : [
        ['40+', 'crafted levels'],
        ['2', 'language support'],
        ['1', 'dedicated legal flow'],
      ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#11304e]">
      <CarPuzzleNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#bed6ea] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#0f5cab]">
                <span className="h-2 w-2 rounded-full bg-[#0f5cab]" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Cars
                <span className="block text-[#0f5cab]">Puzzle</span>
                Escape
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#5f7692] leading-8">
                {hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#legal"
                  className="rounded-full bg-[#0f5cab] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(15,92,171,0.26)] hover:bg-[#0b4a87] transition-colors"
                >
                  {hero.cta}
                </a>
                <a
                  href="/car-puzzle/terms"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#11304e] border border-[#cfe0ec] hover:border-[#0f5cab]/40 transition-colors"
                >
                  {hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#cfe0ec] p-4">
                    <div className="text-2xl font-black text-[#11304e]">{value}</div>
                    <div className="mt-1 text-xs text-[#5f7692]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(63,201,255,0.18),transparent_50%)] blur-2xl" />
              <CarPreview />
            </div>
          </div>
        </section>

        <section id="legal" className="px-6 py-16 bg-white scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black">
                {isTR ? 'Kolay görünür, akıcı çözülür.' : 'Looks easy, flows smoothly.'}
              </h2>
              <p className="mt-4 text-[#5f7692] max-w-2xl mx-auto">
                {isTR
                  ? 'Cars -Puzzle Escape, seviyeleri veriyle tanımlanan araç bulmacalarıyla sunar. Oyunun mağaza sayfaları, gizlilik ve veri silme bağlantıları ayrı tutulur.'
                  : 'Cars -Puzzle Escape presents data-defined vehicle puzzles. Store pages, privacy, and data deletion links are kept separate and easy to find.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#f7fbff] border border-[#cfe0ec] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#11304e] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f7692]">{desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <AppCard
                subtitle={isTR ? 'YENİ OYUN' : 'NEW GAME'}
                title="Cars -Puzzle Escape"
                description={isTR
                  ? 'Trafik sıkışıklığı, temiz arayüz ve mağaza uyumlu ayrı legal sayfalarla hazırlanmış araba bulmaca sayfası.'
                  : 'A traffic-puzzle landing page with a clean interface and separate legal pages ready for store publishing.'}
                preview={<CarPreview />}
                primaryHref="/car-puzzle"
                primaryLabel={isTR ? 'Açılış Sayfası' : 'Landing Page'}
                secondaryHref="/car-puzzle/privacy"
                secondaryLabel={isTR ? 'Gizlilik' : 'Privacy'}
                accentClass="bg-[#eaf4fb] text-[#0f5cab] border border-[#cfe0ec]"
              />
            </div>
          </div>
        </section>

        <footer className="px-6 py-10 text-center text-sm text-[#5f7692]">
          <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-[#082f51] border border-[#bed6ea] shadow-md flex items-center justify-center text-white font-black">
            C
          </div>
          <p>© 2026 Cars -Puzzle Escape</p>
        </footer>
      </main>
    </div>
  );
};

export default CarPuzzleHomePage;
