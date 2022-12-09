import React from 'react';
import api from '../../../../assets/images/api.png';

export default function ApiHero() {
  return (
    <div className="api-page__api-hero hero">
      <div className="api-page__api-hero__content">
        <h1 className="api-page__api-hero__content__header app-container">
          Enable escrow payments on your website, market place, classified site,
          shopping cart or mobile apps.
        </h1>
        <h5 className="api-page__api-hero__content__text">COMING SOON</h5>
        <div className="api-page__api-hero__content__image">
          <img src={api} alt="Api" />
          <div className="api-page__api-hero__content__image__background"></div>
        </div>
      </div>
    </div>
  );
}
