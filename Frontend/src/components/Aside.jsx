import React, {useEffect} from 'react';
import './Aside.scss';
import { Link, useLocation } from 'react-router-dom';
import Button from './button';
import { useDispatch, useSelector} from 'react-redux';
import {setCategory, setActiveItem} from '../redux/slices/categorySlice';
import axios from 'axios';


function Aside() {
  const dispatch = useDispatch();
  const {loginValue} = useSelector((state) => state.loginSlice);
  const {categoryList, activeItem} = useSelector((state) => state.categorySlice);
  const url = useLocation()

  useEffect(() => {
    
    axios
      .get('http://localhost:8000/api/recipe/list_category')
      .then((res) => 
        dispatch(setCategory(res.data.results))
      )
      .catch(error => console.log(error))
  }, [])

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
        {loginValue && <Link to={url.pathname === '/Maintain' ? "/Generator" : "/Maintain"}><Button className={"btn__add__recipe"} name={url.pathname === '/Maintain' ? "<---" : "+"}/></Link>}
    </aside>
  )
}

export default Aside