import React from 'react';
import arrow from '../../../../assets/svg/forward-arrow.svg';
import shield from '../../../../assets/images/shield.png';
import product from '../../../../assets/svg/product.svg';
import flag from '../../../../assets/svg/flag.svg';
import downarrow from '../../../../assets/svg/arrow-down.svg';
import BaseButton from '../../../ui/atoms/baseButton/BaseButton';
import useTab from '../../../../hooks/useTab';

const interests = [{ title: 'Buying' }, { title: 'Selling' }];

export default function HomeHero() {
  const [tabs] = useTab({ tabs: interests });

  return (
    <div className="home-page__home-hero hero app-container">
      <div className="home-page__home-hero__content app-container__section">
        <div className="home-page__home-hero__content__text">
          <h1 className="hero-header">
            Protect your payments with a fully digital escrow
          </h1>
          <p className="hero-description">
            Boardman helps buyers and sellers engage in business that requires
            payments without the risks of chargebacks.
          </p>
          <a href="/" className="base-button--primary hero-button">
            Get Started
            <img src={arrow} alt="arrow" />
          </a>
          <div className="home-page__home-hero__content__text__base">
            <div className="transaction-terms">
              <img src={shield} alt="Icon" />
              <p>
                As a trusted third party, Boardman holds funds until the terms
                of a transaction are completed
              </p>
            </div>

            <div className="transaction-terms">
              <img src={shield} alt="Icon" />
              <p>
                Boardman releases funds upon fully confirm the terms of a
                transaction as resolved
              </p>
            </div>
          </div>
        </div>
        <div className="home-page__home-hero__content__card card rectangle">
          <p className="card-title">I am</p>
          <div className="tab-slider home-slider">
            {tabs.map((interest, i) => (
              <button
                className={interest.isActive ? 'tab active-tab' : 'tab'}
                onClick={interest.activate}
                key={i}
              >
                {interest.title}
              </button>
            ))}
          </div>
          <div className="product input">
            <div className="icon">
              <img src={product} alt="icon" />
            </div>
            <input
              type="text"
              placeholder="Enter product e.g iPhone, car, gold..."
              className="card-input"
            />
          </div>
          <p className="input-text">For</p>
          <div className="amount input">
            <div className="icon">
              <img src={flag} alt="icon" />
            </div>
            <input
              type="number"
              placeholder="Enter amount"
              className="card-input"
            />
            <div className="amount__currency">
              <hr />
              <p className="currency">USD</p>
              <img src={downarrow} alt="arrow" />
            </div>
          </div>
          <BaseButton className="card-button">Create Transaction</BaseButton>
        </div>
      </div>
    </div>
  );
}
