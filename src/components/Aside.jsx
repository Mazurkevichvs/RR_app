import React, {useState} from 'react';

import './Aside.scss'
import Button from './button';

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
        <Button className={"btn__add__recipe"} name={"+"}/>
    </aside>
  )
}

export default Aside