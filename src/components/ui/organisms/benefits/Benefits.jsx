import React from 'react';
// import BaseButton from '../../atoms/baseButton/BaseButton';
import './index.scss';
import { benefits } from './constant';
import arrow from '../../../../assets/svg/forward-arrow.svg';

export default function Benefits({ text }) {
  return (
    <>
      {benefits.map((benefit, index) => (
        <div className="benefits" key={index}>
          <div className="benefits__content">
            <div className="benefits__content__image">
              <img src={benefit.image} alt="" />
            </div>
            <div className="benefits__content__text">
              <h2>{benefit.title}</h2>
              <p>{benefit.description}</p>
              <a href="/" className="base-button--primary hero-button benefits-button">
                Get Started
                <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
