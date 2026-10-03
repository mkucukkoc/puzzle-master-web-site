import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const PandokuHomePage = () => {
  const game = getGameBySlug('pandoku');
  return <GameLandingPage game={game} />;
};

export default PandokuHomePage;
