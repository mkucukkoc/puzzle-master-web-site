import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const BlocksPuzzleEscapeHomePage = () => {
  const game = getGameBySlug('blocks-puzzle-escape');
  return <GameLandingPage game={game} />;
};

export default BlocksPuzzleEscapeHomePage;
