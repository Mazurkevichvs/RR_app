import React, {useEffect} from 'react';
import './Aside.scss';
import { Link } from 'react-router-dom';
import Button from './button';
import { useDispatch, useSelector} from 'react-redux';
import {setCategory, setActiveItem} from '../redux/slices/categorySlice';
import axios from 'axios';


function Aside() {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.loginSlice.loginValue);
  const {categoryList, activeItem} = useSelector((state) => state.categorySlice);
 
 

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/recipe/list_category')
      .then((res) => 
        dispatch(setCategory(res.data.results))
      )
  })

  const categoryItem = categoryList.map( (category, index) => 
    <li 
      key={index} 
      onClick={() => dispatch(setActiveItem(index))} 
      className={activeItem === index ? 'active' : ''}
      >
        {category.name}
    </li> 
  );

  return (
    <aside> 
      <ul>
          {categoryItem}
      </ul>   
        {loginData && <Link to="/Maintain"><Button className={"btn__add__recipe"} name={"+"}/></Link>}
    </aside>
  )
}

export default Aside