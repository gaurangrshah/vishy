import React from 'react';
import ErrorBoundary from './ErrorBoundary';

function Hero({ heroName }) {
  if (heroName === 'Joker') {
    throw new Error('Not a Hero');
  }
  return (
    <ErrorBoundary>
      {heroName}
    </ErrorBoundary>
  )
}

export default Hero
