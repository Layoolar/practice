import React, { ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
    label: string;
    type: string;
    placeholder?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

const Input: React.FC<InputProps>= ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
