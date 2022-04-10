import {React, useState, useContext} from 'react';
import Button from '../components/button';
import {Link} from 'react-router-dom';
import {UserContext} from '../UserContext';


function LogIn() {

const {login, setLogin} = useContext(UserContext);

const onChangeLogin = (event) => {
  setLogin(event.target.value)
}

  return (
      <div className='container'>
        <input onChange={onChangeLogin} className='login__input' type="text" placeholder='example@mail.com '/>
        <div>{login}</div>
        <Link to="/Generator"><Button  className={"btn__logs"} name={"log-in with Email"}/></Link>
        <Link to="/Generator"><Button className={"btn__logs"} name={"Continue offline"}/></Link>
      </div>        
  )
}

export default LogIn