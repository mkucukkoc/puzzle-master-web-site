import React from 'react';
import GameLandingPage from '@/components/GameLandingPage';
import { getGameBySlug } from '@/data/games';

const CarPuzzleHomePage = () => {
  const game = getGameBySlug('cars-puzzle-escape');
  return <GameLandingPage game={game} />;
};

export default CarPuzzleHomePage;
