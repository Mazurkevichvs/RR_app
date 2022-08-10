import React, { useEffect, useState } from 'react';
import './App.scss';
import { Home, LogIn, Generator, Maintain } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setLogin } from './redux/slices/loginSlice';
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [recipe, setRecipe] = useState(null);
  const dispatch = useDispatch()
  

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/recipe/random')
      .then((recipe) => setRecipe(recipe.data.results));
  }, []);

  const meals = [
    { id: 1, name: 'Breakfast' },
    { id: 2, name: 'Launch' },
    { id: 3, name: 'Dinner' },
  ];

  const logIn = (str) => {
    console.log(str)
      dispatch(setLogin(str));  
  };

  const logOut = () => {
    dispatch(setLogin(null));
    setInput(null);
  };

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn logIn={logIn} input={input} setInput={setInput} />} />
        <Route
          path="/Generator"
          element={
            <Generator
              logIn={logIn}
              logOut={logOut}
              meals={meals}
              recipe={recipe}
              setRecipe={setRecipe}
              input={input}
              setInput={setInput}
            />
          }
        />
        <Route
          path="/Maintain"
          element={
            <Maintain
              logIn={logIn}
              logOut={logOut}
              meals={meals}
              input={input}
              setInput={setInput}
            />
          }
        />
      </Routes>
  );
}

export default App;
