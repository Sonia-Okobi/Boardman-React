import React from 'react';
import arrow from '../../../../assets/svg/forward-arrow.svg';

export default function AboutHero() {
  return (
    <div className="about-page__about-hero  hero">
      <div className="about-page__about-hero__content">
        <div className="about-page__about-hero__content__text">
          <h1 className="hero-header">
            Sed conseq mi ligula, a sagittis metus interdum sit amet.
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed conseq
            mi ligula, a sagittis metus interdum sit amet.{' '}
          </p>
          <a href="/" className="base-button--primary hero-button">
            Get Started
            <img src={arrow} alt="arrow" />
          </a>
        </div>
        <div className="about-page__about-hero__content__image rectangle">
          <p className="image-text">
            Laoreet porttitor hendrerit arcu congue nec. Ultrices sapien nisi
            cras leo urna purus scelerisque. Viverra commodo vitae pellentesque
            mattis imperdiet morbi orci posuere dui. Auctor sit quis arcu
            tristique{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
