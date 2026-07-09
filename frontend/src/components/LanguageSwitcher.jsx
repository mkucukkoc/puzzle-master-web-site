import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#d6e8e4] bg-[#e7f2f0] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#1f3d3a] text-white' : 'text-[#8a9d9a] hover:text-[#1f3d3a]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#1f3d3a] text-white' : 'text-[#8a9d9a] hover:text-[#1f3d3a]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
