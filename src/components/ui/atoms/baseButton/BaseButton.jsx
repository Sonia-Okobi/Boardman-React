import React from 'react';

export default function BaseButton({
  variant = 'primary',
  className = '',
  children,
  icon,
  // iconPosLeft,
  ...props
}) {
  return (
    <button
      className={`base-button--${variant} ${className} flex gap-5`}
      {...props}
    >
      {/* {icon && iconPosLeft ? (
        <span className="base-button__icon">
          <img src={icon} alt="Icon" />
        </span>
      ) : null} */}
      {children}
      {/* {icon && !iconPosLeft ? (
        <span className="base-button__icon">
          <img src={icon} alt="Icon" />
        </span>
      ) : null} */}
    </button>
  );
}
