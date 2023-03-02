import React from 'react';
import './RecipeItem.scss';


const RecipeItem = ({recipe}) => {    
  return (
    <div className='recipe__item'>
        <img src={recipe.image_url ? recipe.image_url : '/no-image.jpg'} alt="meal"/>
        <h3>{recipe.title}</h3>
    </div>
  )
}

export default RecipeItem