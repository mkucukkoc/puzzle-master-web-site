import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import HelpPage from '@/pages/HelpPage';
import AccountDeletionPage from '@/pages/AccountDeletionPage';
import DataDeletionPage from '@/pages/DataDeletionPage';
import BlockBoomHomePage from '@/pages/BlockBoomHomePage';
import BlockBoomPrivacyPage from '@/pages/BlockBoomPrivacyPage';
import BlockBoomTermsPage from '@/pages/BlockBoomTermsPage';
import BlockBoomDataDeletionPage from '@/pages/BlockBoomDataDeletionPage';
import CarPuzzleHomePage from '@/pages/CarPuzzleHomePage';
import CarPuzzlePrivacyPage from '@/pages/CarPuzzlePrivacyPage';
import CarPuzzleTermsPage from '@/pages/CarPuzzleTermsPage';
import CarPuzzleDataDeletionPage from '@/pages/CarPuzzleDataDeletionPage';
import BlocksPuzzleEscapeHomePage from '@/pages/BlocksPuzzleEscapeHomePage';
import BlocksPuzzleEscapePrivacyPage from '@/pages/BlocksPuzzleEscapePrivacyPage';
import BlocksPuzzleEscapeTermsPage from '@/pages/BlocksPuzzleEscapeTermsPage';
import BlocksPuzzleEscapeDataDeletionPage from '@/pages/BlocksPuzzleEscapeDataDeletionPage';
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
            <Route path="/block-boom" element={<BlockBoomHomePage />} />
            <Route path="/block-boom/privacy" element={<BlockBoomPrivacyPage />} />
            <Route path="/block-boom/terms" element={<BlockBoomTermsPage />} />
            <Route path="/block-boom/data-deletion" element={<BlockBoomDataDeletionPage />} />
            <Route path="/car-puzzle" element={<CarPuzzleHomePage />} />
            <Route path="/car-puzzle/index.html" element={<CarPuzzleHomePage />} />
            <Route path="/car-puzzle/privacy" element={<CarPuzzlePrivacyPage />} />
            <Route path="/car-puzzle/privacy.html" element={<CarPuzzlePrivacyPage />} />
            <Route path="/car-puzzle/privacy/index.html" element={<CarPuzzlePrivacyPage />} />
            <Route path="/car-puzzle/terms" element={<CarPuzzleTermsPage />} />
            <Route path="/car-puzzle/terms.html" element={<CarPuzzleTermsPage />} />
            <Route path="/car-puzzle/terms/index.html" element={<CarPuzzleTermsPage />} />
            <Route path="/car-puzzle/data-deletion" element={<CarPuzzleDataDeletionPage />} />
            <Route path="/car-puzzle/data-deletion.html" element={<CarPuzzleDataDeletionPage />} />
            <Route path="/car-puzzle/data-deletion/index.html" element={<CarPuzzleDataDeletionPage />} />
            <Route path="/blocks-puzzle-escape" element={<BlocksPuzzleEscapeHomePage />} />
            <Route path="/blocks-puzzle-escape/privacy" element={<BlocksPuzzleEscapePrivacyPage />} />
            <Route path="/blocks-puzzle-escape/terms" element={<BlocksPuzzleEscapeTermsPage />} />
            <Route path="/blocks-puzzle-escape/data-deletion" element={<BlocksPuzzleEscapeDataDeletionPage />} />
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
