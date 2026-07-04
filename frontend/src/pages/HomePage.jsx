import React from 'react';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const ArrowTile = ({ direction = 'R', red = false, className = '' }) => {
  const rotation = { R: 0, D: 90, L: 180, U: 270 }[direction];
  return (
    <div className={`relative h-12 rounded-xl bg-white border border-[#dfe3f3] shadow-sm ${className}`}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className={`h-1.5 w-7 rounded-full ${red ? 'bg-[#e5484d]' : 'bg-[#111111]'}`} />
        <div
          className={`-ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] ${
            red ? 'border-l-[#e5484d]' : 'border-l-[#111111]'
          }`}
        />
      </div>
    </div>
  );
};

const PuzzlePreview = () => (
  <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-white p-5 shadow-[0_24px_80px_rgba(39,48,82,0.16)] border border-[#dfe3f3]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#e5484d]/10" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#273052]/10" />
    <div className="relative grid grid-cols-5 gap-3">
      <ArrowTile direction="R" />
      <ArrowTile direction="D" />
      <ArrowTile direction="L" />
      <ArrowTile direction="R" />
      <ArrowTile direction="D" />
      <ArrowTile direction="U" />
      <ArrowTile direction="R" red />
      <ArrowTile direction="D" />
      <ArrowTile direction="L" />
      <ArrowTile direction="U" />
      <ArrowTile direction="R" />
      <ArrowTile direction="U" />
      <ArrowTile direction="R" />
      <ArrowTile direction="D" />
      <ArrowTile direction="L" />
      <ArrowTile direction="D" />
      <ArrowTile direction="L" />
      <ArrowTile direction="U" />
      <ArrowTile direction="R" />
      <ArrowTile direction="U" />
    </div>
    <div className="relative mt-5 rounded-2xl bg-[#f7f8fc] p-4 border border-[#e8ebf6]">
      <div className="flex items-center justify-between text-xs font-semibold text-[#68708a]">
        <span>LEVEL 29</span>
        <span className="text-[#e5484d]">HORSE MAZE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-[#dfe3f3] overflow-hidden">
        <div className="h-full w-2/3 rounded-full bg-[#e5484d]" />
      </div>
    </div>
  </div>
);

const HomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const hero = {
    eyebrow: isTR ? 'MINIMAL OK PUZZLE OYUNU' : 'MINIMAL ARROW PUZZLE GAME',
    title: isTR ? 'Arrows Puzzle Master' : 'Arrows Puzzle Master',
    desc: isTR
      ? 'Okları doğru sırayla serbest bırak, çarpışmaları çöz ve her seviyeyi tertemiz bir grid üzerinde tamamla.'
      : 'Release arrows in the right order, solve collisions, and clear every level on a clean grid.',
    cta: isTR ? 'Oyunu Keşfet' : 'Explore the Game',
    secondary: isTR ? 'Gizlilik Politikası' : 'Privacy Policy',
  };

  const features = isTR
    ? [
        ['Grid tabanlı zeka', 'Her ok yatay veya dikey eksende ilerler; doğru sırayı bulmak oyunun kalbidir.'],
        ['Hayvan seviye setleri', 'Aslan, zürafa, at ve daha fazlası için silüet benzeri puzzle düzenleri.'],
        ['Kısa ve temiz oynanış', 'Hızlı denemeler, can sistemi, ipuçları ve sade görsel dil.'],
      ]
    : [
        ['Grid-based logic', 'Every arrow moves horizontally or vertically; finding the right order is the core challenge.'],
        ['Animal level sets', 'Silhouette-like puzzle layouts for lion, giraffe, horse, and more.'],
        ['Clean quick sessions', 'Fast attempts, hearts, hints, and a minimal visual language.'],
      ];

  const stats = isTR
    ? [
        ['60+', 'tasarlanmış seviye'],
        ['90°', 'net grid hareketi'],
        ['3', 'can ile strateji'],
      ]
    : [
        ['60+', 'authored levels'],
        ['90°', 'strict grid motion'],
        ['3', 'hearts for strategy'],
      ];

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-[#273052]">
      <BrandNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f2c7c9] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#e5484d]">
                <span className="h-2 w-2 rounded-full bg-[#e5484d]" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Arrows
                <span className="block text-[#e5484d]">Puzzle</span>
                Master
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#68708a] leading-8">
                {hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#try-app"
                  className="rounded-full bg-[#e5484d] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(229,72,77,0.26)] hover:bg-[#c9363b] transition-colors"
                >
                  {hero.cta}
                </a>
                <a
                  href="/privacy"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#273052] border border-[#dfe3f3] hover:border-[#e5484d]/40 transition-colors"
                >
                  {hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#dfe3f3] p-4">
                    <div className="text-2xl font-black text-[#273052]">{value}</div>
                    <div className="mt-1 text-xs text-[#68708a]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(229,72,77,0.22),transparent_50%)] blur-2xl" />
              <PuzzlePreview />
            </div>
          </div>
        </section>

        <section id="try-app" className="px-6 py-16 bg-white scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black">
                {isTR ? 'Basit görünür, akıllıca çözülür.' : 'Looks simple, solves smart.'}
              </h2>
              <p className="mt-4 text-[#68708a] max-w-2xl mx-auto">
                {isTR
                  ? 'Her seviye veriyle tanımlanan ok parçalarından oluşur. Amaç, yolu açık olan okları seçerek tahtayı temizlemek.'
                  : 'Each level is built from data-defined arrow pieces. Your goal is to pick clear arrows and empty the board.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#fbfaf7] border border-[#e8ebf6] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#273052] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#68708a]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="px-6 py-10 text-center text-sm text-[#68708a]">
          <img
            src="/arrows-puzzle-master-icon.png"
            alt="Arrows Puzzle Master"
            className="mx-auto mb-4 h-14 w-14 rounded-2xl object-cover shadow-md"
          />
          <p>© 2026 Arrows Puzzle Master</p>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
