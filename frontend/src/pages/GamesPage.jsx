import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LayoutGrid, Smartphone, Globe } from 'lucide-react';
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

const GamesPage = () => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

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
              <div className="text-sm text-[#7b8496]">{isTR ? 'Oyun vitrini' : 'Game showcase'}</div>
            </div>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <a href="#games" className="text-sm font-semibold text-[#5d6679] transition-colors hover:text-[#121826]">
              {isTR ? 'Oyunlar' : 'Games'}
            </a>
            <a href="/showcase" className="text-sm font-semibold text-[#5d6679] transition-colors hover:text-[#121826]">
              {isTR ? 'Vitrin' : 'Showcase'}
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
        <section className="px-4 pt-10 sm:px-6 sm:pt-14">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2.5rem] bg-white px-6 py-8 shadow-[0_24px_80px_rgba(18,25,38,0.08)] sm:px-10 sm:py-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe7f6] bg-[#f3f7fc] px-4 py-2 text-xs font-bold tracking-[0.22em] text-[#6aad1d]">
                <span className="h-2 w-2 rounded-full bg-[#6aad1d]" />
                {isTR ? 'ANA EKRAN' : 'HOMEPAGE'}
              </div>
              <h1 className="mt-5 max-w-3xl text-[2.35rem] font-black tracking-tight leading-[0.98] text-[#121826] sm:text-5xl lg:text-6xl">
                {isTR ? 'Oyunlar burada başlıyor.' : 'The games start here.'}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5d6679] sm:text-base sm:leading-8">
                {isTR
                  ? 'Ana link açıldığında ilk ekranda oyun vitrini görünsün istedik. Her karttan mağazaya gidebilir veya kendi ana sayfasını açabilirsin.'
                  : 'We made the root link open straight into the game showcase. From every card you can jump to the store or open the dedicated landing page.'}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#games"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6aad1d] px-6 py-3 font-bold text-white shadow-[0_18px_40px_rgba(106,173,29,0.25)] transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <Globe size={18} />
                  {isTR ? 'Oyunlara bak' : 'Browse games'}
                </a>
                <Link
                  to="/showcase"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#dbe7f6] bg-white px-6 py-3 font-bold text-[#121826] transition-colors hover:border-[#6aad1d]/35 sm:w-auto"
                >
                  <Smartphone size={18} />
                  {isTR ? 'Vitrini aç' : 'Open showcase'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="games" className="scroll-mt-24 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 xl:grid-cols-2">
              {GAMES.map(game => (
                <GameCard key={game.slug} game={game} isTR={isTR} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GamesPage;
