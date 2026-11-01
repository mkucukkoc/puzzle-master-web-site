import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const KingdomSmashHomePage = () => {
  const game = getGameBySlug('kingdom-smash');
  return <GameLandingPage game={game} />;
};

export default KingdomSmashHomePage;
