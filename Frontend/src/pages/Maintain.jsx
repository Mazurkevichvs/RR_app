import React, {useEffect, useState} from 'react';
import { Aside, RecipeList, Header } from '../components';
import axios from 'axios';

function Maintain() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
     axios
      .get('http://localhost:8000/api/recipe/list/')
      .then((res) => {
        setRecipes(res.data.results)
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
