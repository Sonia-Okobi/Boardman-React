import React from 'react';
import HowSteps from '../../../ui/organisms/howSteps/HowSteps';

export default function HomeHow() {
  return (
    <div className="home-page__home-how">
      <div className="home-page__home-how__content">
        <div className="home-page__home-how__content__text app-container">
          <h1 className="how-header">How it works</h1>
        </div>
        <HowSteps />
      </div>
    </div>
  );
}
