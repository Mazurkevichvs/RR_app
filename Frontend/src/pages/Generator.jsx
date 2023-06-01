import React, { useRef } from 'react';
import { Recipe, Button, Aside, Header, Alert} from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setRecipe } from '../redux/slices/recipeSlice';
import './Generator.scss';
import axios from 'axios';


function Generator() {
  const dispatch = useDispatch();
  const {isLogged, token} = useSelector((state) => state.loginSlice);
  const {recipe} = useSelector((state) => state.recipeSlice);
  const recipeRef = useRef(null);
  const scrollTop = () => window.scroll({ top: 0, left:0 ,behavior: 'smooth' });

  const getRandomRecipe = async () => {  
    await axios
      .get('http://localhost:8000/api/recipe/random')
      .then((recipe) => dispatch(setRecipe(recipe.data)));
    recipeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRandomOwnRecipe = async () => {  
    await axios
      .get('http://localhost:8000/api/recipe/random_own',{
        headers: {
          'Authorization':
            `Bearer ${token}`,
        },
      })
      .then((recipe) => dispatch(setRecipe(recipe.data)));
    recipeRef.current?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <>
      <section className="wrapper">
        <Header/>
        <main>
          <Aside/>
            <div className="generate__btns">
              {isLogged && <Button className={'btn__generate'} name={'Generate from your recepies'} onClick={() => getRandomOwnRecipe()}/>}
              <Button className={'btn__generate'} name={'Generate recipe from DB'} onClick={() => getRandomRecipe()}/>
              {recipe?.length === 0 && <Alert alertMessage={`You don't have own recipes yet`} className={'error'} type={false} />} 
            </div>          
        </main>
      </section>
      {recipe?.length > 0 && <Recipe scrollTop={scrollTop} recipeRef={recipeRef} recipe={recipe}/>}
    </>
  );
}

export default Generator;
