import React from 'react';
import about from '../../../../assets/images/api-about.png';
import about2 from '../../../../assets/images/api-about2.png';

export default function ApiAbout() {
  return (
    <div className="api-page__api-about app-container">
      <div className="api-page__api-about__content app-container__section">
        <div className="api-page__api-about__content__about card">
          <h4 className="api-page__api-about__content__about__title">
            Built for developers, by developers
          </h4>
          <p className="api-page__api-about__content__about__description">
            Any business can integrate the safety and security of escrow
            payments to their platform as simply as common payment methods such
            as Paystack, Flutterwave and so on.{' '}
          </p>
          <div className="api-page__api-about__content__about__image">
            <img src={about} alt="Api" />
          </div>
        </div>

        <div className="api-page__api-about__content__about card">
          <h4 className="api-page__api-about__content__about__title">
            Protecting both buyers and sellers
          </h4>
          <p className="api-page__api-about__content__about__description">
            Using escrow, buyers get to inspect the goods or services before
            accepting them, protecting the buyer. Likewise, sellers are
            protected from counterparty risk by no chargeback, ever.{' '}
          </p>
          <div className="api-page__api-about__content__about__image">
            <img src={about2} alt="Api" />
          </div>
        </div>
      </div>
    </div>
  );
}
