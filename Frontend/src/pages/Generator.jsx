import React, { useContext, useState, useRef, useEffect } from 'react';
import { Recipe, Button, Aside } from '../components';
import './Generator.scss';
import { UserContext } from '../UserContext';


function Generator({ logIn, logOut, setInput, meals, recipe, setRecipe }) {
  const { login } = useContext(UserContext);
  const recipeRef = useRef(null);

  const scrollTop = () => window.scroll(0, 0);

  const getRandomRecipe = () => {  
    recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log(recipe);
  };

  return (
    <>
      <section className="wrapper">
        <header>
          {login ? (
            <p className="user__title">User: {login}</p>
          ) : (
            <input
              onChange={(event) => setInput(event.target.value)}
              className="login__input"
              type="text"
              placeholder="example@mail.com "
            />
          )}
          {login ? (
            <Button onClick={logOut} className={'btn__log'} name={'Log out'} />
          ) : (
            <Button onClick={logIn} className={'btn__log'} name={'Log in'} />
          )}
        </header>
        <main>
          <Aside meals={meals} />
          {login ? (
            <div className="generate__btns">
              <Button className={'btn__generate'} name={'Generate from your recepies'} />
              <Button className={'btn__generate'} name={'Generate recipe from DB'} onClick={() => getRandomRecipe()}/>
            </div>
          ) : (
            <Button
              onClick={() => getRandomRecipe()}
              className={'btn__generate'}
              name={'Generate from DB'}
            />
          )}
          
        </main>
      </section>

      {recipe && <Recipe scrollTop={scrollTop} recipeRef={recipeRef} recipe={recipe}/>}
    </>
  );
}

export default Generator;
