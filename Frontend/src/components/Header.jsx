import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../components';
import axios from 'axios';
import { logOut } from '../redux/slices/loginSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const { loginValue, isLogged, token } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleLogOut = async () => {
    await axios
      .get('http://localhost:8000/api/account/logout/', {
        headers: {
          'Authorization':
            `Bearer ${token}`,
        },
      })
      .then((res) => {
        dispatch(logOut());
        localStorage.removeItem('token')
        navigate('/logIn');
      })
      .catch((err) => console.log('ERROR', err));
  };

  return (
    <header>
      <Link to='/Generator'>
        <h2 className='header__title'>
          RR <br />
          APP
        </h2>
      </Link>
      {isLogged && <p className="user__title">User: {loginValue}</p>}
      {isLogged ? (
        <Button onClick={() => HandleLogOut()} className={'btn__log'} name={'Log out'} />
      ) : (
        <Link to="/LogIn">
          <Button className={'btn__log'} name={'Log in'} />
        </Link>
      )}
    </header>
  );
};

export default Header;
