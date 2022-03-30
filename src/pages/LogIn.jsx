import React from 'react';
import Button from '../components/button';
import {Link} from 'react-router-dom';

function LogIn() {
  return (
    <div className='container'>
      <input className='login__input' type="text" placeholder='example@mail.com '/>
      <Link to="/Generator"><Button className={"btn__logs"} name={"log-in with Email"}/></Link>
      <Button className={"btn__logs"} name={"Continue offline"}/>
    </div>
  )
}

export default LogIn