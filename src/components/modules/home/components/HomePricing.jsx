import React from 'react';
import arrow from '../../../../assets/svg/forward-arrow.svg';
import master from '../../../../assets/svg/Master-Card.svg';
import visa from '../../../../assets/svg/Visa.svg';
import qr from '../../../../assets/svg/qr-code-scan.svg';
import dial from '../../../../assets/svg/dial-finger.svg';
import Pricing from '../../../ui/organisms/pricing/Pricing';
import useTab from '../../../../hooks/useTab';
import { prices } from '../../../ui/organisms/pricing/constant';

export default function HomePricing() {
  const [tabs] = useTab({ tabs: prices });

  return (
    <div className="home-page__home-pricing">
      <div className="home-page__home-pricing__content app-container__section">
        <h1 className="pricing-header">Simple, Transparent & Fair Pricing</h1>
        <p className="pricing-description">
          No other charges. No hidden fees. No amendment fees. Fees can be paid
          by either you or your counterparty.
        </p>
        <div className="tab-slider pricing-slider">
          {tabs.map((currency, i) => (
            <button
              className={currency.isActive ? 'tab active-tab' : 'tab'}
              onClick={currency.activate}
              key={i}
            >
              {currency.title}
            </button>
          ))}
        </div>
        <div className="tab-slider pricing-slider mobile-slider">
          {tabs.map((currency, i) => (
            <button
              className={currency.isActive ? 'tab active-tab' : 'tab'}
              onClick={currency.activate}
              key={i}
            >
              {currency.symbol}
            </button>
          ))}
        </div>

        {tabs.map(
          (currency, i) =>
            currency.isActive && <Pricing prices={currency.data} key={i} />
        )}

        <div className="home-page__home-pricing__content__payment-method">
          <p>Payment Methods...</p>
          <div className="payment-logos">
            <img
              src={master}
              alt="logo"
              className="payment-logos__logo master"
            />
            <img src={visa} alt="logo" className="payment-logos__logo visa" />
            <img src={qr} alt="logo" className="payment-logos__logo code" />
            <img src={dial} alt="logo" className="payment-logos__logo dial" />
          </div>
        </div>
        <div className="home-page__home-pricing__content__base">
          <p className="base-text">
            As a seller, if you've agreed to pay all or some of the fee, it's
            automatically deducted from the total payment amount for your
            transaction.
          </p>
          <a href="/" className="base-button--primary hero-button">
            Get Started{' '}
            <span>
              <img src={arrow} alt="icon" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
