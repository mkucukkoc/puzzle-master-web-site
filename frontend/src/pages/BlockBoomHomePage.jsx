import React from 'react';
import BlockBoomNav from '@/components/BlockBoomNav';
import { useLanguage } from '@/context/LanguageContext';

const BlockTile = ({ color }) => (
  <div
    className="relative h-16 rounded-2xl border border-white/10 shadow-[inset_0_2px_0_rgba(255,255,255,0.25),inset_0_-5px_10px_rgba(0,0,0,0.25)]"
    style={{ background: `linear-gradient(135deg, ${color}, ${color}cc 60%, rgba(255,255,255,0.15))` }}
  >
    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
  </div>
);

const BlockBoomHero = () => (
  <div className="relative mx-auto w-full max-w-xl rounded-[2rem] bg-[#251b52] p-6 sm:p-7 shadow-[0_24px_80px_rgba(37, 27, 82, 0.22)] border border-[#d8d2f4] overflow-hidden">
    <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#8f74ff]/15" />
    <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#ffb800]/10" />
    <div className="relative flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-bold tracking-[0.22em] text-[#d9d1ff]">BLOCK BOOM!</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight text-white leading-[0.95]">
          Big colors.
          <span className="block text-[#ffb800]">Fast clears.</span>
        </h1>
        <p className="mt-4 max-w-lg text-sm sm:text-base leading-7 text-[#d9d1ff]">
          A separate block puzzle landing page built for Block Boom!, with its own privacy and terms pages.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/block-boom/privacy" className="rounded-full bg-[#ffb800] px-5 py-3 font-bold text-[#251b52] hover:opacity-90 transition-opacity">
            Privacy
          </a>
          <a href="/block-boom/terms" className="rounded-full bg-white px-5 py-3 font-bold text-[#251b52] hover:bg-[#f3edff] transition-colors">
            Terms
          </a>
        </div>
      </div>
    </div>

    <div className="relative mt-7 grid grid-cols-4 gap-3">
      {['#ff5252', '#ff5252', '#ffb800', '#ffb800', '#ff5252', '#ff5252', '#ffb800', '#ffb800', '#59d56b', '#59d56b', '#4e7eff', '#4e7eff', '#59d56b', '#59d56b', '#4e7eff', '#4e7eff'].map((color, index) => (
        <BlockTile key={`${color}-${index}`} color={color} />
      ))}
    </div>
  </div>
);

const BlockBoomHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const features = isTR
    ? [
        ['Renkli blok estetiği', 'Klasik puzzle hissinden ayrışan, mağaza ekranına uygun parlak blok dili.'],
        ['Ayrı legal yapı', 'Block Boom için ayrı privacy ve terms sayfaları.'],
        ['Hızlı yönlendirme', 'Ana siteden veya direkt landing page’den legal sayfalara geçiş.'],
      ]
    : [
        ['Colorful block look', 'A bright block language that stands apart from the classic puzzle vibe.'],
        ['Separate legal stack', 'Dedicated privacy and terms pages for Block Boom.'],
        ['Fast navigation', 'Quick jumps to legal pages from the main site or landing page.'],
      ];

  return (
    <div className="min-h-screen bg-[#fbfaff] text-[#251b52]">
      <BlockBoomNav active="home" />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.02fr_0.98fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ddd4ff] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#6a45d8]">
                <span className="h-2 w-2 rounded-full bg-[#6a45d8]" />
                {isTR ? 'AYRI OYUN SAYFASI' : 'SEPARATE GAME PAGE'}
              </div>
              <h2 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Block
                <span className="block text-[#6a45d8]">Boom!</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg text-[#7b6cb2] leading-8">
                {isTR
                  ? 'Block Boom! için ayrı bir açılış sayfası. Mağaza, legal ve tanıtım akışı puzzle sayfasından bağımsız tutulur.'
                  : 'A separate landing page for Block Boom!, keeping store, legal, and promo flows independent from the puzzle page.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/block-boom/privacy"
                  className="rounded-full bg-[#6a45d8] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(106,69,216,0.26)] hover:bg-[#5837be] transition-colors"
                >
                  {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </a>
                <a
                  href="/block-boom/terms"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#251b52] border border-[#ddd4ff] hover:border-[#6a45d8]/40 transition-colors"
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
                  <div key={value} className="rounded-2xl bg-white border border-[#ddd4ff] p-4">
                    <div className="text-2xl font-black text-[#251b52]">{value}</div>
                    <div className="mt-1 text-xs text-[#7b6cb2]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(106,69,216,0.22),transparent_50%)] blur-2xl" />
              <BlockBoomHero />
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-white border-y border-[#ebe6ff]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#6a45d8]">
                {isTR ? 'NEDEN AYRI?' : 'WHY SEPARATE?'}
              </p>
              <h3 className="mt-3 text-3xl sm:text-4xl font-black text-[#251b52]">
                {isTR ? 'Puzzle sayfasına dokunmadan yeni marka alanı' : 'New brand space without touching the puzzle page'}
              </h3>
              <p className="mt-4 text-[#7b6cb2] max-w-2xl mx-auto">
                {isTR
                  ? 'Bu sayfa yalnızca Block Boom tanıtımı içindir; mevcut Arrows Puzzle Master ekran akışı ve renk dili aynı kalır.'
                  : 'This page is only for Block Boom promotion; the existing Arrows Puzzle Master flow and green color language remain unchanged.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <div key={title} className="rounded-[1.75rem] bg-[#ffffff] border border-[#ddd4ff] p-6">
                  <div className="h-12 w-12 rounded-2xl bg-[#251b52] text-white flex items-center justify-center font-black">
                    {index + 1}
                  </div>
                  <h4 className="mt-5 text-xl font-black text-[#251b52]">{title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#7b6cb2]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlockBoomHomePage;
