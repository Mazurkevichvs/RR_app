import React, {useState} from 'react';

import './Aside.scss'

function Aside({meals}) {

  const [isActive, setActive] = useState(1);  

  const listItem = meals.map( (meal) => 
    <li 
      key={meal.id} 
      onClick={() => setActive(meal.id)} 
      className={isActive === meal.id ? 'active' : ''}
      >
        {meal.name}
    </li> 
  );

  return (
    <aside>
        <ul>
            {listItem}
        </ul>
    </aside>
  )
}

export default Aside