import React, { useRef, useState } from 'react';
import { Recipe, Button, Aside, Header } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import './Generator.scss';
import axios from 'axios';



function Generator() {
  const dispatch = useDispatch();
  const {loginValue, isLogged} = useSelector((state) => state.loginSlice);
  const [recipe, setRecipe] = useState(null);
  const recipeRef = useRef(null);
  const scrollTop = () => window.scroll(0, 0);

  const getRandomRecipe = async () => {  
    await axios
      .get('http://localhost:8000/api/recipe/random')
      .then((recipe) => setRecipe(recipe.data.results));
    recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="wrapper">
        <Header/>
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
