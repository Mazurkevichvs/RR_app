import React from 'react';
import { useState } from 'react';
import {Input, Button} from '../components';
import axios from 'axios';


const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleRegistration = (email, password, password2) => {
    if(password === password2) {
      axios.post('http://localhost:8000/api/account/create/', {email, password, password2})
      .then((res) => console.log('RESPONSE',res))
      .catch((err) => console.log('ERROR', err))
    }
  }

  return (
    <div className='container'>
        <Input placeholder={'login'} setInputValue = {setEmail}/>
        <Input placeholder={'password'} setInputValue = {setPassword}/>
        <Input placeholder={'repeat password'} setInputValue = {setPassword2}/>
        <Button className={"btn__logs"} name={"Register"} onClick={() => handleRegistration(email,password, password2)}/>
    </div>
  )
}

export default Registration