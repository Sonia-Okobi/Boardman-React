import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../atoms/logo/Logo';
import Socials from '../../molecules/socials/Socials';
import './index.scss';

export default function Footer() {
  return (
    <div className="footer app-container">
      <div className="footer__content app-container__section">
        <div className="footer__content__links">
          <div className="footer__content__links__about">
            <Logo />
            <h5 className="footer__content__links__about__header">
              About Boardman
            </h5>
            <p className="footer__content__links__about__description">
              Engage in business that requires payments without the risks of
              chargebacks.
            </p>
          </div>
            <ul className="links">
              <p className="title">Support</p>
              <a href="/" className="link">
                Help
              </a>
              <a href="/" className="link">
                FAQs
              </a>
              <Link to="/contactpage" className="link">
                Contact Us
              </Link>
              {/* <a href="/" className="link">
                Contact Us
              </a> */}
              <a href="/" className="link">
                Payment Options
              </a>
            </ul>

            <ul className="links">
              <p className="title">Company</p>
              <Link to="/aboutpage" className="link">
                About Us
              </Link>
              {/* <a href="/" className="link">
                About Us
              </a> */}
              <a href="/" className="link">
                Why Us
              </a>
              <a href="/" className="link">
                Insurance
              </a>
              <a href="/" className="link">
                Virtual Warehouse
              </a>
            </ul>

            <ul className="links">
              <p className="title">Legal</p>
              <a href="/" className="link">
                Privacy Policy
              </a>
              <a href="/" className="link">
                Terms of Service
              </a>
              <a href="/" className="link">
                AML Policy
              </a>
            </ul>
        </div>
        <hr />
        <div className="footer__content__base">
          <p className="copyright">
            © 2021 Boardman Technologies Ltd. All rights reserved.
          </p>
          <Socials />
        </div>
      </div>
    </div>
  );
}
