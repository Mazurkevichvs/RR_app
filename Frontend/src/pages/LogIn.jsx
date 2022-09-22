import { React, useState } from "react";
import {Input, Button} from '../components';
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setLogin, setPassword} from '../redux/slices/loginSlice';
import axios from "axios";

function LogIn() {

  const dispatch = useDispatch();

  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const logIn = async (loginInput, passwordInput) => {
    const user = {
      username: loginInput,
      password: passwordInput
    }
    
    await axios.post('http://localhost:8000/api/account/login/', user)
    .then(res => {
      dispatch(setLogin(loginInput));  
    dispatch(setPassword(passwordInput));
    console.log(res)
    })
    .catch(err => console.log("ERROR",err))

    
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
