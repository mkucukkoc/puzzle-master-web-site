import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const BlockBoomHomePage = () => {
  const game = getGameBySlug('block-boom');
  return <GameLandingPage game={game} />;
};

export default BlockBoomHomePage;
