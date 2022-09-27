import React, {useEffect, useState} from 'react';
import { Button, Aside, RecipeList } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import {logOut} from '../redux/slices/loginSlice';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Maintain() {
  const dispatch = useDispatch();
  const loginValue = useSelector((state) => state.loginSlice.loginValue);
  const [recipes, setRecipes] = useState([]);


  useEffect( () => {
     axios
      .get('http://localhost:8000/api/recipe/list/')
      .then((res) => setRecipes(res.data.results));
  },[])

  return (
    <section className="wrapper">
      <header>
          <p className="user__title">User: {loginValue}</p>  
          <Link to="/Generator"><Button onClick={() => dispatch(logOut())} className={'btn__log'} name={'Log out'} /></Link> 
      </header>
      <main>
        <Aside/>
        <RecipeList recipes={recipes}/>
      </main>
    </section>
  );
}

export default Maintain;
