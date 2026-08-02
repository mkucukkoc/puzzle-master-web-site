import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const WordConnectMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#d97706]/30 bg-[#2e1c05] shadow-[0_10px_30px_rgba(217,119,6,0.2)]">
    <img
      src="/games/word-connect/icon.png"
      alt="Word Connect"
      className="h-full w-full object-cover"
    />
  </div>
);

const WordConnectLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#d97706]/30 bg-[#2e1c05] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#d97706] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#d97706] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const WordConnectNav = ({ active }) => {
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
      active === page ? 'text-[#d97706]' : 'text-white/70 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b16]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/word-connect" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <WordConnectMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-white">Word Connect</span>
            <span className="block text-[11px] text-[#d97706] font-semibold">Crossword Quest</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <WordConnectLanguageSwitcher />
          <Link to="/word-connect/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/word-connect/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/word-connect/data-deletion" className={navLinkClass('dataDeletion')}>
            {navLabels.dataDeletion}
          </Link>
          <Link
            to="/word-connect"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#d97706] hover:bg-[#b45309] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(217,119,6,0.3)]"
          >
            {navLabels.play}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default WordConnectNav;
