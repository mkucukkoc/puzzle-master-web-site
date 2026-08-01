import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const TileMatchMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#bbf7d0] bg-[#052e16] shadow-[0_10px_30px_rgba(22,163,74,0.22)]">
    <img
      src="/games/tile-match/icon.png"
      alt="Triple Grove: Tile Match"
      className="h-full w-full object-cover"
    />
  </div>
);

const TileMatchLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#16a34a] text-white' : 'text-[#365314] hover:text-[#16a34a]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#16a34a] text-white' : 'text-[#365314] hover:text-[#16a34a]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const TileMatchNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    dataDeletion: isTR ? 'Veri Silme' : 'Data Deletion',
    play: isTR ? 'Sayfayı Aç' : 'Open Page',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm font-medium transition-colors ${
      active === page ? 'text-[#16a34a] font-bold' : 'text-[#365314] hover:text-[#16a34a]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#bbf7d0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/tile-match" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <TileMatchMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-[#052e16]">Triple Grove: Tile Match</span>
            <span className="block text-[11px] text-[#16a34a] font-semibold">Puzzle Website</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <TileMatchLanguageSwitcher />
          <Link to="/tile-match/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/tile-match/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/tile-match/data-deletion" className={navLinkClass('dataDeletion')}>
            {navLabels.dataDeletion}
          </Link>
          <Link
            to="/tile-match"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(22,163,74,0.22)]"
          >
            {navLabels.play}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TileMatchNav;
