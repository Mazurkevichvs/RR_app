import React from 'react';
import './RecipeList.scss';
import RecipeItem from './RecipeItem';

function RecipeList({recipes}) {

const recipe = recipes.map(rec => <RecipeItem key={rec.id} recipe={rec}/>)


  return (
    <div className="recipe__wrapper">
      <div className='recipe__list'>
        <div className='recipe__item first__recipe'>
            +
        </div>
        {recipe}
         
      </div>
    </div>
    
  )
}

export default RecipeList