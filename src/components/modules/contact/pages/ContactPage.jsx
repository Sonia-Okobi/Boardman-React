import React from 'react';
import DefaultLayout from '../../../ui/layout/defaultLayout/DefaultLayout';
import ContactForm from '../components/ContactForm';
import ContactHero from '../components/ContactHero';
import ContactMap from '../components/ContactMap';
import './index.scss';

export default function ContactPage() {
  return (
    <div>
      <DefaultLayout>
        <ContactHero/>
        <ContactForm />
        <ContactMap/>
      </DefaultLayout>
    </div>
  );
}
