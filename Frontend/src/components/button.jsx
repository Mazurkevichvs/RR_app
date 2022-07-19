import React from 'react';
import "./button.scss";

function Button({onClick,className,name}) { 

  return (
    <button onClick={onClick} className={className ? `btn ${className}` : "btn"}>{name}</button>
  )
}

export default Button