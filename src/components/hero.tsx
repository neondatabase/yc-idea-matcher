import React from 'react';
import { HowItWorks } from './how-it-works';

export const Hero = () => {
  return (
    <>
      {' '}
      <h1 className="text-3xl md:text-5xl text-center font-semibold text-gray-1200 mb-5">
        YC Idea Matcher ✨
      </h1>
      <p className="md:text-lg text-center mb-16">
        Submit your idea and get a list of similar ideas that YCombinator has
        invested in before
        <HowItWorks />
      </p>
    </>
  );
};
