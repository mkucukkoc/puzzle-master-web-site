import React from 'react';
import BrandNav from '@/components/BrandNav';
import { useLanguage } from '@/context/LanguageContext';

const ArrowTile = ({ direction = 'R', active = false, className = '' }) => {
  const rotation = { R: 0, D: 90, L: 180, U: 270 }[direction];
  return (
    <div className={`relative h-12 rounded-xl bg-white border border-[#d6e8e4] shadow-sm ${className}`}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className={`h-1.5 w-7 rounded-full ${active ? 'bg-[#0ea394]' : 'bg-[#111111]'}`} />
        <div
          className={`-ml-1 h-0 w-0 border-y-[7px] border-y-transparent border-l-[12px] ${
            active ? 'border-l-[#0ea394]' : 'border-l-[#111111]'
          }`}
        />
      </div>
    </div>
  );
};

const PuzzlePreview = () => (
  <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-white p-5 shadow-[0_24px_80px_rgba(31, 61, 58, 0.16)] border border-[#d6e8e4]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#0ea394]/10" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#1f3d3a]/10" />
    <div className="relative grid grid-cols-5 gap-3">
      <ArrowTile direction="R" />
      <ArrowTile direction="D" />
      <ArrowTile direction="L" />
      <ArrowTile direction="R" />
      <ArrowTile direction="D" />
      <ArrowTile direction="U" />
      <ArrowTile direction="R" active />
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
    <div className="relative mt-5 rounded-2xl bg-[#e7f2f0] p-4 border border-[#d6e8e4]">
      <div className="flex items-center justify-between text-xs font-semibold text-[#8a9d9a]">
        <span>LEVEL 29</span>
        <span className="text-[#0ea394]">HORSE MAZE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-[#d6e8e4] overflow-hidden">
        <div className="h-full w-2/3 rounded-full bg-[#0ea394]" />
      </div>
    </div>
  </div>
);

const BoomPreview = () => (
  <div className="relative mx-auto w-full max-w-sm rounded-[2rem] bg-[#251b52] p-5 shadow-[0_24px_80px_rgba(37, 27, 82, 0.22)] border border-[#d8d2f4]">
    <div className="absolute -top-5 -right-5 h-20 w-20 rounded-full bg-[#8f74ff]/15" />
    <div className="absolute -bottom-6 -left-5 h-24 w-24 rounded-full bg-[#ffb800]/10" />
    <div className="relative grid grid-cols-4 gap-3">
      {[
        '#ff5252', '#ff5252', '#ffb800', '#ffb800',
        '#ff5252', '#ff5252', '#ffb800', '#ffb800',
        '#59d56b', '#59d56b', '#4e7eff', '#4e7eff',
        '#59d56b', '#59d56b', '#4e7eff', '#4e7eff',
      ].map((color, index) => (
        <div
          key={`${color}-${index}`}
          className="relative h-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-5px_10px_rgba(0,0,0,0.25)]"
          style={{ background: `linear-gradient(135deg, ${color}, ${color}cc 60%, rgba(255,255,255,0.15))` }}
        >
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
        </div>
      ))}
    </div>
    <div className="relative mt-5 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d9d1ff]">
        <span>BOOSTED PUZZLE</span>
        <span className="text-[#ffb800]">BOOM MODE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#ff5252] via-[#ffb800] to-[#59d56b]" />
      </div>
    </div>
  </div>
);

const AppCard = ({ title, subtitle, description, preview, primaryHref, primaryLabel, secondaryHref, secondaryLabel, accentClass }) => (
  <div className="rounded-[2rem] border border-[#d6e8e4] bg-white p-5 sm:p-6 shadow-[0_24px_80px_rgba(31, 61, 58, 0.12)]">
    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-center">
      <div>
        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.18em] ${accentClass}`}>
          {subtitle}
        </div>
        <h3 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-[#1f3d3a]">{title}</h3>
        <p className="mt-4 text-[#8a9d9a] leading-7">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={primaryHref} className="rounded-full bg-[#0ea394] px-5 py-3 font-bold text-white hover:bg-[#0b7f74] transition-colors">
            {primaryLabel}
          </a>
          <a href={secondaryHref} className="rounded-full bg-white px-5 py-3 font-bold text-[#1f3d3a] border border-[#d6e8e4] hover:border-[#0ea394]/40 transition-colors">
            {secondaryLabel}
          </a>
        </div>
      </div>
      <div>{preview}</div>
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
    <div className="min-h-screen bg-[#ffffff] text-[#1f3d3a]">
      <BrandNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8e7e1] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#0ea394]">
                <span className="h-2 w-2 rounded-full bg-[#0ea394]" />
                {hero.eyebrow}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Arrows
                <span className="block text-[#0ea394]">Puzzle</span>
                Master
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#8a9d9a] leading-8">
                {hero.desc}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#try-app"
                  className="rounded-full bg-[#0ea394] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(14, 163, 148, 0.26)] hover:bg-[#0b7f74] transition-colors"
                >
                  {hero.cta}
                </a>
                <a
                  href="/privacy"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#1f3d3a] border border-[#d6e8e4] hover:border-[#0ea394]/40 transition-colors"
                >
                  {hero.secondary}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#d6e8e4] p-4">
                    <div className="text-2xl font-black text-[#1f3d3a]">{value}</div>
                    <div className="mt-1 text-xs text-[#8a9d9a]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(14, 163, 148, 0.22),transparent_50%)] blur-2xl" />
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
              <p className="mt-4 text-[#8a9d9a] max-w-2xl mx-auto">
                {isTR
                  ? 'Her seviye veriyle tanımlanan ok parçalarından oluşur. Amaç, yolu açık olan okları seçerek tahtayı temizlemek.'
                  : 'Each level is built from data-defined arrow pieces. Your goal is to pick clear arrows and empty the board.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#ffffff] border border-[#d6e8e4] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#1f3d3a] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#8a9d9a]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-[#fbfaff] border-y border-[#ebe6ff]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#6a45d8]">
                {isTR ? 'İKİ OYUN, TEK SİTE' : 'TWO GAMES, ONE SITE'}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#251b52]">
                {isTR ? 'Puzzle ve Block Boom birlikte' : 'Puzzle and Block Boom together'}
              </h2>
              <p className="mt-4 text-[#7b6cb2] max-w-2xl mx-auto">
                {isTR
                  ? 'Ana sayfadan iki uygulamayı da keşfedebilir, her biri için ayrı gizlilik ve kullanım koşulları sayfalarına ulaşabilirsiniz.'
                  : 'Discover both apps from the home page and open separate privacy and terms pages for each one.'}
              </p>
            </div>

            <div className="mt-10 grid lg:grid-cols-2 gap-6">
              <AppCard
                subtitle={isTR ? 'MEVCUT OYUN' : 'CURRENT GAME'}
                title="Arrows Puzzle Master"
                description={isTR
                  ? 'Grid tabanlı ok bulmacaları, hayvan temalı seviyeler ve temiz bir arayüzle mevcut puzzle deneyimi.'
                  : 'The existing puzzle experience with grid-based arrow levels, animal-themed boards, and a clean interface.'}
                preview={<PuzzlePreview />}
                primaryHref="/privacy"
                primaryLabel={isTR ? 'Gizlilik' : 'Privacy'}
                secondaryHref="/terms"
                secondaryLabel={isTR ? 'Koşullar' : 'Terms'}
                accentClass="bg-[#e7f2f0] text-[#0ea394] border border-[#c8e7e1]"
              />
              <AppCard
                subtitle={isTR ? 'YENİ OYUN' : 'NEW GAME'}
                title="Block Boom!"
                description={isTR
                  ? 'Renkli bloklar, daha vurucu görsel dil ve ayrı legal sayfalarla yeni oyun sayfası.'
                  : 'A new game page with colorful blocks, a punchier visual language, and separate legal pages.'}
                preview={<BoomPreview />}
                primaryHref="/block-boom/privacy.html"
                primaryLabel={isTR ? 'Gizlilik' : 'Privacy'}
                secondaryHref="/block-boom/terms.html"
                secondaryLabel={isTR ? 'Koşullar' : 'Terms'}
                accentClass="bg-[#f1ecff] text-[#6a45d8] border border-[#ddd4ff]"
              />
            </div>
          </div>
        </section>

        <footer className="px-6 py-10 text-center text-sm text-[#8a9d9a]">
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
