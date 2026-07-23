import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const BlocksPuzzleEscapeMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#cfe1ff] bg-[#17345f] shadow-[0_10px_30px_rgba(31,124,255,0.18)]">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_45%,rgba(255,255,255,0.06))]" />
    <div className="absolute left-1 top-1 h-4 w-4 rounded-md bg-[#1f7cff] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
    <div className="absolute left-5 top-1 h-4 w-4 rounded-md bg-[#17c3b2] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
    <div className="absolute left-1 top-5 h-4 w-4 rounded-md bg-[#0ea394] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
    <div className="absolute left-5 top-5 h-4 w-4 rounded-md bg-[#ffb800] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
  </div>
);

const BlocksPuzzleEscapeLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#cfe1ff] bg-[#eef6ff] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#17345f] text-white' : 'text-[#6b86af] hover:text-[#17345f]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#17345f] text-white' : 'text-[#6b86af] hover:text-[#17345f]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const BlocksPuzzleEscapeNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    tryApp: isTR ? 'Oyunu Aç' : 'Play the Game',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm transition-colors ${
      active === page ? 'text-[#1f7cff]' : 'text-[#6b86af] hover:text-[#17345f]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#cfe1ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <BlocksPuzzleEscapeMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-[#17345f]">Blocks - Puzzle Escape</span>
            <span className="block text-[11px] text-[#6b86af] font-semibold">Puzzle Website</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <BlocksPuzzleEscapeLanguageSwitcher />
          <Link to="/blocks-puzzle-escape/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/blocks-puzzle-escape/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link
            to="/blocks-puzzle-escape"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#1f7cff] hover:bg-[#1666d1] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(31,124,255,0.22)]"
          >
            {navLabels.tryApp}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BlocksPuzzleEscapeNav;
