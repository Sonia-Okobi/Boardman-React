import React from 'react';
import Benefits from '../../../ui/organisms/benefits/Benefits';

export default function AboutBenefits() {
  return (
    <div className='about-page__about-benefits'>
        <div className="about-page__about-benefits__content">
            <h1 className='benefits-header app-container'>Your Benefits</h1>
            <Benefits/>
        </div>
    </div>
  )
}
