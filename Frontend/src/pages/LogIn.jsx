import { React, useState } from "react";
import {Input, Button} from '../components';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setLogin, setPassword} from '../redux/slices/loginSlice';

function LogIn() {

  const dispatch = useDispatch();

  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const logIn = (loginInput, passwordInput) => {
    dispatch(setLogin(loginInput));  
    dispatch(setPassword(passwordInput));  
};
  
  return (
    <div className="container"> 
      <Input placeholder = 'login' setInputValue={setLoginInput}/>
      <Input placeholder = 'password' setInputValue={setPasswordInput}/>
      <p>Don't have an account? <Link to="/Registration">Register now!</Link></p>
      {loginInput && passwordInput ? (
        <Link to="/Generator">
          <Button
            onClick={() => logIn(loginInput, passwordInput)}
            className={"btn__logs"}
            name={"Log in"}
          />
        </Link>
      ) : (
        <Button
          className={"btn__logs btn__disabled"}
          name={"Log in"}
        />
      )}
      <Link to="/Generator">
        <Button className={"btn__logs"} name={"Continue offline"} />
      </Link>
    </div>
  );
}

export default LogIn;
