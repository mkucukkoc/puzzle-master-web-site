import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext({ language: 'tr', setLanguage: () => {} });

const LANGUAGE_STORAGE_KEY = 'arrows_puzzle_master_language';

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'tr';
    }
    return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'tr';
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);
