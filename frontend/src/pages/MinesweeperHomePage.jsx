import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import MinesweeperNav from '@/components/MinesweeperNav';

const MineTile = ({ value = '', active = false }) => (
  <div className={`h-14 rounded-2xl border shadow-sm flex items-center justify-center font-black ${active ? 'bg-[#4bb2ff] text-white border-[#8ec9ff]' : 'bg-white text-[#12305f] border-[#c9dbff]'}`}>
    {value}
  </div>
);

const MinesweeperPreview = () => (
  <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] bg-[#0a1f4f] p-4 sm:p-5 shadow-[0_24px_80px_rgba(10,31,79,0.22)] border border-[#253f86]">
    <div className="absolute -top-8 -right-8 h-28 w-28 rounded-full bg-[#4bb2ff]/12" />
    <div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-[#ff8d5a]/10" />
    <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#102b67] p-4">
      <img
        src="/minesweeper/minesweeper-mine-quest-feature-1024x500.png"
        alt="Minesweeper: Mine Quest feature graphic"
        className="h-auto w-full object-cover rounded-[1.5rem]"
      />
      <div className="absolute left-8 top-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
        <img
          src="/minesweeper/minesweeper-mine-quest-play-icon-512.png"
          alt="Minesweeper: Mine Quest icon"
          className="h-11 w-11 rounded-2xl object-cover"
        />
        <div className="text-left">
          <div className="text-[11px] font-bold tracking-[0.22em] text-[#9ed7ff]">MINESWEEPER</div>
          <div className="text-sm font-black text-white">Mine Quest</div>
        </div>
      </div>
    </div>
    <div className="mt-4 grid grid-cols-5 gap-3">
      {['1', '', '2', 'F', '3', '', '4', 'M', '', '1'].map((value, index) => (
        <MineTile key={`${value}-${index}`} value={value} active={index % 4 === 0} />
      ))}
    </div>
    <div className="relative mt-4 rounded-2xl bg-white/8 p-4 border border-white/10">
      <div className="flex items-center justify-between text-xs font-semibold text-[#d8e7ff]">
        <span>SAFE TILES</span>
        <span className="text-[#ff8d5a]">FLAG MODE</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">
        <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#4bb2ff] via-[#3370ff] to-[#ff8d5a]" />
      </div>
    </div>
  </div>
);

const FeatureCard = ({ title, desc, index }) => (
  <div className="rounded-[1.75rem] bg-white border border-[#d7e3f4] p-6 shadow-[0_18px_50px_rgba(10,31,79,0.06)]">
    <div className="h-12 w-12 rounded-2xl bg-[#12305f] text-white flex items-center justify-center font-black">
      {index}
    </div>
    <h3 className="mt-5 text-xl font-black text-[#12305f]">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-[#5a7196]">{desc}</p>
  </div>
);

const MinesweeperHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const storeUrl = 'https://play.google.com/store/apps/details?id=com.minequest.minesweeper';

  const features = isTR
    ? [
        ['Klasik mantık', 'Sayı ipuçları, güvenli kareler ve bayraklar ile tanıdık mayın tarama akışı.'],
        ['900 deterministik bölüm', 'Tekrar edilebilir, dengeli ve mağazaya uygun seviyeler.'],
        ['Çevrimdışı oynanış', 'Bağlantı olmadan da akıcı şekilde oynanabilen bir bulmaca deneyimi.'],
      ]
    : [
        ['Classic logic', 'Familiar minesweeper play with number clues, safe tiles, and flags.'],
        ['900 deterministic levels', 'Repeatable, balanced, and store-friendly level progression.'],
        ['Offline play', 'A smooth puzzle experience that works without a network connection.'],
      ];

  const stats = isTR
    ? [
        ['900', 'seviye'],
        ['14', 'dil'],
        ['1', 'ayrı legal akış'],
      ]
    : [
        ['900', 'levels'],
        ['14', 'languages'],
        ['1', 'dedicated legal flow'],
      ];

  return (
    <div className="min-h-screen bg-[#f7fbff] text-[#12305f]">
      <MinesweeperNav />

      <main className="pt-24 sm:pt-28 overflow-hidden">
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c9dbff] bg-white px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#2d63db]">
                <span className="h-2 w-2 rounded-full bg-[#4bb2ff]" />
                {isTR ? 'YENİ OYUN' : 'NEW GAME'}
              </div>
              <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                Minesweeper
                <span className="block text-[#2d63db]">Mine Quest</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#5a7196] leading-8">
                {isTR
                  ? 'Sayıları çöz, güvenli kareleri aç, mayınları işaretle ve 900 seviyelik akıcı akışta ustalaş. Ayrı gizlilik, koşullar ve veri silme sayfalarıyla mağazaya hazır bir web alanı.'
                  : 'Read the numbers, clear safe tiles, flag the mines, and master a 900-level flow. A store-ready web home with separate privacy, terms, and deletion pages.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={storeUrl}
                  className="rounded-full bg-[#2d63db] px-7 py-4 font-bold text-white shadow-[0_18px_40px_rgba(45,99,219,0.26)] hover:bg-[#214db0] transition-colors"
                >
                  {isTR ? 'Google Play\'de Aç' : 'Open on Google Play'}
                </a>
                <a
                  href="/minesweeper/privacy"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#12305f] border border-[#d7e3f4] hover:border-[#2d63db]/40 transition-colors"
                >
                  {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
                </a>
                <a
                  href="/minesweeper/terms"
                  className="rounded-full bg-white px-7 py-4 font-bold text-[#12305f] border border-[#d7e3f4] hover:border-[#2d63db]/40 transition-colors"
                >
                  {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {stats.map(([value, label]) => (
                  <div key={value} className="rounded-2xl bg-white border border-[#d7e3f4] p-4">
                    <div className="text-2xl font-black text-[#12305f]">{value}</div>
                    <div className="mt-1 text-xs text-[#5a7196]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(75,178,255,0.18),transparent_50%)] blur-2xl" />
              <MinesweeperPreview />
            </div>
          </div>
        </section>

        <section id="legal" className="px-6 py-16 bg-white border-y border-[#e6effb] scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-black">
                {isTR ? 'Tanıdık, net ve mağaza uyumlu.' : 'Familiar, clear, and store-ready.'}
              </h2>
              <p className="mt-4 text-[#5a7196] max-w-2xl mx-auto">
                {isTR
                  ? 'Minesweeper: Mine Quest klasik mayın tarama mantığını, modern yayın sayfaları ve net kullanıcı akışıyla sunar.'
                  : 'Minesweeper: Mine Quest brings classic minesweeper logic together with modern store pages and a clear user flow.'}
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-5">
              {features.map(([title, desc], index) => (
                <FeatureCard key={title} title={title} desc={desc} index={index + 1} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MinesweeperHomePage;
