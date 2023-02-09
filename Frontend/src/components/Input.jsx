import React from 'react';
import './Input.scss';


const Input = ({placeholder, setInputValue, type}) => {

  return (
    <input
        onChange={(event) => setInputValue(event.target.value)}
        className="login__input"
        type={type ? `${type}` : "text"}
        placeholder={placeholder}
      />
  )
}

export default Input