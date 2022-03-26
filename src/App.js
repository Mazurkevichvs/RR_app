import React from 'react';
import './App.css';
import {Home, LogIn, Generator} from './pages';
import {Routes, Route} from 'react-router-dom';


function App() {

  return ( 
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="/Generator" element={<Generator/>}/>
    </Routes>
  );
}

export default App;
