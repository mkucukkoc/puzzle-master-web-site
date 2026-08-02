import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Globe,
  LayoutGrid,
  Smartphone,
  Sparkles,
  Star,
  Gamepad2,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import StoreBadge from '@/components/StoreBadge';
import { GAMES } from '@/data/games';

const GameCard = ({ game, isTR }) => {
  const description = isTR ? game.descriptionTR : game.descriptionEN;

  return (
    <div className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/8 via-white/5 to-transparent p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
      {/* Decorative Glow */}
      <div
        className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-20 transition-opacity duration-300 group-hover:opacity-40"
        style={{ backgroundColor: game.accent }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={game.icon}
                alt={`${game.title} icon`}
                className="h-14 w-14 sm:h-16 sm:w-16 rounded-[1.25rem] object-cover shadow-lg border border-white/15"
              />
              <div>
                <span
                  className="inline-block rounded-full border px-3 py-0.5 text-[10px] font-black tracking-widest uppercase"
                  style={{
                    backgroundColor: `${game.accent}20`,
                    borderColor: `${game.accent}44`,
                    color: game.accent,
                  }}
                >
                  {game.shortTitle}
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-black text-white">{game.title}</h3>
              </div>
            </div>

            <Link
              to={game.route}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white/25 active:scale-95"
              aria-label={`${game.title} details`}
            >
              <ArrowRight size={20} />
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-white/75">{description}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <StoreBadge href={game.appStoreUrl} variant="apple" compact />
            <StoreBadge href={game.playStoreUrl} variant="google" compact />
          </div>

          <Link
            to={game.route}
            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white/80 hover:text-white transition-colors"
          >
            {isTR ? 'İncele & Oyna' : 'Learn & Play'}
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const SiteHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);

  const heroGames = GAMES.slice(0, 10);
  const activeGame = heroGames[activeHeroIndex] ?? heroGames[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroIndex(prev => (prev + 1) % heroGames.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroGames.length]);

  const heroTitle = isTR
    ? 'Tüm Bulmaca Oyunlarımız Tek Bir Yerde'
    : 'All Our Puzzle Games in One Place';

  const heroDescription = isTR
    ? 'Mantık, blok, trafik ve kelime bulmacalarını keşfedin. Her oyun için detaylı rehberler, ekran görüntüleri ve indirme bağlantıları.'
    : 'Explore logic, block, traffic, and word puzzles. Comprehensive guides, gameplay screenshots, and download links for every game.';

  const heroStats = isTR
    ? [
        ['10+', 'Özel Oyun'],
        ['1000+', 'Bölüm'],
        ['4.9 ★', 'Puan'],
      ]
    : [
        ['10+', 'Unique Games'],
        ['1,000+', 'Stages'],
        ['4.9 ★', 'Rating'],
      ];

  return (
    <div className="min-h-screen bg-[#070b16] text-white selection:bg-white/20">
      {/* Dynamic Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0ea394] to-[#0f7fb6] text-white shadow-lg">
              <Gamepad2 size={22} />
            </div>
            <div>
              <div className="text-base font-black tracking-tight text-white">Puzzle Studio</div>
              <div className="text-[10px] font-bold tracking-widest text-white/50 uppercase">Games Portal</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#games"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/20"
            >
              <LayoutGrid size={14} />
              {isTR ? 'Tüm Oyunlar' : 'All Games'}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main>
        {/* PREMIUM DARK HERO SECTION (RESPONSIVE FOR MOBILE & TABLET) */}
        <section className="relative px-4 pt-8 pb-16 sm:px-6 lg:pt-14 lg:pb-24 overflow-hidden border-b border-white/10">
          {/* Ambient Glowing Background */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] blur-[120px] opacity-30 pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(circle at 50% 20%, ${activeGame.accent}, transparent 70%)`,
            }}
          />

          <div className="relative mx-auto max-w-7xl">
            {/* Top Carousel Selector Badges */}
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {heroGames.map((g, idx) => (
                  <button
                    key={g.slug}
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`inline-flex items-center gap-2 shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-all ${
                      activeHeroIndex === idx
                        ? 'border-white/40 bg-white/20 text-white shadow-lg scale-105'
                        : 'border-white/10 bg-white/5 text-white/60 hover:bg-white/10'
                    }`}
                  >
                    <img src={g.icon} alt={g.title} className="h-5 w-5 rounded-md object-cover" />
                    <span>{g.shortTitle}</span>
                  </button>
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setActiveHeroIndex(i => (i - 1 + heroGames.length) % heroGames.length)}
                  aria-label="Previous featured game"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white/20"
                >
                  <ArrowLeft size={16} />
                </button>
                <button
                  onClick={() => setActiveHeroIndex(i => (i + 1) % heroGames.length)}
                  aria-label="Next featured game"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white/20"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Main Hero Content Grid */}
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-black tracking-[0.2em] uppercase"
                  style={{
                    backgroundColor: `${activeGame.accent}20`,
                    borderColor: `${activeGame.accent}55`,
                    color: activeGame.accent,
                  }}
                >
                  <Sparkles size={14} />
                  {isTR ? 'ÖNE ÇIKAN OYUN' : 'FEATURED GAME'}
                </div>

                <h1 className="mt-5 text-3xl font-black tracking-tight leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                  {heroTitle}
                </h1>

                <p className="mt-5 text-sm leading-7 text-white/75 sm:text-base sm:leading-8 max-w-xl">
                  {heroDescription}
                </p>

                {/* Primary CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                  <a
                    href="#games"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 py-3.5 font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
                    style={{ backgroundColor: activeGame.accent }}
                  >
                    <Globe size={18} />
                    {isTR ? 'Oyunları Keşfet' : 'Browse Games'}
                  </a>
                  <Link
                    to={activeGame.route}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
                  >
                    <Smartphone size={18} />
                    {isTR ? 'Devamını Gör' : 'See More'}
                  </Link>
                </div>

                {/* Hero Stats Cards */}
                <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
                  {heroStats.map(([val, lbl]) => (
                    <div
                      key={lbl}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 text-center backdrop-blur-md"
                    >
                      <div className="text-xl sm:text-3xl font-black text-white">{val}</div>
                      <div className="mt-1 text-[11px] sm:text-xs font-semibold text-white/60">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsive Hero Game Preview Card (Visible on ALL screens now!) */}
              <div className="relative">
                <div
                  className="rounded-[2.5rem] border border-white/15 bg-black/40 p-4 sm:p-6 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500"
                >
                  <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-black/60 aspect-[16/9] sm:aspect-[1024/500]">
                    <img
                      src={activeGame.feature}
                      alt={activeGame.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold tracking-wider text-white backdrop-blur-md border border-white/15">
                      {activeGame.shortTitle}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src={activeGame.icon} alt={activeGame.title} className="h-12 w-12 rounded-xl object-cover" />
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-white">{activeGame.title}</h3>
                        <p className="text-xs text-white/60 line-clamp-1">{isTR ? activeGame.descriptionTR : activeGame.descriptionEN}</p>
                      </div>
                    </div>

                    <Link
                      to={activeGame.route}
                      className="inline-flex shrink-0 items-center justify-center h-10 w-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all"
                      aria-label="View game page"
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <StoreBadge href={activeGame.appStoreUrl} variant="apple" compact />
                      <StoreBadge href={activeGame.playStoreUrl} variant="google" compact />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-400">
                      <Star size={14} className="fill-amber-400" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALL GAMES LIST SECTION */}
        <section id="games" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#0ea394]">
                <LayoutGrid size={14} />
                {isTR ? 'TÜM OYUNLARIMIZ' : 'OUR GAMES'}
              </div>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
                {isTR ? 'Oyununu Seç, Hemen Keşfet' : 'Pick Your Puzzle & Play'}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-white/70">
                {isTR
                  ? 'Mantık, blok, trafik, renk ve sayı bulmacaları arasından dilediğinizi seçin. Detaylı oyun sayfalarında ekran görüntüleri ve ipuçları sizi bekliyor.'
                  : 'Choose from logic, block, traffic, color, and number puzzles. Screenshots and guides await on dedicated game pages.'}
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
              {GAMES.map(game => (
                <GameCard key={game.slug} game={game} isTR={isTR} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/60 px-4 py-10 text-center text-xs text-white/50 sm:px-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0ea394] text-white shadow-lg">
              <Gamepad2 size={20} />
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Puzzle Studio Games</div>
              <div className="text-[11px] text-white/40">© 2026 All rights reserved</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-semibold text-white/70">
            <Link to="/privacy" className="hover:text-white transition-colors">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
            </Link>
            <Link to="/data-deletion" className="hover:text-white transition-colors">
              {isTR ? 'Veri Silme' : 'Data Deletion'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SiteHomePage;
