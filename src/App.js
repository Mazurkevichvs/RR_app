import React, {useState} from 'react';
import './App.scss';
import {Home, LogIn, Generator} from './pages';
import {Routes, Route} from 'react-router-dom';
import {UserContext} from './UserContext';

function App() {
  const [login, setLogin] = useState('');

  return ( 
    <UserContext.Provider value={{login, setLogin}}>
      <Routes>   
          <Route path="/" element={<Home/>} />
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Generator" element={<Generator/>}/>       
      </Routes>
     </UserContext.Provider>
  );
}

export default App;
