import React from 'react';
import DefaultLayout from '../../../ui/layout/defaultLayout/DefaultLayout';
import ApiAbout from '../components/ApiAbout';
import ApiHero from '../components/ApiHero';
import './index.scss';

export default function ApiPage() {
  return (
    <div>
      <DefaultLayout>
        <ApiHero />
        <ApiAbout/>
      </DefaultLayout>
    </div>
  );
}
