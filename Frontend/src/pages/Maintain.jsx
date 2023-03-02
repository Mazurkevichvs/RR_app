import React, {useEffect, useState} from 'react';
import { Aside, RecipeList, Header } from '../components';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

function Maintain() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
     axios
      .get('http://localhost:8000/api/recipe/list/')
      .then((res) => {
        setRecipes(res.data.results)
        console.log(res)
      });
  },[])

  return (
    <section className="wrapper">
      <Header/>
      <main>
        <Aside/>
        <RecipeList recipes={recipes}/>
      </main>
    </section>
  );
}

export default Maintain;
