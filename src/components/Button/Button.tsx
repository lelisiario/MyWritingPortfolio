// src/components/Button/Button.tsx (UPDATED to accept mouse events)
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';
import type { ButtonProps } from '../../types/common';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  link,
  target,
  download,
  className,
  style,
  onMouseEnter, // <--- ACCEPT PROP
  onMouseLeave, // <--- ACCEPT PROP
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className || ''}`;

  if (link) {
    if (link.startsWith('/') || link.startsWith('#')) {
      return (
        <Link
          to={link}
          className={buttonClasses}
          onClick={onClick}
          style={style}
          onMouseEnter={onMouseEnter} // <--- PASS PROP
          onMouseLeave={onMouseLeave} // <--- PASS PROP
        >
          {children}
        </Link>
      );
    } else {
      return (
        <a
          href={link}
          className={buttonClasses}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          download={download}
          style={style}
          onMouseEnter={onMouseEnter} // <--- PASS PROP
          onMouseLeave={onMouseLeave} // <--- PASS PROP
        >
          {children}
        </a>
      );
    }
  }

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      style={style}
      onMouseEnter={onMouseEnter} // <--- PASS PROP
      onMouseLeave={onMouseLeave} // <--- PASS PROP
    >
      {children}
    </button>
  );
};

export default Button;