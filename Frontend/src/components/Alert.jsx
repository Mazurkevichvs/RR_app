import React from 'react'
import './Alert.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';


const Alert = ({className, alertMessage, type}) => {
  return (
    <div className={className ? `alert__container ${className}` : 'alert__container'}>
        <FontAwesomeIcon icon={type ? faCircleCheck :  faCircleExclamation } />
        <h4>{alertMessage}</h4>
    </div>
  )
}

export default Alert