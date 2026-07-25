import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const MinesweeperNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    delete: isTR ? 'Silme' : 'Delete',
    open: isTR ? 'Sayfayı Aç' : 'Open Page',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm transition-colors ${
      active === page ? 'text-[#2d63db]' : 'text-[#7c93b6] hover:text-[#12305f]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#d7e3f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/minesweeper" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white shadow-[0_10px_30px_rgba(45,99,219,0.18)] border border-[#c9dbff] flex items-center justify-center overflow-hidden">
            <img
              src="/minesweeper/minesweeper-mine-quest-play-icon-512.png"
              alt="Minesweeper: Mine Quest"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-base sm:text-lg text-[#12305f]">
            Minesweeper: Mine Quest
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <LanguageSwitcher />
          <Link to="/minesweeper/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/minesweeper/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/minesweeper/data-deletion" className={navLinkClass('delete')}>
            {navLabels.delete}
          </Link>
          <Link
            to="/minesweeper#legal"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#2d63db] hover:bg-[#214db0] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(45,99,219,0.22)]"
          >
            {navLabels.open}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MinesweeperNav;
