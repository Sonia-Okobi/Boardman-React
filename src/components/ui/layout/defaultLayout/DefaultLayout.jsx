import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Footer from '../../organisms/footer/Footer';
import NavBar from '../../organisms/navBar/NavBar';

export default function DefaultLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
