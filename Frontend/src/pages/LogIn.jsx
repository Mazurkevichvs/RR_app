import { React, useState, useContext } from "react";
import Button from "../components/button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setLogin } from '../redux/slices/loginSlice';

function LogIn({logIn, input, setInput}) {

  const login1 = useSelector((state) => state.loginReducer.loginValue)
  const dispatch = useDispatch()
  

  return (
    <div className="container"> 
      <input
        onChange={(event) => {
          dispatch(setLogin(event.target.value))
          console.log(login1)
        }}
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
