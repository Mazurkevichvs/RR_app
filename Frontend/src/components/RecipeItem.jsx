import React from 'react';
import './RecipeItem.scss';


const RecipeItem = ({recipe}) => {

    console.log(recipe)
    
  return (
    <div className='recipe__item'>
        <img src={recipe.image_url !== null ? recipe.image_url : '/no-image.jpg'} alt="meal"/>
        <h3>{recipe.title}</h3>
    </div>
  )
}

export default RecipeItem