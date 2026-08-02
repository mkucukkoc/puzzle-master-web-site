import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const SudokuMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#ff8c42]/30 bg-[#3d1e03] shadow-[0_10px_30px_rgba(255,140,66,0.2)]">
    <img
      src="/games/sudoku/icon.png"
      alt="Sudoku Quest"
      className="h-full w-full object-cover"
    />
  </div>
);

const SudokuLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#ff8c42]/30 bg-[#3d1e03] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#ff8c42] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#ff8c42] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const SudokuNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    dataDeletion: isTR ? 'Veri Silme' : 'Data Deletion',
    play: isTR ? 'Sayfayı Aç' : 'Open Page',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm font-semibold transition-colors ${
      active === page ? 'text-[#ff8c42]' : 'text-white/70 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#120a02]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/sudoku" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <SudokuMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-white">Sudoku Quest</span>
            <span className="block text-[11px] text-[#ff8c42] font-semibold">Logic Puzzle</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <SudokuLanguageSwitcher />
          <Link to="/sudoku/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/sudoku/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/sudoku/data-deletion" className={navLinkClass('dataDeletion')}>
            {navLabels.dataDeletion}
          </Link>
          <Link
            to="/sudoku"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#ff8c42] hover:bg-[#e0752e] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(255,140,66,0.3)]"
          >
            {navLabels.play}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SudokuNav;
