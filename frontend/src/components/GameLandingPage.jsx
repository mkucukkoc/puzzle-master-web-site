import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import GameArtwork from '@/components/GameArtwork';
import StoreBadge from '@/components/StoreBadge';

const GameLandingPage = ({ game }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';
  const description = isTR ? game.descriptionTR : game.descriptionEN;
  const highlights = isTR ? game.highlightsTR : game.highlightsEN;

  return (
    <div className="min-h-screen text-white" style={{ background: `linear-gradient(180deg, ${game.surface} 0%, #0b1020 100%)` }}>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/25 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/12 transition-colors">
            <ChevronLeft size={16} />
            {isTR ? 'Ana sayfa' : 'Home'}
          </Link>
          <div className="hidden items-center gap-2 md:flex">
            <StoreBadge href={game.appStoreUrl} variant="apple" compact className="scale-[0.9] origin-right" />
            <StoreBadge href={game.playStoreUrl} variant="google" compact className="scale-[0.9] origin-right" />
          </div>
        </div>
      </header>

      <main>
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-[0.22em]"
                style={{ backgroundColor: `${game.accent}18`, borderColor: `${game.accent}55`, color: game.accent }}
              >
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: game.accent }} />
                {isTR ? 'AYRI OYUN SAYFASI' : 'DEDICATED GAME PAGE'}
              </div>
              <h1 className="mt-7 text-5xl font-black tracking-tight leading-[0.94] sm:text-6xl lg:text-7xl">
                {game.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <StoreBadge href={game.appStoreUrl} variant="apple" compact />
                <StoreBadge href={game.playStoreUrl} variant="google" compact />
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-6 py-3 font-bold text-white/85 hover:bg-white/8 transition-colors"
                >
                  {isTR ? 'Tüm oyunlar' : 'All games'}
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border p-4 backdrop-blur-sm"
                    style={{ backgroundColor: `${game.accent}12`, borderColor: `${game.accent}22` }}
                  >
                    <div className="text-xs font-bold tracking-[0.22em] text-white/55">{String(index + 1).padStart(2, '0')}</div>
                    <p className="mt-2 text-sm leading-6 text-white/82">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl"
                style={{
                  background: `radial-gradient(circle at 50% 20%, ${game.accent}33, transparent 55%)`,
                }}
              />
              <GameArtwork game={game} className="shadow-[0_28px_110px_rgba(0,0,0,0.28)]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GameLandingPage;
