import React, { useContext, useState, useRef, useEffect } from 'react';
import { Recipe, Button, Aside } from '../components';
import './Generator.scss';
import { UserContext } from '../UserContext';
import axios from 'axios';

function Generator({ logIn, logOut, setInput, meals }) {
  const [recipe, setRecipe] = useState(null)
  const { login } = useContext(UserContext);
  const recipeRef = useRef(null);

  const scrollTop = () => window.scroll(0, 0);

  // const scrollToDiv = (ref) => {
  //   window.scrollTo(0, ref.current.offsetTop);
  // }
//  useEffect(() => {
//   axios.get("http://localhost:8000/api/recipe/random").then((recipe) => setRecipe(recipe.data.results))
//  }, [])
  const getRecipe = () => {
    axios.get("http://localhost:8000/api/recipe/random").then((recipe) => setRecipe(recipe.data.results))
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
              <Button className={'btn__generate'} name={'Generate recipe from DB'} onClick={() => getRecipe()}/>
            </div>
          ) : (
            <Button
              onClick={() => getRecipe()}
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
