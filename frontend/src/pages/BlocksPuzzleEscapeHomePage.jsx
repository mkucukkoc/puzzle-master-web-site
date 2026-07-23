import React from 'react';
import BlocksPuzzleEscapeNav from '@/components/BlocksPuzzleEscapeNav';
import { useLanguage } from '@/context/LanguageContext';

const BlockTile = ({ color }) => (
  <div
    className="relative h-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-5px_10px_rgba(0,0,0,0.25)]"
    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc 60%, rgba(255,255,255,0.15))` }}
  >
    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
  </div>
);

const BlocksPreview = () => (
  <div className="relative mx-auto w-full max-w-xl rounded-[2rem] bg-[#17345f] p-6 sm:p-7 shadow-[0_24px_80px_rgba(23, 52, 95, 0.2)] border border-[#cfe1ff] overflow-hidden">
    <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#1f7cff]/15" />
    <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#17c3b2]/12" />
    <div className="relative flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-bold tracking-[0.22em] text-[#d9ecff]">BLOCKS - PUZZLE ESCAPE</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white leading-[0.95]">
          Open the path.
          <span className="block text-[#17c3b2]">Escape cleanly.</span>
        </h1>
        <p className="mt-4 max-w-lg text-sm sm:text-base leading-7 text-[#d9ecff]">
          A separate puzzle landing page built for Blocks - Puzzle Escape, with its own privacy and terms pages.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/blocks-puzzle-escape/privacy" className="rounded-full bg-[#1f7cff] px-5 py-3 font-bold text-white hover:opacity-90 transition-opacity">
            Privacy
          </a>
          <a href="/blocks-puzzle-escape/terms" className="rounded-full bg-white px-5 py-3 font-bold text-[#17345f] hover:bg-[#f0f6ff] transition-colors">
            Terms
          </a>
        </div>
      </div>
    </div>

    <div className="relative mt-7 grid grid-cols-4 gap-3">
      {['#1f7cff', '#1f7cff', '#17c3b2', '#17c3b2', '#1f7cff', '#1f7cff', '#17c3b2', '#17c3b2', '#0ea394', '#0ea394', '#ffb800', '#ffb800', '#0ea394', '#0ea394', '#ffb800', '#ffb800'].map((color, index) => (
        <BlockTile key={`${color}-${index}`} color={color} />
      ))}
    </div>
  </div>
);

const BlocksPuzzleEscapeHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const features = isTR
    ? [
        ['Mavi/teal blok dili', 'Yeni marka için daha parlak, mağazaya uygun bir görsel stil.'],
        ['Ayrı legal yapı', 'Blocks - Puzzle Escape için ayrı privacy ve terms sayfaları.'],
        ['Hızlı yönlendirme', 'Ana siteden veya direkt landing page’den legal sayfalara geçiş.'],
      ]
    : [
        ['Blue/teal block look', 'A brighter, store-friendly visual style for the new brand.'],
        ['Separate legal stack', 'Dedicated privacy and terms pages for Blocks - Puzzle Escape.'],
        ['Fast navigation', 'Quick jumps to legal pages from the main site or landing page.'],
      ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#17345f]">
      <BlocksPuzzleEscapeNav active="home" />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cfe1ff] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#1f7cff]">
                <span className="h-2 w-2 rounded-full bg-[#1f7cff]" />
                {isTR ? 'AYRI OYUN SAYFASI' : 'SEPARATE GAME PAGE'}
              </div>
              <h2 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Blocks
                <span className="block text-[#1f7cff]">Puzzle Escape</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-[#6b86af] leading-8">
                {isTR
                  ? 'Blocks - Puzzle Escape için ayrı bir açılış sayfası. Mağaza, legal ve tanıtım akışı puzzle sayfasından bağımsız tutulur.'
                  : 'A separate landing page for Blocks - Puzzle Escape, keeping store, legal, and promo flows independent from the puzzle page.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/blocks-puzzle-escape/privacy"
                  className="rounded-full bg-[#1f7cff] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(31,124,255,0.22)] hover:bg-[#1666d1] transition-colors"
                >
                  {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </a>
                <a
                  href="/blocks-puzzle-escape/terms"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#17345f] border border-[#cfe1ff] hover:border-[#1f7cff]/40 transition-colors"
                >
                  {isTR ? 'Kullanım Koşulları' : 'Terms of Use'}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {[
                  ['2', isTR ? 'legal sayfa' : 'legal pages'],
                  ['1', isTR ? 'ayrı landing' : 'separate landing'],
                  ['0', isTR ? 'puzzle bozulması' : 'puzzle changes'],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#cfe1ff] p-4">
                    <div className="text-2xl font-black text-[#17345f]">{value}</div>
                    <div className="mt-1 text-xs text-[#6b86af]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(31,124,255,0.22),transparent_50%)] blur-2xl" />
              <BlocksPreview />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white border-y border-[#dfeaff]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#1f7cff]">
                {isTR ? 'NEDEN AYRI?' : 'WHY SEPARATE?'}
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-black text-[#17345f]">
                {isTR ? 'Puzzle sayfasına dokunmadan yeni marka alanı' : 'New brand space without touching the puzzle page'}
              </h3>
              <p className="mt-4 text-[#6b86af] max-w-2xl mx-auto">
                {isTR
                  ? 'Bu sayfa yalnızca Blocks - Puzzle Escape tanıtımı içindir; mevcut Arrows Puzzle Master ekran akışı ve yeşil renk dili aynı kalır.'
                  : 'This page is only for Blocks - Puzzle Escape promotion; the existing Arrows Puzzle Master flow and green color language remain unchanged.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#ffffff] border border-[#cfe1ff] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#17345f] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h4 className="mt-5 text-xl font-black text-[#17345f]">{title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#6b86af]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlocksPuzzleEscapeHomePage;
