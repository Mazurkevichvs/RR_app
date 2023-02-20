import React, { useEffect } from 'react';
import './App.scss';
import { Home, LogIn, Generator, Maintain, Registration, AddRecipe } from './pages';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setIsLogged } from './redux/slices/loginSlice'; 


function App() {
const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      axios.get('http://localhost:8000/api/account/me/',{
        headers: {
          'Authorization':
            `Bearer ${token}`,
        }})
        .then((res) => {
          const login = res.data.email
          dispatch(setIsLogged({login, token}))
        })
        .catch((err) => console.log('Error', err))
    }
  }, [])
  

// Add recipe feature

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn/>} />
        <Route
          path="/Generator"
          element={
            <Generator/>
          }
        />
        <Route
          path="/Maintain"
          element={
            <Maintain/>
          }
        />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/AddRecipe" element={<AddRecipe/>} />
      </Routes>
  );
}

export default App;
