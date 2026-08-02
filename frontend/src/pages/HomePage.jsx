import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const HomePage = () => {
  const game = getGameBySlug('arrows-puzzle-master');
  return <GameLandingPage game={game} />;
};

export default HomePage;
