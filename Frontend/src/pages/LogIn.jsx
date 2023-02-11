import { React, useState } from 'react';
import { Input, Button, Error } from '../components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { setLogin } from '../redux/slices/loginSlice';
import axios from 'axios';

function LogIn() {
  const dispatch = useDispatch();
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isVisible, setIsVisible] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setIsVisible(prev => !prev)
  }


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
        navigate('/Generator');
      })
      .catch((err) => setError(err.response.data.Invalid));
  };

  return (
    <div className="container">
      <Input placeholder="login" setInputValue={setLoginInput} />
      <div className='password__input'>
      <Input placeholder="password" setInputValue={setPasswordInput} type={isVisible ? 'text' : 'password'}/>
      <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility}/>
      </div>
      {error && <Error errorMessage={error}/>}
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
