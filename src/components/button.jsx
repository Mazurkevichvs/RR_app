import React from 'react';
import "./button.scss";



function Button({className,updateData,name}) { 

  return (
    <button onClick={updateData} className={className ? `btn ${className}` : "btn"}>{name}</button>
  )
}

export default Button