import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const MeowSudokuHomePage = () => {
  const game = getGameBySlug('meow-sudoku');
  return <GameLandingPage game={game} />;
};

export default MeowSudokuHomePage;
