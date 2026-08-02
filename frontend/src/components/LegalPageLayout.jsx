import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, FileText, Trash2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const LegalPageLayout = ({
  title,
  gameName = 'Puzzle Games',
  lastUpdated,
  gameRoute = '/',
  activeTab = 'privacy',
  children,
}) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  return (
    <div className="min-h-screen bg-[#070b16] text-white selection:bg-white/20">
      {/* Sticky Dark Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link
            to={gameRoute}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-white/20 hover:border-white/30"
          >
            <ChevronLeft size={16} />
            {gameName !== 'Puzzle Games' ? gameName : (isTR ? 'Ana Sayfa' : 'Home')}
          </Link>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="pt-8 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Banner */}
          <div className="mb-8 overflow-hidden rounded-[2.25rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.5)] backdrop-blur-xl relative">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#0ea394]/20 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-[11px] font-black tracking-widest text-[#8feceb] uppercase">
                <ShieldCheck size={14} />
                {gameName}
              </div>
              <h1 className="mt-4 text-3xl sm:text-5xl font-black text-white tracking-tight">
                {title}
              </h1>
              {lastUpdated && (
                <p className="mt-3 text-xs sm:text-sm text-white/60 font-medium">
                  {lastUpdated}
                </p>
              )}
            </div>
          </div>

          {/* Legal Content Body */}
          <div className="space-y-6">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 px-4 py-8 text-center text-xs text-white/50">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-bold text-white/80">
            <span>{gameName}</span>
            <span>© 2026</span>
          </div>

          <div className="flex flex-wrap gap-4 font-semibold text-white/70">
            <Link to={`${gameRoute === '/' ? '' : gameRoute}/privacy`} className="hover:text-white transition-colors">
              {isTR ? 'Gizlilik Politikası' : 'Privacy Policy'}
            </Link>
            <Link to={`${gameRoute === '/' ? '' : gameRoute}/terms`} className="hover:text-white transition-colors">
              {isTR ? 'Kullanım Şartları' : 'Terms of Use'}
            </Link>
            <Link to={`${gameRoute === '/' ? '' : gameRoute}/data-deletion`} className="hover:text-white transition-colors">
              {isTR ? 'Veri Silme' : 'Data Deletion'}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export const LegalSection = ({ title, children }) => (
  <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-white/20">
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <div className="text-sm leading-7 text-white/80 space-y-3 font-normal">{children}</div>
  </section>
);

export default LegalPageLayout;
