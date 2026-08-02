import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const WordConnectHomePage = () => {
  const game = getGameBySlug('word-connect');
  return <GameLandingPage game={game} />;
};

export default WordConnectHomePage;
