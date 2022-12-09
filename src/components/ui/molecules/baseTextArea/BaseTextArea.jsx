import React from 'react';
import '../../../../styles/common/_base-input.scss';

export default function BaseTextArea({ className, label, ...props }) {
  return (
    <label className="base-input">
      <span>{label}</span>
      <textarea
        className={`base-input__input ${className}`}
        autocomplete="off"
        required
        spellCheck="false"
        {...props}
      ></textarea>
    </label>
  );
}
