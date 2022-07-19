import React, {useState, useContext} from 'react';
import { UserContext } from '../UserContext';
import './Aside.scss';
import { Link } from 'react-router-dom';
import Button from './button';

function Aside({meals}) {
  const { login } = useContext(UserContext);
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
        {login && <Link to="/Maintain"><Button className={"btn__add__recipe"} name={"+"}/></Link>}
    </aside>
  )
}

export default Aside