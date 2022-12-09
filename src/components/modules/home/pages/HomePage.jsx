import React from 'react';
import DefaultLayout from '../../../ui/layout/defaultLayout/DefaultLayout';
import HomeHero from '../components/HomeHero';
import HomeHow from '../components/HomeHow';
import HomeMilestone from '../components/HomeMilestone';
import HomePricing from '../components/HomePricing';
import HomeRisk from '../components/HomeRisk';
import HomeTestimonials from '../components/HomeTestimonials';
import HomeTransact from '../components/HomeTransact';
import './index.scss';

export default function HomePage() {
  return (
    <DefaultLayout>
      <HomeHero />
      <HomeHow />
      <HomeRisk />
      <HomeTransact />
      <HomeMilestone />
      <HomeTestimonials />
      <HomePricing />
    </DefaultLayout>
  );
}
