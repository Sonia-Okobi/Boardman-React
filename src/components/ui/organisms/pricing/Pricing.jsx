import React from 'react';
import './index.scss';
import flag from '../../../../assets/svg/Nigeria-flag.svg';

export default function Pricing({ prices }) {
  return (
    <>
      {prices.map((price, index) => (
        <PricingTable key={index} price={price} />
      ))}
    </>
  );
}

function PricingTable({ price }) {
  return (
    <>
      <div className="pricing">
        <div className="pricing__content">
          <h5 className="pricing__content__title">
            <span>
              <img src={flag} alt="Flag" />
            </span>{' '}
            {price.title}
          </h5>
          <div className="pricing__content__headers">
            {price.headers.map((header, index) => (
              <p
                className="pricing__content__headers__header"
                key={index}
                data-wide={price.headers.length < 4}
              >
                {header}
              </p>
            ))}
          </div>
          <div className="pricing__content__prices">
            {price.data.map((row, index) => (
              <div className="pricing__content__prices__price">
                {row.map((col, i) => (
                  <p
                    key={i}
                    data-wide={row.length < 4}
                    data-heading={price.headers[i]}
                  >
                    {col}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
