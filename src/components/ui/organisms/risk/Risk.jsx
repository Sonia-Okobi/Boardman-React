import React from 'react';
import './index.scss';
import { risks } from './constant';

export default function Risk() {
  return (
    <>
      {risks.map((risk, i) => (
        <div className="risk" key={i}>
          <div className='risk__content'>
            <div className="risk__content__image">
              <img src={risk.image} alt="Illustration" />
            </div>
            <div className="risk__content__text">
              <h2 className="risk__content__text__title">{risk.title}</h2>
              <div className="risk__content__text__descriptions">
                {risk.descriptions.map((description, index) => (
                  <p className="description" key={index}>
                    {description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
