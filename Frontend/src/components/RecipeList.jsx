import React from 'react';
import './RecipeList.scss';
import RecipeItem from './RecipeItem';
import { Link } from 'react-router-dom';

function RecipeList({recipes}) {

const recipe = recipes.map(rec => <RecipeItem key={rec.id} recipe={rec}/>)


  return (
    <div className="recipe__wrapper">
      <div className='recipe__list'>
        <Link to="/AddRecipe">
          <div className='recipe__item first__recipe'>
              +
          </div>
        </Link>
        {recipe}
         
      </div>
    </div>
    
  )
}

export default RecipeList