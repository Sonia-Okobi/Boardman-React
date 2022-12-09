import React from 'react';
import '../../../../styles/common/_base-input.scss';

export default function BaseInput({ label, ...props }) {
  return (
    <label className="base-input">
        <span>{label}</span>
        <input
          className="base-input__input"
          autocomplete="off"
          required
          spellCheck="false"
          {...props}
        />
    </label>
  );
}
