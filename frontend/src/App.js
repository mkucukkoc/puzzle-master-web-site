import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteHomePage from '@/pages/SiteHomePage';
import GamesPage from '@/pages/GamesPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermsPage from '@/pages/TermsPage';
import DataDeletionPage from '@/pages/DataDeletionPage';
import AccountDeletionPage from '@/pages/AccountDeletionPage';
import HelpPage from '@/pages/HelpPage';
import HomePage from '@/pages/HomePage';

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

import FlowConnectsPrivacyPage from '@/pages/FlowConnectsPrivacyPage';
import FlowConnectsTermsPage from '@/pages/FlowConnectsTermsPage';
import FlowConnectsDataDeletionPage from '@/pages/FlowConnectsDataDeletionPage';

import SudokuPrivacyPage from '@/pages/SudokuPrivacyPage';
import SudokuTermsPage from '@/pages/SudokuTermsPage';
import SudokuDataDeletionPage from '@/pages/SudokuDataDeletionPage';

import WordSearchPrivacyPage from '@/pages/WordSearchPrivacyPage';
import WordSearchTermsPage from '@/pages/WordSearchTermsPage';
import WordSearchDataDeletionPage from '@/pages/WordSearchDataDeletionPage';

import GameLandingPage from '@/components/GameLandingPage';
import ScrollToTop from '@/components/ScrollToTop';
import { getGameBySlug } from '@/data/games';
import { LanguageProvider } from '@/context/LanguageContext';
import '@/App.css';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Global Portal Routes */}
            <Route path="/" element={<SiteHomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/games/index.html" element={<GamesPage />} />
            <Route path="/showcase" element={<SiteHomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/account-deletion" element={<AccountDeletionPage />} />
            <Route path="/data-deletion" element={<DataDeletionPage />} />

            {/* 1. Arrows Puzzle Master */}
            <Route path="/arrows-puzzle-master" element={<HomePage />} />
            <Route path="/arrows-puzzle-master/privacy" element={<PrivacyPage />} />
            <Route path="/arrows-puzzle-master/privacy.html" element={<PrivacyPage />} />
            <Route path="/arrows-puzzle-master/privacy/index.html" element={<PrivacyPage />} />
            <Route path="/arrows-puzzle-master/terms" element={<TermsPage />} />
            <Route path="/arrows-puzzle-master/terms.html" element={<TermsPage />} />
            <Route path="/arrows-puzzle-master/terms/index.html" element={<TermsPage />} />
            <Route path="/arrows-puzzle-master/data-deletion" element={<DataDeletionPage />} />
            <Route path="/arrows-puzzle-master/data-deletion.html" element={<DataDeletionPage />} />
            <Route path="/arrows-puzzle-master/data-deletion/index.html" element={<DataDeletionPage />} />

            {/* 2. Block Boom */}
            <Route path="/block-boom" element={<BlockBoomHomePage />} />
            <Route path="/block-boom/privacy" element={<BlockBoomPrivacyPage />} />
            <Route path="/block-boom/privacy.html" element={<BlockBoomPrivacyPage />} />
            <Route path="/block-boom/privacy/index.html" element={<BlockBoomPrivacyPage />} />
            <Route path="/block-boom/terms" element={<BlockBoomTermsPage />} />
            <Route path="/block-boom/terms.html" element={<BlockBoomTermsPage />} />
            <Route path="/block-boom/terms/index.html" element={<BlockBoomTermsPage />} />
            <Route path="/block-boom/data-deletion" element={<BlockBoomDataDeletionPage />} />
            <Route path="/block-boom/data-deletion.html" element={<BlockBoomDataDeletionPage />} />
            <Route path="/block-boom/data-deletion/index.html" element={<BlockBoomDataDeletionPage />} />

            {/* 3. Cars Puzzle Escape */}
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

            {/* 4. Nonogram */}
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

            {/* 5. Minesweeper */}
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

            {/* 6. Word Search */}
            <Route path="/word-search" element={<GameLandingPage game={getGameBySlug('word-search')} />} />
            <Route path="/word-search/index.html" element={<GameLandingPage game={getGameBySlug('word-search')} />} />
            <Route path="/word-search/privacy" element={<WordSearchPrivacyPage />} />
            <Route path="/word-search/privacy.html" element={<WordSearchPrivacyPage />} />
            <Route path="/word-search/privacy/index.html" element={<WordSearchPrivacyPage />} />
            <Route path="/word-search/terms" element={<WordSearchTermsPage />} />
            <Route path="/word-search/terms.html" element={<WordSearchTermsPage />} />
            <Route path="/word-search/terms/index.html" element={<WordSearchTermsPage />} />
            <Route path="/word-search/data-deletion" element={<WordSearchDataDeletionPage />} />
            <Route path="/word-search/data-deletion.html" element={<WordSearchDataDeletionPage />} />
            <Route path="/word-search/data-deletion/index.html" element={<WordSearchDataDeletionPage />} />

            {/* 7. Sudoku Quest */}
            <Route path="/sudoku" element={<GameLandingPage game={getGameBySlug('sudoku')} />} />
            <Route path="/sudoku/index.html" element={<GameLandingPage game={getGameBySlug('sudoku')} />} />
            <Route path="/sudoku/privacy" element={<SudokuPrivacyPage />} />
            <Route path="/sudoku/privacy.html" element={<SudokuPrivacyPage />} />
            <Route path="/sudoku/privacy/index.html" element={<SudokuPrivacyPage />} />
            <Route path="/sudoku/terms" element={<SudokuTermsPage />} />
            <Route path="/sudoku/terms.html" element={<SudokuTermsPage />} />
            <Route path="/sudoku/terms/index.html" element={<SudokuTermsPage />} />
            <Route path="/sudoku/data-deletion" element={<SudokuDataDeletionPage />} />
            <Route path="/sudoku/data-deletion.html" element={<SudokuDataDeletionPage />} />
            <Route path="/sudoku/data-deletion/index.html" element={<SudokuDataDeletionPage />} />
            <Route path="/sudoku-quest/privacy" element={<SudokuPrivacyPage />} />
            <Route path="/sudoku-quest/terms" element={<SudokuTermsPage />} />
            <Route path="/sudoku-quest/data-deletion" element={<SudokuDataDeletionPage />} />

            {/* 8. Flow Connects */}
            <Route path="/flow-connects" element={<GameLandingPage game={getGameBySlug('flow-connects')} />} />
            <Route path="/flow-connects/index.html" element={<GameLandingPage game={getGameBySlug('flow-connects')} />} />
            <Route path="/flow-connects/privacy" element={<FlowConnectsPrivacyPage />} />
            <Route path="/flow-connects/privacy.html" element={<FlowConnectsPrivacyPage />} />
            <Route path="/flow-connects/privacy/index.html" element={<FlowConnectsPrivacyPage />} />
            <Route path="/flow-connects/terms" element={<FlowConnectsTermsPage />} />
            <Route path="/flow-connects/terms.html" element={<FlowConnectsTermsPage />} />
            <Route path="/flow-connects/terms/index.html" element={<FlowConnectsTermsPage />} />
            <Route path="/flow-connects/data-deletion" element={<FlowConnectsDataDeletionPage />} />
            <Route path="/flow-connects/data-deletion.html" element={<FlowConnectsDataDeletionPage />} />
            <Route path="/flow-connects/data-deletion/index.html" element={<FlowConnectsDataDeletionPage />} />

            {/* 9. Blocks Puzzle Escape */}
            <Route path="/blocks-puzzle-escape" element={<BlocksPuzzleEscapeHomePage />} />
            <Route path="/blocks-puzzle-escape/privacy" element={<BlocksPuzzleEscapePrivacyPage />} />
            <Route path="/blocks-puzzle-escape/privacy.html" element={<BlocksPuzzleEscapePrivacyPage />} />
            <Route path="/blocks-puzzle-escape/privacy/index.html" element={<BlocksPuzzleEscapePrivacyPage />} />
            <Route path="/blocks-puzzle-escape/terms" element={<BlocksPuzzleEscapeTermsPage />} />
            <Route path="/blocks-puzzle-escape/terms.html" element={<BlocksPuzzleEscapeTermsPage />} />
            <Route path="/blocks-puzzle-escape/terms/index.html" element={<BlocksPuzzleEscapeTermsPage />} />
            <Route path="/blocks-puzzle-escape/data-deletion" element={<BlocksPuzzleEscapeDataDeletionPage />} />
            <Route path="/blocks-puzzle-escape/data-deletion.html" element={<BlocksPuzzleEscapeDataDeletionPage />} />
            <Route path="/blocks-puzzle-escape/data-deletion/index.html" element={<BlocksPuzzleEscapeDataDeletionPage />} />

            {/* 10. Tile Match */}
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
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
