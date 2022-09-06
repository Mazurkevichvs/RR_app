import React, { useEffect, useState } from 'react';
import './App.scss';
import { Home, LogIn, Generator, Maintain } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setLogin } from './redux/slices/loginSlice';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch()
  

  

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
              input={input}
              setInput={setInput}
            />
          }
        />
      </Routes>
  );
}

export default App;
