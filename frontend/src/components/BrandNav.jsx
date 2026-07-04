import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const BrandNav = ({ active }) => {
  const { language } = useLanguage();
  const isTR = language === 'tr';

  const navLabels = {
    privacy: isTR ? 'Gizlilik' : 'Privacy',
    terms: isTR ? 'Koşullar' : 'Terms',
    help: isTR ? 'Yardım' : 'Help',
    tryApp: isTR ? 'Uygulamayı Dene' : 'Try the App',
  };

  const navLinkClass = page =>
    `text-xs sm:text-sm transition-colors ${
      active === page ? 'text-[#e5484d]' : 'text-[#68708a] hover:text-[#273052]'
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/92 backdrop-blur-md border-b border-[#dfe3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white shadow-[0_10px_30px_rgba(229,72,77,0.18)] border border-[#f0d5d7] flex items-center justify-center overflow-hidden">
            <img
              src="/arrows-puzzle-master-icon.png"
              alt="Arrows Puzzle Master"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-base sm:text-lg text-[#273052]">
            Arrows Puzzle Master
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <LanguageSwitcher />
          <Link to="/privacy" className={navLinkClass('privacy')}>
            {navLabels.privacy}
          </Link>
          <Link to="/terms" className={navLinkClass('terms')}>
            {navLabels.terms}
          </Link>
          <Link to="/help" className={navLinkClass('help')}>
            {navLabels.help}
          </Link>
          <Link
            to="/#try-app"
            className="px-3 sm:px-5 py-1.5 sm:py-2 bg-[#e5484d] hover:bg-[#c9363b] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap shadow-[0_10px_24px_rgba(229,72,77,0.22)]"
          >
            {navLabels.tryApp}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BrandNav;
