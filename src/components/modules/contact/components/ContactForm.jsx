import React from 'react';
import BaseButton from '../../../ui/atoms/baseButton/BaseButton';
import BaseInput from '../../../ui/molecules/baseInput/BaseInput';
import BaseTextArea from '../../../ui/molecules/baseTextArea/BaseTextArea';
import message from '../../../../assets/svg/message.svg';

export default function ContactForm() {
  return (
    <div className="contact-page__contact-form card app-container">
      <BaseInput
        type="text"
        label="Full name *"
        placeholder="Enter name"
        name="fullname"
      />
      <BaseInput
        type="email"
        label="Email *"
        placeholder="Enter email"
        name="emailAddress"
      />
      <BaseInput
        type="text"
        label="Company *"
        placeholder="Enter company"
        name="company"
      />
      <BaseTextArea
        className="text-area"
        type="text"
        label="Enter Message*"
        placeholder="How can we help you"
        name="message"
      />
      <BaseButton className="contact-button">
        {' '}
        <span>
          <img src={message} alt="Icon" />
        </span>{' '}
        Send Message
      </BaseButton>
    </div>
  );
}
