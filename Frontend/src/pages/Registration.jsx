import React from 'react';
import { useState } from 'react';
import {Input, Button, Error} from '../components';
import axios from 'axios';


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('')
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePassword = (pass1, pass2) => {
    return pass1.length < 4 || pass2.length < 4 || pass1 !== pass2 || !pass1 || !pass2 ? false : true
  }

  const handleRegistration = (email, password, password2) => {
    setError('')
    if(validateEmail(email) && validatePassword(password, password2)) {
      axios.post('http://localhost:8000/api/account/create/', {email, password, password2})
      .then((res) => {
        console.log('RESPONSE',res)
        if(res.data.hasOwnProperty('email')) {
          setError(res.data.email[0])
        }
      })
      .catch((err) => console.log('ERROR', err))
    } else {
      setError('Invalid Email or Password')
    } 
  }

  return (
    <div className='container'>
        <Input placeholder={'login'} setInputValue = {setEmail}/>
        <Input type={'password'} placeholder={'password'} setInputValue = {setPassword}/>
        <Input type={'password'} placeholder={'repeat password'} setInputValue = {setPassword2}/>
        {error && <Error errorMessage={error}/>}
        <Button className={"btn__logs"} name={"Register"} onClick={() => handleRegistration(email,password, password2)}/>
    </div>
  )
}

export default Registration