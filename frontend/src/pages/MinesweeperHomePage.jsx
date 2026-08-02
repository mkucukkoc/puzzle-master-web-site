import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const MinesweeperHomePage = () => {
  const game = getGameBySlug('minesweeper');
  return <GameLandingPage game={game} />;
};

export default MinesweeperHomePage;
