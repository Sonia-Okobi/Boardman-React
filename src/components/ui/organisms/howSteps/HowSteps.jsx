import React from 'react';
import './index.scss';
import arrow from '../../../../assets/svg/anim_arrow 1.svg';
import { steps } from './constant';

export default function HowSteps() {
  return (
    <>
      {steps.map((step, index) => (
        <div className="how-steps app-container" key={index}>
          <div className="how-steps__content app-container__section">
            <div className="how-steps__content__image">
              <img src={step.image} alt="transaction" className="image buy" />
              <img
                src={step.image2}
                alt="transaction"
                className="image sell"
              />
              {/* <div className="scribble-text">
                <h3>Simple Bookings</h3>
                <img src={arrow} alt="Arrow" className="arrow" />
              </div> */}
              <h3 className="scribble-text">
                Simple Bookings{' '}
                <span>
                  <img src={arrow} alt="Arrow" className="arrow" />
                </span>
              </h3>
            </div>
            <div className="how-steps__content__text">
              <h3 className="how-steps__content__text__header">
                {step.header}
              </h3>
              <p className="how-steps__content__text__description">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
