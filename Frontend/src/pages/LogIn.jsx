import { React, useState } from 'react';
import { Input, Button, Alert } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { setLogin, setPasswordVisibility } from '../redux/slices/loginSlice';
import axios from 'axios';

function LogIn() {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const {isVisible} = useSelector((state) => state.loginSlice)
  
  const logIn = async (loginInput, passwordInput) => {
    const user = {
      username: loginInput,
      password: passwordInput,
    };
    await axios
      .post('http://localhost:8000/api/account/login/', user)
      .then((res) => {
        const token = res.data.data.access
        console.log(res)
        dispatch(setLogin({loginInput, passwordInput, token}));
        localStorage.setItem('token', token)
        navigate('/generator');
      })
      .catch((err) => setError(err.response.data.Invalid));
  };

  return (
    <div className="container login">
      <Input placeholder="login" setInputValue={setLoginInput} />
      <div className='password__input'>
      <Input placeholder="password" setInputValue={setPasswordInput} type={isVisible ? 'text' : 'password'}/>
      <FontAwesomeIcon icon={faEye} onClick={() => dispatch(setPasswordVisibility())}/>
      </div>
      {error && <Alert alertMessage={error} className={'error'} type={false} />}
      <p>
        Don't have an account? <Link to="/registration">Register now!</Link>
      </p>
      <Button
        onClick={() => logIn(loginInput, passwordInput)}
        className={loginInput && passwordInput ? 'btn__logs' : 'btn__logs btn__disabled'}
        name={'Log in'}
      />
      <Link to="/generator">
        <Button className={'btn__logs'} name={'Continue offline'} />
      </Link>
    </div>
  );
}

export default LogIn;
