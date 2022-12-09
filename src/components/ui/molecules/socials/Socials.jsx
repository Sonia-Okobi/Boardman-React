import React from 'react';
import './index.scss';
import facebook from '../../../../assets/svg/facebook.svg';
import twitter from '../../../../assets/svg/twitter.svg';
import linkedin from '../../../../assets/svg/linkedin.svg';
import instagram from '../../../../assets/svg/instagram.svg';

export default function Socials({className=''}) {
  return (
    <div className={`socials ${className}`}>
        <img src={facebook} alt="icon" className="icon" />     
        <img src={twitter} alt="icon" className="icon" />     
        <img src={linkedin} alt="icon" className="icon" />     
        <img src={instagram} alt="icon" className="icon" />     
    </div>
  )
}
