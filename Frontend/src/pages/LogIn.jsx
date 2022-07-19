import { React, useState, useContext } from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";

function LogIn({logIn, input, setInput}) {

  return (
    <div className="container"> 
      <input
        onChange={(event) => setInput(event.target.value)}
        className="login__input"
        type="text"
        placeholder="example@mail.com "
      />
      {input ? (
        <Link to="/Generator">
          <Button
            onClick={logIn}
            className={"btn__logs"}
            name={"log-in with Email"}
          />
        </Link>
      ) : (
        <Button
          onClick={logIn}
          className={"btn__logs"}
          name={"log-in with Email"}
        />
      )}
      <Link to="/Generator">
        <Button className={"btn__logs"} name={"Continue offline"} />
      </Link>
    </div>
  );
}

export default LogIn;
