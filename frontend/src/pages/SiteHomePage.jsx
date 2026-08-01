import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronRight, Globe, LayoutGrid, Smartphone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import StoreBadge from '@/components/StoreBadge';
import { GAMES } from '@/data/games';

const GameCard = ({ game, isTR }) => {
  const description = isTR ? game.descriptionTR : game.descriptionEN;
  const label = isTR ? 'Devamını Gör' : 'See more';

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#e6e8ee] bg-white shadow-[0_24px_80px_rgba(18,25,38,0.10)]">
      <div className="relative">
        <div className="overflow-hidden bg-[#f4f6fb]">
          <img
            src={game.feature}
            alt={`${game.title} feature artwork`}
            className="aspect-[1024/500] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rounded-2xl border-4 border-white bg-white shadow-[0_18px_35px_rgba(15,23,42,0.16)]">
          <img
            src={game.icon}
            alt={`${game.title} icon`}
            className="h-16 w-16 rounded-2xl object-cover sm:h-[4.75rem] sm:w-[4.75rem]"
          />
        </div>
      </div>

      <div className="px-5 pb-6 pt-12 sm:px-6 sm:pt-14">
        <div className="text-center">
          <div className="text-lg font-black tracking-tight text-[#121826] sm:text-xl">{game.title}</div>
          <div className="mt-2 text-sm font-medium text-[#7b8496]">{game.shortTitle}</div>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-sm leading-7 text-[#5d6679] sm:text-[15px]">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-center">
          <Link
            to={game.route}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#6aad1d] transition-colors hover:text-[#4c8f09]"
          >
            {label}
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <StoreBadge href={game.appStoreUrl} variant="apple" />
          <StoreBadge href={game.playStoreUrl} variant="google" />
        </div>
      </div>
    </article>
  );
};

