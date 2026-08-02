import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const ColorSortHomePage = () => {
  const game = getGameBySlug('color-sort');
  return <GameLandingPage game={game} />;
};

export default ColorSortHomePage;
