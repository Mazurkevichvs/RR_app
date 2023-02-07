import { React, useState } from 'react';
import { Input, Button } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setPassword } from '../redux/slices/loginSlice';
import axios from 'axios';

function LogIn() {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigate = useNavigate();

  const logIn = async (loginInput, passwordInput) => {
    const user = {
      username: loginInput,
      password: passwordInput,
    };
    await axios
      .post('http://localhost:8000/api/account/login/', user)
      .then((res) => {
        dispatch(setLogin(loginInput));
        dispatch(setPassword(passwordInput));
        navigate('/Generator');
      })
      .catch((err) => console.log('ERROR', err));
  };

  return (
    <div className="container">
      <Input placeholder="login" setInputValue={setLoginInput} />
      <Input placeholder="password" setInputValue={setPasswordInput} />
      <p>
        Don't have an account? <Link to="/Registration">Register now!</Link>
      </p>
      <Button
        onClick={() => logIn(loginInput, passwordInput)}
        className={loginInput && passwordInput ? 'btn__logs' : 'btn__logs btn__disabled'}
        name={'Log in'}
      />
      <Link to="/Generator">
        <Button className={'btn__logs'} name={'Continue offline'} />
      </Link>
    </div>
  );
}

export default LogIn;
