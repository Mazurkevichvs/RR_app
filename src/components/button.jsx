import React from 'react';
import "./button.scss";


function Button({updateData,name}) { 

  return (
    <button onClick={updateData} className='btn'>{name}</button>
  )
}

export default Button