import React, { useState } from "react";
import "./App.scss";
import { Home, LogIn, Generator, Maintain } from "./pages";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";

function App() {
  const [login, setLogin] = useState();
  const [input, setInput] = useState(null);

  const meals = [
    { id: 1, name: "Breakfast" },
    { id: 2, name: "Launch" },
    { id: 3, name: "Dinner" },
  ];

  const logIn = () => {
    if (input != null) {
      setLogin(input);
      setInput(null);
    } else {
      console.log("Problem");
    }
  };

  const logOut = () => {
    setLogin(null);
  };

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn input={input} setInput={setInput} logIn={logIn} />} />
        <Route
          path="/Generator"
          element={<Generator input={input} setInput={setInput} logIn={logIn} logOut={logOut} meals={meals}/>}
        />
        <Route
          path="/Maintain"
          element={<Maintain input={input} setInput={setInput} logIn={logIn} logOut={logOut} meals={meals}/>}
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
