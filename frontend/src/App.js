import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import HelpPage from '@/pages/HelpPage';
import AccountDeletionPage from '@/pages/AccountDeletionPage';
import DataDeletionPage from '@/pages/DataDeletionPage';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/account-deletion" element={<AccountDeletionPage />} />
            <Route path="/data-deletion" element={<DataDeletionPage />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