const SiteHomePage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const featured = useMemo(() => GAMES.slice(0, 5), []);
  const heroGames = featured.length ? featured : GAMES;
  const activeGame = heroGames[activeHeroIndex % heroGames.length];

  useEffect(() => {
    if (!heroGames.length) return undefined;
    const timer = window.setInterval(() => {
      setActiveHeroIndex(index => (index + 1) % heroGames.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [heroGames.length]);

  const heroTitle = isTR ? '10 puzzle oyunu, tek bir vitrin.' : '10 puzzle games, one curated showcase.';
  const heroDescription = isTR
    ? 'Videodaki hissi koruyan, büyük görseller, sade kartlar ve mağaza bağlantılarıyla bir ana sayfa kurduk. Devamını Gör ile her oyunun kendi sayfasına geçebilirsin.'
    : 'We rebuilt the homepage with the same editorial feel: big visuals, clean cards, and store links. See more takes you to each game’s dedicated landing page.';

  const heroStats = isTR
    ? [
        ['10', 'oyun'],
        ['10', 'tanıtım sayfası'],
        ['2', 'mağaza bağlantısı'],
      ]
    : [
        ['10', 'games'],
        ['10', 'landing pages'],
        ['2', 'store links'],
      ];

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-[#121826]">
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/94 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#6aad1d] text-white shadow-[0_14px_32px_rgba(106,173,29,0.25)]">
              <LayoutGrid size={20} />
            </div>
            <div>
              <div className="text-sm font-bold tracking-[0.22em] text-[#6aad1d]">PUZZLE GAMES</div>
              <div className="text-sm text-[#7b8496]">{isTR ? '10 oyunluk vitrin' : '10-game showcase'}</div>
            </div>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <a href="#games" className="text-sm font-semibold text-[#5d6679] transition-colors hover:text-[#121826]">
              {isTR ? 'Oyunlar' : 'Games'}
            </a>
            <a href="#featured" className="text-sm font-semibold text-[#5d6679] transition-colors hover:text-[#121826]">
              {isTR ? 'Öne çıkanlar' : 'Featured'}
            </a>
            <a href="/privacy" className="text-sm font-semibold text-[#5d6679] transition-colors hover:text-[#121826]">
              {isTR ? 'Gizlilik' : 'Privacy'}
            </a>
            <a href="/terms" className="text-sm font-semibold text-[#5d6679] transition-colors hover:text-[#121826]">
              {isTR ? 'Koşullar' : 'Terms'}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <section className="px-4 pb-10 pt-6 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div
              className="relative isolate overflow-hidden rounded-[2.75rem] bg-[#111827] shadow-[0_28px_90px_rgba(15,23,42,0.18)]"
              id="featured"
            >
              <img
                src={activeGame.feature}
                alt={`${activeGame.title} hero artwork`}
                className="absolute inset-0 h-full w-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,14,24,0.92)_0%,rgba(10,14,24,0.76)_36%,rgba(10,14,24,0.30)_72%,rgba(10,14,24,0.16)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(106,173,29,0.22),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.14),transparent_24%)]" />

              <div className="relative grid min-h-[680px] items-end lg:grid-cols-[1fr_0.95fr]">
                <div className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-14">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-bold tracking-[0.22em] text-white/85">
                    <span className="h-2 w-2 rounded-full bg-[#6aad1d]" />
                    {isTR ? 'ANA SAYFA VİTRİNİ' : 'HOMEPAGE SHOWCASE'}
                  </div>

                  <h1 className="mt-6 max-w-2xl text-[2.35rem] font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[4.45rem]">
                    {heroTitle}
                  </h1>

                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
                    {heroDescription}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#games"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6aad1d] px-6 py-3 font-bold text-white shadow-[0_18px_40px_rgba(106,173,29,0.25)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                    >
                      <Globe size={18} />
                      {isTR ? 'Oyunlara bak' : 'Browse games'}
                    </a>
                    <Link
                      to={activeGame.route}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-6 py-3 font-bold text-white transition-colors hover:bg-white/12 sm:w-auto"
                    >
                      <Smartphone size={18} />
                      {isTR ? 'Devamını Gör' : 'See more'}
                    </Link>
                </div>

                  <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                    {heroStats.map(([value, label]) => (
                      <div key={`${value}-${label}`} className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                        <div className="text-3xl font-black text-white">{value}</div>
                        <div className="mt-1 text-xs font-semibold tracking-wide text-white/70">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <StoreBadge href={activeGame.appStoreUrl} variant="apple" compact />
                    <StoreBadge href={activeGame.playStoreUrl} variant="google" compact />
                  </div>
                </div>

                <div className="relative hidden min-h-[640px] items-end justify-end px-6 pb-8 pr-8 lg:flex">
                  <div className="absolute right-8 top-8 flex flex-col items-center gap-3 text-white/85">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/8 text-[11px] font-bold">
                      in
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/8 text-[11px] font-bold">
                      f
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/8 text-[11px] font-bold">
                      ig
                    </div>
                    <div className="mt-2 h-32 w-px bg-white/30" />
                  </div>

                  <div className="absolute left-6 top-1/2 flex -translate-y-1/2 gap-4 text-white/55">
                    <button
                      type="button"
                      onClick={() => setActiveHeroIndex(index => (index - 1 + heroGames.length) % heroGames.length)}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/6 transition-colors hover:bg-white/12"
                      aria-label={isTR ? 'Önceki oyun' : 'Previous game'}
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveHeroIndex(index => (index + 1) % heroGames.length)}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/6 transition-colors hover:bg-white/12"
                      aria-label={isTR ? 'Sonraki oyun' : 'Next game'}
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  <div className="relative w-full max-w-[420px]">
                    <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-black/25 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                      <img
                        src={activeGame.feature}
                        alt={`${activeGame.title} featured image`}
                        className="aspect-[1024/500] w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-black/45 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white/80 backdrop-blur-md">
                        {activeGame.shortTitle.toUpperCase()}
                      </div>
                    </div>

                    <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-white/8 p-4 text-white/90 backdrop-blur-md">
                      <div className="text-xs font-bold tracking-[0.22em] text-white/55">
                        {String(activeHeroIndex + 1).padStart(2, '0')} / {String(heroGames.length).padStart(2, '0')}
                      </div>
                      <div className="mt-2 text-lg font-black">{activeGame.title}</div>
                      <p className="mt-1 text-sm leading-6 text-white/70">
                        {isTR ? activeGame.descriptionTR : activeGame.descriptionEN}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative border-t border-white/10 bg-white/6 px-6 py-4 backdrop-blur-md sm:px-10">
                <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 text-sm text-white/80">
                  <span className="font-semibold">{isTR ? 'Kayan vitrin, store bağlantıları ve ayrı açılış sayfaları' : 'Rotating showcase, store links, and dedicated pages'}</span>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#6aad1d]" />
                    <span>{isTR ? 'Kaydırarak oyunlar arasında geç' : 'Scroll through the games'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold tracking-[0.22em] text-[#6aad1d]">{isTR ? 'OYUNLAR' : 'GAMES'}</p>
              <h2 className="mt-3 text-3xl font-black text-[#121826] sm:text-4xl">
                {isTR ? 'Her oyuna ayrı kart, ayrı mağaza bağlantısı' : 'Each game gets its own card and store links'}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[#5d6679]">
                {isTR
                  ? 'Aşağıdaki kartlarda oyun görseli, kısa açıklama, mağaza rozetleri ve oyunun kendi ana sayfasına giden bağlantı yer alıyor.'
                  : 'Each card below includes the game artwork, a short description, store badges, and the link to its dedicated landing page.'}
              </p>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-2">
              {GAMES.map(game => (
                <GameCard key={game.slug} game={game} isTR={isTR} />
              ))}
            </div>
          </div>
        </section>

        <footer className="px-4 py-10 text-center text-sm text-[#7b8496] sm:px-6">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0ea394] text-white shadow-[0_14px_32px_rgba(14,163,148,0.24)]">
            <LayoutGrid size={22} />
          </div>
          <p>{isTR ? 'Puzzle Games showcase' : 'Puzzle Games showcase'}</p>
        </footer>
      </main>
    </div>
  );
};

export default SiteHomePage;
