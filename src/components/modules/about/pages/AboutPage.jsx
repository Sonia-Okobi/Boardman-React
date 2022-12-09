import React from 'react';
import DefaultLayout from '../../../ui/layout/defaultLayout/DefaultLayout';
import AboutBenefits from '../components/AboutBenefits';
import AboutHero from '../components/AboutHero';
import AboutWhy from '../components/AboutWhy';
import './index.scss';

export default function AboutPage() {
  return (
    <DefaultLayout>
      <AboutHero />
      <AboutWhy />
      <AboutBenefits />
    </DefaultLayout>
  );
}
