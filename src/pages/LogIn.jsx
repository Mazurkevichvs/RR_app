import {React, useState, useContext} from 'react';
import Button from '../components/button';
import {Link} from 'react-router-dom';
import {UserContext} from '../UserContext';


function LogIn() {

const {login, setLogin} = useContext(UserContext);
const [input, setInput] = useState(null);

const onChangeInput = (event) => {
  setInput(event.target.value)
}

const logIn = () => {
  if(input != null) {
    setLogin(input);
    setInput(null);
  }
  else {
    console.log("Problem")
  }
  
}

  return (
      <div className='container'>
        <input onChange={onChangeInput} className='login__input' type="text" placeholder='example@mail.com '/>
        <Link to="/Generator"><Button onClick={logIn} className={"btn__logs"} name={"log-in with Email"}/></Link>
        <Link to="/Generator"><Button className={"btn__logs"} name={"Continue offline"}/></Link>
      </div>        
  )
}

export default LogIn