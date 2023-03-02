import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import './Recipe.scss';

function Recipe({ scrollTop, recipeRef, recipe }) {
  const ingredients = recipe[0].ingredients.split(',');

  return (
    <section className="recipe__container" ref={recipeRef}>
      <section className="recipe__top">
        <img src={recipe[0].image_url ? recipe[0].image_url : '/no-image.jpg'} alt="meal" />
        <div onClick={() => scrollTop()} className="arrow">
          <FontAwesomeIcon icon={faArrowUpLong} />
        </div>
      </section>
      <section className="recipe__description">
        <ul className="ingredients">
          {ingredients.map((item, id) => (
            <li key={id}>{item}</li>
          ))}
        </ul>
        <p>
          {recipe[0].description}
          <span className="username">
            <br />
            <b>by {recipe[0].user}</b>
          </span>
        </p>
      </section>
    </section>
  );
}

export default Recipe;
