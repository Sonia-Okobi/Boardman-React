import React from 'react';
import './index.scss';
import logo from '../../../../assets/svg/logo.svg';
import { Link } from 'react-router-dom';

export default function Logo({ className }) {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
    </>
  );
}
