import { React, useState } from "react";
import Button from "../components/button";
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
      <input
        onChange={(event) => {
          setLoginInput(event.target.value);
          
        }}
        className="login__input"
        type="text"
        placeholder="login"
      />
      <input
        onChange={(event) => {
          setPasswordInput(event.target.value);
          
        }}
        className="login__input"
        type="text"
        placeholder="password"
      />
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
