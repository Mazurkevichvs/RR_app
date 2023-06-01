import React from 'react';
import './Input.scss';

const Input = ({ placeholder, setInputValue, type, className, value }) => {
  return (
    <input
      onChange={(event) => setInputValue(event.target.value)}
      className={className ? `login__input ${className}` : 'login__input'}
      type={type ? `${type}` : 'text'}
      placeholder={placeholder}
      value={value}
    />
  );
};

export default Input;
