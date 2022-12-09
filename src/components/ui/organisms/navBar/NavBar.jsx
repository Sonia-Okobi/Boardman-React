import React, { useState } from 'react';
import Logo from '../../atoms/logo/Logo';
import './index.scss';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
  };

  return (
    <div className="nav-bar app-container">
      <div className="nav-bar__content app-container__section">
        <div className="nav-bar__content__logo">
          <Logo />
        </div>
        <div className={`nav-bar__content__links ${nav ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-links__link">
              <Link to="/aboutpage" onClick={handleToggle}>
                About
              </Link>
            </li>
            <li className="nav-links__link">
              <Link to="/apipage" onClick={handleToggle}>
                Escrow API
              </Link>
            </li>
            <li className="nav-links__link">
              <Link to="/contactpage" onClick={handleToggle}>
                Contact Us
              </Link>
            </li>
            <li className="nav-links__link">
              <a href="/">Fees</a>
            </li>
          </ul>
          <ul className="nav-bar__buttons">
            <a href="/" className="base-button--inverted">
              Sign In
            </a>
            <a href="/" className="base-button--primary">
              Register
            </a>
          </ul>
        </div>

        <button className={`menu ${nav ? 'open' : ''}`} onClick={handleToggle}>
          <svg
            width="40"
            height="32"
            viewBox="0 0 40 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect opacity="0.1" width="40" height="32" rx="5" fill="#0C204C" />
            <path
              className="line top"
              d="M11 22H29"
              stroke="#0C204C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="line middle"
              d="M11 16H29"
              stroke="#0C204C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="line bottom"
              d="M11 10H29"
              stroke="#0C204C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
