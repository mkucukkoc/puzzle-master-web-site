import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const BusLoopHomePage = () => {
  const game = getGameBySlug('bus-loop');
  return <GameLandingPage game={game} />;
};

export default BusLoopHomePage;
