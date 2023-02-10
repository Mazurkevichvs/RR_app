import React from 'react'
import './Error.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


const Error = ({errorMessage}) => {
  return (
    <div className='error__container'>
        <FontAwesomeIcon icon={faCircleExclamation} />
        <h4>{errorMessage}</h4>
    </div>
  )
}

export default Error