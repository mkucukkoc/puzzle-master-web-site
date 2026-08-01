import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GamesPage from '@/pages/GamesPage';
import SiteHomePage from '@/pages/SiteHomePage';
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
import NonogramHomePage from '@/pages/NonogramHomePage';
import NonogramPrivacyPage from '@/pages/NonogramPrivacyPage';
import NonogramTermsPage from '@/pages/NonogramTermsPage';
import NonogramDataDeletionPage from '@/pages/NonogramDataDeletionPage';
import MinesweeperHomePage from '@/pages/MinesweeperHomePage';
import MinesweeperPrivacyPage from '@/pages/MinesweeperPrivacyPage';
import MinesweeperTermsPage from '@/pages/MinesweeperTermsPage';
import MinesweeperDataDeletionPage from '@/pages/MinesweeperDataDeletionPage';
import BlocksPuzzleEscapeHomePage from '@/pages/BlocksPuzzleEscapeHomePage';
import BlocksPuzzleEscapePrivacyPage from '@/pages/BlocksPuzzleEscapePrivacyPage';
import BlocksPuzzleEscapeTermsPage from '@/pages/BlocksPuzzleEscapeTermsPage';
import BlocksPuzzleEscapeDataDeletionPage from '@/pages/BlocksPuzzleEscapeDataDeletionPage';
import TileMatchHomePage from '@/pages/TileMatchHomePage';
import TileMatchPrivacyPage from '@/pages/TileMatchPrivacyPage';
import TileMatchTermsPage from '@/pages/TileMatchTermsPage';
import TileMatchDataDeletionPage from '@/pages/TileMatchDataDeletionPage';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SiteHomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/index.html" element={<GamesPage />} />
            <Route path="/showcase" element={<SiteHomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            <Route path="/arrows-puzzle-master" element={<HomePage />} />

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

            <Route path="/nonogram" element={<NonogramHomePage />} />
            <Route path="/nonogram/index.html" element={<NonogramHomePage />} />
            <Route path="/nonogram/privacy" element={<NonogramPrivacyPage />} />
            <Route path="/nonogram/privacy.html" element={<NonogramPrivacyPage />} />
            <Route path="/nonogram/privacy/index.html" element={<NonogramPrivacyPage />} />
            <Route path="/nonogram/terms" element={<NonogramTermsPage />} />
            <Route path="/nonogram/terms.html" element={<NonogramTermsPage />} />
            <Route path="/nonogram/terms/index.html" element={<NonogramTermsPage />} />
            <Route path="/nonogram/data-deletion" element={<NonogramDataDeletionPage />} />
            <Route path="/nonogram/data-deletion.html" element={<NonogramDataDeletionPage />} />
            <Route path="/nonogram/data-deletion/index.html" element={<NonogramDataDeletionPage />} />

            <Route path="/minesweeper" element={<MinesweeperHomePage />} />
            <Route path="/minesweeper/index.html" element={<MinesweeperHomePage />} />
            <Route path="/minesweeper/privacy" element={<MinesweeperPrivacyPage />} />
            <Route path="/minesweeper/privacy.html" element={<MinesweeperPrivacyPage />} />
            <Route path="/minesweeper/privacy/index.html" element={<MinesweeperPrivacyPage />} />
            <Route path="/minesweeper/terms" element={<MinesweeperTermsPage />} />
            <Route path="/minesweeper/terms.html" element={<MinesweeperTermsPage />} />
            <Route path="/minesweeper/terms/index.html" element={<MinesweeperTermsPage />} />
            <Route path="/minesweeper/data-deletion" element={<MinesweeperDataDeletionPage />} />
            <Route path="/minesweeper/data-deletion.html" element={<MinesweeperDataDeletionPage />} />
            <Route path="/minesweeper/data-deletion/index.html" element={<MinesweeperDataDeletionPage />} />

            <Route path="/word-search" element={<GameLandingPage game={getGameBySlug('word-search')} />} />
            <Route path="/word-search/index.html" element={<GameLandingPage game={getGameBySlug('word-search')} />} />
            <Route path="/sudoku" element={<GameLandingPage game={getGameBySlug('sudoku')} />} />
            <Route path="/sudoku/index.html" element={<GameLandingPage game={getGameBySlug('sudoku')} />} />
            <Route path="/flow-connects" element={<GameLandingPage game={getGameBySlug('flow-connects')} />} />
            <Route path="/flow-connects/index.html" element={<GameLandingPage game={getGameBySlug('flow-connects')} />} />

            <Route path="/blocks-puzzle-escape" element={<BlocksPuzzleEscapeHomePage />} />
            <Route path="/blocks-puzzle-escape/privacy" element={<BlocksPuzzleEscapePrivacyPage />} />
            <Route path="/blocks-puzzle-escape/terms" element={<BlocksPuzzleEscapeTermsPage />} />
            <Route path="/blocks-puzzle-escape/data-deletion" element={<BlocksPuzzleEscapeDataDeletionPage />} />

            <Route path="/tile-match" element={<TileMatchHomePage />} />
            <Route path="/tile-match/index.html" element={<TileMatchHomePage />} />
            <Route path="/tile-match/privacy" element={<TileMatchPrivacyPage />} />
            <Route path="/tile-match/privacy.html" element={<TileMatchPrivacyPage />} />
            <Route path="/tile-match/privacy/index.html" element={<TileMatchPrivacyPage />} />
            <Route path="/tile-match/terms" element={<TileMatchTermsPage />} />
            <Route path="/tile-match/terms.html" element={<TileMatchTermsPage />} />
            <Route path="/tile-match/terms/index.html" element={<TileMatchTermsPage />} />
            <Route path="/tile-match/data-deletion" element={<TileMatchDataDeletionPage />} />
            <Route path="/tile-match/data-deletion.html" element={<TileMatchDataDeletionPage />} />
            <Route path="/tile-match/data-deletion/index.html" element={<TileMatchDataDeletionPage />} />
            <Route path="/triple-grove" element={<TileMatchHomePage />} />
            <Route path="/triple-grove/privacy" element={<TileMatchPrivacyPage />} />
            <Route path="/triple-grove/terms" element={<TileMatchTermsPage />} />
            <Route path="/triple-grove/data-deletion" element={<TileMatchDataDeletionPage />} />

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
