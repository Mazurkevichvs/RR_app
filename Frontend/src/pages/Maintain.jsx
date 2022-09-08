import React from 'react';
import { Button, Aside, RecipeList } from '../components';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

function Maintain({logOut}) {
  const loginData = useSelector((state) => state.loginReducer.loginValue);

  return (
    <section className="wrapper">
      <header>
        {loginData && 
          <p className="user__title">User: {loginData}</p>  
        }
        {loginData ? (
          <Button onClick={logOut} className={'btn__log'} name={'Log out'} />
        ) : (
          <Link to="/LogIn"><Button className={'btn__log'} name={'Log in'} /></Link>
        )}
      </header>
      <main>
        <Aside/>
        <RecipeList />
      </main>
    </section>
  );
}

export default Maintain;
