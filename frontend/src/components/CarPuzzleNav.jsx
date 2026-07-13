import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const CarPuzzleMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#bed6ea] bg-[#082f51] shadow-[0_10px_30px_rgba(8,47,81,0.22)]">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.16),transparent_38%,rgba(255,255,255,0.05))]" />
    <div className="absolute left-2 top-2 h-3 w-3 rounded-[4px] bg-[#ffb454] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
    <div className="absolute right-2 top-2 h-3 w-3 rounded-[4px] bg-[#3fc9ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
    <div className="absolute left-2 bottom-2 right-2 h-2 rounded-full bg-white/18" />
    <div className="absolute left-1/2 top-1/2 h-2.5 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90" />
  </div>
);

const CarPuzzleLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#cfe0ec] bg-[#eaf4fb] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#0f5cab] text-white' : 'text-[#5f7692] hover:text-[#0f5cab]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#0f5cab] text-white' : 'text-[#5f7692] hover:text-[#0f5cab]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const CarPuzzleNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    dataDeletion: isTR ? 'Veri Silme' : 'Data Deletion',
    play: isTR ? 'Sayfayı Aç' : 'Open Page',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm transition-colors ${
      active === page ? 'text-[#0f5cab]' : 'text-[#5f7692] hover:text-[#11304e]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#cfe0ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/car-puzzle" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <CarPuzzleMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-[#11304e]">Cars -Puzzle Escape</span>
            <span className="block text-[11px] text-[#5f7692] font-semibold">Puzzle Website</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <CarPuzzleLanguageSwitcher />
          <Link to="/car-puzzle/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/car-puzzle/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/car-puzzle/data-deletion" className={navLinkClass('dataDeletion')}>
            {navLabels.dataDeletion}
          </Link>
          <Link
            to="/car-puzzle"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#0f5cab] hover:bg-[#0b4a87] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(15,92,171,0.22)]"
          >
            {navLabels.play}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CarPuzzleNav;
