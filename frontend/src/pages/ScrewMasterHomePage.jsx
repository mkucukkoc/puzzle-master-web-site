import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const ScrewMasterHomePage = () => {
  const game = getGameBySlug('screw-master');
  return <GameLandingPage game={game} />;
};

export default ScrewMasterHomePage;
