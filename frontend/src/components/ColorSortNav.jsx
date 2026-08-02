import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ColorSortMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#06b6d4]/30 bg-[#082f49] shadow-[0_10px_30px_rgba(6,182,212,0.2)]">
    <img
      src="/games/color-sort/icon.png"
      alt="Color Sort"
      className="h-full w-full object-cover"
    />
  </div>
);

const ColorSortLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#06b6d4]/30 bg-[#082f49] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#06b6d4] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#06b6d4] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const ColorSortNav = ({ active }) => {
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
      active === page ? 'text-[#06b6d4]' : 'text-white/70 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b16]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/color-sort" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <ColorSortMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-white">Color Sort</span>
            <span className="block text-[11px] text-[#06b6d4] font-semibold">Water Puzzle</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <ColorSortLanguageSwitcher />
          <Link to="/color-sort/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/color-sort/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/color-sort/data-deletion" className={navLinkClass('dataDeletion')}>
            {navLabels.dataDeletion}
          </Link>
          <Link
            to="/color-sort"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#06b6d4] hover:bg-[#0891b2] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(6,182,212,0.3)]"
          >
            {navLabels.play}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ColorSortNav;
