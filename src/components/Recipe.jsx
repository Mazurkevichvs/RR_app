import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpLong} from '@fortawesome/free-solid-svg-icons';
import './Recipe.scss';

function Recipe({scrollTop,recipeRef}) {
  return (
    <footer ref={recipeRef}>
        <section className='recipe__top'>   
          <div onClick={() => scrollTop()} className='arrow'><FontAwesomeIcon icon={faArrowUpLong} /></div>
          <p className='username'>by User123</p>
        </section>
        <section className='recipe__description'>
          <ul className='ingredients'>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
              <li>ingredient</li>
          </ul>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam aperiam accusamus ducimus asperiores neque nihil illo veritatis voluptate itaque? Officiis esse voluptatibus reprehenderit ex doloribus cumque beatae consectetur, modi quae quaerat pariatur dolorem explicabo saepe dolores consequatur ducimus illo iure quo blanditiis eum, voluptatem similique natus. Dicta quisquam fugit a ducimus amet ipsa, voluptatum fugiat quaerat reiciendis praesentium ipsam rem perspiciatis deserunt sed quis voluptatibus. Aspernatur accusantium recusandae dolorum eum voluptas autem pariatur quia repellat?</p>
        </section>
        
    </footer>
  )
}

export default Recipe;