import React, {useState} from 'react';
import './Aside.scss';
import { Link } from 'react-router-dom';
import Button from './button';
import { useSelector} from 'react-redux'

function Aside({meals}) {
  const loginData = useSelector((state) => state.loginReducer.loginValue)
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
        {loginData && <Link to="/Maintain"><Button className={"btn__add__recipe"} name={"+"}/></Link>}
    </aside>
  )
}

export default Aside