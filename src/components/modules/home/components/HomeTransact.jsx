import React from 'react';
import BaseCard from '../../../ui/organisms/baseCard/BaseCard';
import luxury from '../../../../assets/svg/luxury.svg';
import hand from '../../../../assets/svg/second-hand.svg';
import cart from '../../../../assets/svg/cart.svg';
import services from '../../../../assets/svg/services.svg';
import home from '../../../../assets/svg/home.svg';
import deposits from '../../../../assets/svg/deposit.svg';

export default function HomeTransact() {
  return (
    <div className="home-page__home-transact app-container">
      <div className="home-page__home-transact__content app-container__section">
        <h2 className="transact-header">Transact With Ease</h2>
        <p className="transact-description">
          Boardman can be used to pay for just about anything, from goods,
          services by importers, exporters, traders, marketplaces, trade
          partners.
        </p>
        <div className="home-page__home-transact__content__cards">
        <BaseCard icon={luxury} title='Luxury Items' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq mi ligula, a sagittis metus interdum sit amet. '/>
        <BaseCard icon={hand} title='Second-Hand Goods' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq mi ligula, a sagittis metus interdum sit amet. '/>
        <BaseCard icon={cart} title='Vehicles' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq mi ligula, a sagittis metus interdum sit amet. '/>
        <BaseCard icon={services} title='Services' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq mi ligula, a sagittis metus interdum sit amet. '/>
        <BaseCard icon={home} title='Digital Goods' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq mi ligula, a sagittis metus interdum sit amet. '/>
        <BaseCard icon={deposits} title='Deposits' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq mi ligula, a sagittis metus interdum sit amet. '/>
        </div>
      </div>
    </div>
  );
}
