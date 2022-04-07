import {React, useState} from 'react';
import Button from '../components/button';
import {Link} from 'react-router-dom';

function LogIn() {
  const [login, setLogin] = useState('');

  const onChangeValue = (event) => {
    setLogin(() => (event.target.value));
    console.log(login);
  }

  return (
    <div className='container'>
      <input onChange={onChangeValue} className='login__input' type="text" placeholder='example@mail.com '/>
      <Link to="/Generator"><Button className={"btn__logs"} name={"log-in with Email"}/></Link>
      <Link to="/Generator"><Button className={"btn__logs"} name={"Continue offline"}/></Link>
    </div>
  )
}

export default LogIn