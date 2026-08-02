import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const TileMatchHomePage = () => {
  const game = getGameBySlug('tile-match');
  return <GameLandingPage game={game} />;
};

export default TileMatchHomePage;
