import React from 'react';
import './App.scss';
import { Home, LogIn, Generator, Maintain, Registration } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  

// logIn func to Redux
// Use backend for reg/auth  


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
      </Routes>
  );
}

export default App;
