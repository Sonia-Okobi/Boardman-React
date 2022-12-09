import React from 'react';
import Risk from '../../../ui/organisms/risk/Risk';

export default function HomeRisk() {
  return (
    <div className="home-page__home-risk">
      <div className="home-page__home-risk__content">
        <div className="home-page__home-risk__content__text app-container__section">
          <h1 className="risk-header">
            We eliminate risk equally for buyers and sellers
          </h1>
        </div>
        <Risk />
      </div>
    </div>
  );
}
