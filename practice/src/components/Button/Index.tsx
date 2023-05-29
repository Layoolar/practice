import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
  const buttonClasses = `${styles.button} ${styles[variant]}`;

  return <button className={buttonClasses} {...props} />;
};

export default Button;
