import React from 'react';
import { Button, Aside, RecipeList } from '../components';
import { useSelector } from 'react-redux';

function Maintain({ logIn, logOut, meals, input, setInput }) {
  const loginData = useSelector((state) => state.loginReducer.loginValue);

  return (
    <section className="wrapper">
      <header>
        {loginData ? (
          <p className="user__title">User: {loginData}</p>
        ) : (
          <input
            onChange={(event) => {
              setInput(event.target.value);
            }}
            className="login__input"
            type="text"
            placeholder="example@mail.com "
          />
        )}
        {loginData ? (
          <Button onClick={logOut} className={'btn__log'} name={'Log out'} />
        ) : (
          <Button onClick={() => logIn(input)} className={'btn__log'} name={'Log in'} />
        )}
      </header>
      <main>
        <Aside meals={meals} />
        <RecipeList />
      </main>
    </section>
  );
}

export default Maintain;
