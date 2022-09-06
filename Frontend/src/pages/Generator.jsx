import React, { useRef, useState } from 'react';
import { Recipe, Button, Aside } from '../components';
import { useSelector } from 'react-redux'
import './Generator.scss';
import axios from 'axios';



function Generator({ logIn, logOut, input, setInput }) {
  const loginData = useSelector((state) => state.loginSlice.loginValue)
  const [recipe, setRecipe] = useState(null);
  const recipeRef = useRef(null);

  const scrollTop = () => window.scroll(0, 0);

  const getRandomRecipe = async () => {  
    await axios
      .get('http://localhost:8000/api/recipe/random')
      .then((recipe) => setRecipe(recipe.data.results));
    recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
    console.log(recipe);
  };

  return (
    <>
      <section className="wrapper">
        <header>
          {loginData ? (
            <p className="user__title">User: {loginData}</p>
          ) : (
            <input
              onChange={(event) => setInput(event.target.value)}
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
          <Aside/>
          {loginData ? (
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
