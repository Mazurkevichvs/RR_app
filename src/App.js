import React, {useState} from 'react';
import './App.scss';
import {Home, LogIn, Generator, Maintain} from './pages';
import {Routes, Route} from 'react-router-dom';
import {UserContext} from './UserContext';

function App() {
  const [login, setLogin] = useState('');

  
  const logIn = () => {
    setLogin(input);
    setInput(null)
  }  
  const logOut = () => {
    setLogin(null);
  }

  return ( 
    <UserContext.Provider value={{login, setLogin}}>
      <Routes>   
          <Route path="/" element={<Home/>} />
          <Route path="/LogIn" element={<LogIn/>}/>
          <Route path="/Generator" element={<Generator logIn={logIn} logOut={logOut}/>}/>
          <Route path="/Maintain" element={<Maintain logIn={logIn} logOut={logOut}/>}/>
      </Routes>
     </UserContext.Provider>
  );
}

export default App;
