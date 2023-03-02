import React from 'react';
import { useState } from 'react';
import { Input, Button, Alert } from '../components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setPasswordVisibility } from '../redux/slices/loginSlice';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isVisible } = useSelector((state) => state.loginSlice);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const validatePassword = (pass1, pass2) => {
    return pass1.length < 4 || pass2.length < 4 || pass1 !== pass2 || !pass1 || !pass2
      ? false
      : true;
  };

  const handleRegistration = (email, password, password2) => {
    setError('');
    if (validateEmail(email) && validatePassword(password, password2)) {
      axios
        .post('http://localhost:8000/api/account/create/', { email, password, password2 })
        .then((res) => {
          if (res.data.hasOwnProperty('email')) {
            setError(res.data.email[0]);
          }
          setEmail('');
          setPassword('');
          setPassword2('');
          navigate('/logIn');
        })
        .catch((err) => setError(err.response.data.email[0]));
    } else {
      setError('Invalid Email or Password');
      setPassword('');
      setPassword2('');
    }
  };

  return (
    <div className="container">
      <Input placeholder={'login'} setInputValue={setEmail} value={email} />
      <div className="password__input">
        <Input
          type={isVisible ? 'text' : 'password'}
          placeholder={'password'}
          setInputValue={setPassword}
          value={password}
        />
        <FontAwesomeIcon icon={faEye} onClick={() => dispatch(setPasswordVisibility())} />
      </div>
      <Input
        type={isVisible ? 'text' : 'password'}
        placeholder={'repeat password'}
        setInputValue={setPassword2}
        value={password2}
      />
      {error && <Alert errorMessage={error} />}
      <p>
        If you have account, just <Link to="/logIn">Sign in</Link>
      </p>
      <Button
        className={'btn__logs'}
        name={'Register'}
        onClick={() => handleRegistration(email, password, password2)}
      />
    </div>
  );
};

export default Registration;
