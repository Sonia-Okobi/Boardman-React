import React from 'react';
import shield from '../../../../assets/images/shield2.png';
import airbnb from '../../../../assets/svg/airbnb.svg';
import star from '../../../../assets/svg/star-fill.svg';
import author from '../../../../assets/images/author.png';

export default function HomeTestimonials() {
  return (
    <div className="home-page__home-testimonials app-container">
      <div className="home-page__home-testimonials__content app-container__section">
        <div className="home-page__home-testimonials__content__header">
          <div className="home-page__home-testimonials__content__header__image">
            <img src={author} alt="Author" />
          </div>
          <div className="home-page__home-testimonials__content__header__text">
            <h1 className="testimonials-header">Clients Testimonials</h1>
            <img src={star} alt="Icon" className="star" />
            <p className="testimonials-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus.
            </p>
            <div className="author">
              <img src={airbnb} alt="icon" className="airbnb" />
              <div className="author__details">
                <p className="author__details__name">David Herison</p>
                <p className="author__details__title">Founder & CEO</p>
              </div>
            </div>
            <div className="testimonials-button">
              <button className="prev button">Prev Story</button>
              <button className="next button">Next Story</button>
            </div>
          </div>
        </div>
        <div className="home-page__home-testimonials__content__base">
          <div className="home-page__home-testimonials__content__base__text">
            <h2 className="base-header">Transact with verified Partners</h2>
            <p className="base-description">
              With Boardman, all partners are verified at the highest level
              especially for businesses. Also, you can run checks on Businesses
              via their business names or registration number. Find out company
              status, registration details, shareholder information, and much
              more.
            </p>
          </div>
          <img src={shield} alt="Icon" className="base-icon" />
        </div>
      </div>
    </div>
  );
}
