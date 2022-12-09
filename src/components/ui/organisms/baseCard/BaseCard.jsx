import React from 'react';
import './index.scss';

export default function BaseCard({ className='', icon, title, description }) {
  return (
    <div className={`base-card card ${className}`}>
      <div className="base-card__icon">
        <img src={icon} alt="Icon" />
      </div>
      <div className="text">
        <h4 className="base-card__title">{title}</h4>
        <p className="base-card__description">{description} </p>
      </div>
    </div>
  );
}
