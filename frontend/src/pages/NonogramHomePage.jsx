import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const NonogramHomePage = () => {
  const game = getGameBySlug('nonogram');
  return <GameLandingPage game={game} />;
};

export default NonogramHomePage;
