import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const NonogramMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#16455a] bg-[#06213a] shadow-[0_10px_30px_rgba(6,33,58,0.28)]">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_40%,rgba(255,255,255,0.04))]" />
    <div className="absolute left-1 top-1 h-4 w-4 rounded-md bg-[#2fd0cf] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]" />
    <div className="absolute left-5 top-1 h-4 w-4 rounded-md bg-[#ff6f61] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]" />
    <div className="absolute left-1 top-5 h-4 w-4 rounded-md bg-[#ffb86b] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]" />
    <div className="absolute left-5 top-5 h-4 w-4 rounded-md bg-[#ffffff] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]" />
  </div>
);

const NonogramLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#b9dfdf] bg-[#edf7f7] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#06213a] text-white' : 'text-[#4d6976] hover:text-[#06213a]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#06213a] text-white' : 'text-[#4d6976] hover:text-[#06213a]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const NonogramNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    tryApp: isTR ? 'Oyunu Aç' : 'Play the Game',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm transition-colors ${
      active === page ? 'text-[#1fdbc9]' : 'text-[#4d6976] hover:text-[#06213a]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#d6e8e8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/nonogram" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <NonogramMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-[#06213a]">Nonogram</span>
            <span className="block text-[11px] text-[#4d6976] font-semibold">Pixel Puzzle</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <NonogramLanguageSwitcher />
          <Link to="/nonogram/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/nonogram/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link
            to="/nonogram"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#1fdbc9] hover:bg-[#18c2b2] text-[#06213a] text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(31,219,201,0.22)]"
          >
            {navLabels.tryApp}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NonogramNav;
