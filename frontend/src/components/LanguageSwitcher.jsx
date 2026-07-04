import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-full border border-[#dfe3f3] bg-[#f7f8fc] p-1">
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'tr' ? 'bg-[#273052] text-white' : 'text-[#68708a] hover:text-[#273052]'
        }`}
      >
        TR
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-[10px] font-semibold rounded-full transition-colors ${
          language === 'en' ? 'bg-[#273052] text-white' : 'text-[#68708a] hover:text-[#273052]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
