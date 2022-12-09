import React from 'react';
import Socials from '../../../ui/molecules/socials/Socials';
import background from '../../../../assets/images/contact-background.png';
import locationpoint from '../../../../assets/svg/location-point.svg';

export default function ContactMap() {
  return (
    <div className='contact-page__contact-map'>
        <div className="contact-page__contact-map__image">
          <img src={background} alt="Background" />
          <div className="contact-page__contact-map__image__background">
            <img src={locationpoint} alt="Location Point" />
            <div className="contact-page__contact-map__image__background__information">
              <p>Suite 406, Nawa Complex, Jahi, F.C.T, Abuja</p>
              <p>+234 814 600 7319</p>
              <p>support@boardmanapp.com</p>
            </div>
          </div>
        </div>
        <Socials className="contact-socials" />
      </div>
  )
}
