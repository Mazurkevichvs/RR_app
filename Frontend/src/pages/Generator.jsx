import React, { useRef, useState } from 'react';
import { Recipe, Button, Aside } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {logOut} from '../redux/slices/loginSlice';
import { Link } from "react-router-dom";
import './Generator.scss';
import axios from 'axios';



function Generator() {
  const dispatch = useDispatch();
  const {loginValue, passwordValue} = useSelector((state) => state.loginSlice);
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
          {loginValue &&
            <p className="user__title">User: {loginValue}</p>
          }
          {loginValue ? (
            <Button onClick={() => dispatch(logOut())} className={'btn__log'} name={'Log out'} />
          ) : (
            <Link to="/LogIn"><Button className={'btn__log'} name={'Log in'} /></Link>
          )}
        </header>
        <main>
          <Aside/>
            <div className="generate__btns">
              {loginValue && <Button className={'btn__generate'} name={'Generate from your recepies'} />}
              <Button className={'btn__generate'} name={'Generate recipe from DB'} onClick={() => getRandomRecipe()}/>
            </div>          
        </main>
      </section>

      {recipe && <Recipe scrollTop={scrollTop} recipeRef={recipeRef} recipe={recipe}/>}
    </>
  );
}

export default Generator;
