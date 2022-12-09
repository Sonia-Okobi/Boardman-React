import React from 'react';
import BaseCard from '../../../ui/organisms/baseCard/BaseCard';
import heart from '../../../../assets/svg/Heart.svg';
import wallet from '../../../../assets/svg/wallet.svg';
import magnify from '../../../../assets/svg/magnifying.svg';
import shield from '../../../../assets/svg/shield.svg';

export default function AboutWhy() {
  return (
    <div className="about-page__about-why app-container">
      <div className="about-page__about-why__content app-container__section">
        <div className="about-page__about-why__content__text">
          <h6 className='why-header'>Why use Boardman</h6>
          <h2 className='why-text'>We’re your right trading advocate</h2>
        </div>
        <div className="about-page__about-why__content__cards">
          <BaseCard
            icon={heart}
            title="Trusted Platform"
            description="We guaranty that both parties hold up to their ends of the transaction purpose. Also, with our world class end to end encryption, we ensure that all banking details are protected, thereby blocking the risk of fraud."
          />
          <BaseCard
            icon={wallet}
            title="Third Party Assurance"
            description="Boardman stands as a neutral third party platform securing that a transaction is successful before releasing the fund to any transacting party."
          />
          <BaseCard
            icon={magnify}
            title="Transparency"
            description="Boardman ensures both transacting parties are alerted through the different stages of the transaction thereby clearing every iota of doubt and ensuring a seamless transaction."
          />
          <BaseCard
            icon={shield}
            title="Dispute Resolution"
            description="Our dispute Resolution process ensures that any disputes that may arise during the course of a transaction are treated promptly, impartially and amicably between both parties involved."
          />
        </div>
      </div>
    </div>
  );
}
