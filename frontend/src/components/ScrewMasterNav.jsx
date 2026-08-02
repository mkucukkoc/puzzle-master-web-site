import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ScrewMasterMark = () => (
  <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-[#ea580c]/30 bg-[#2d1205] shadow-[0_10px_30px_rgba(234,88,12,0.2)]">
    <img
      src="/games/screw-master/icon.png"
      alt="Screw Master"
      className="h-full w-full object-cover"
    />
  </div>
);

const ScrewMasterLanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#ea580c]/30 bg-[#2d1205] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#ea580c] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#ea580c] text-white' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

const ScrewMasterNav = ({ active }) => {
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
      active === page ? 'text-[#ea580c]' : 'text-white/70 hover:text-white'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070b16]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/screw-master" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <ScrewMasterMark />
          <div className="leading-tight">
            <span className="block font-bold text-base sm:text-lg text-white">Screw Master</span>
            <span className="block text-[11px] text-[#ea580c] font-semibold">Nuts & Bolts</span>
          </div>
        </Link>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5">
          <ScrewMasterLanguageSwitcher />
          <Link to="/screw-master/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/screw-master/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/screw-master/data-deletion" className={navLinkClass('dataDeletion')}>
            {navLabels.dataDeletion}
          </Link>
          <Link
            to="/screw-master"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(234,88,12,0.3)]"
          >
            {navLabels.play}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ScrewMasterNav;
