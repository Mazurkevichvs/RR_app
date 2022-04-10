import React, {useContext} from 'react';
import { Recipe, Button } from '../components';
import "./Generator.scss";
import {UserContext} from '../UserContext';



function Generator() {
  const {login, setLogin} = useContext(UserContext);

  const logOut = () => {
    setLogin(null);
  }

  return (
    <>
    <section className="wrapper">
      <header>
          { login ? <p className='user__title'>User: {login}</p> : <input className='login__input' type="text" placeholder='example@mail.com '/>}
          { login ? <Button onClick={logOut} className={"btn__log"} name={"Log out"}/> : <Button  className={"btn__log"} name={"Log in"}/>}
        </header>
        <main>
          <aside>
              <ul>
                <li>Breakfast</li>
                <li>Lunch</li>
                <li>Dinner</li>
              </ul>
          </aside>
          <Button className={"btn__generate"} name={"Generate recipe"}/>
        </main>
    </section>
      
      <Recipe/>
      
    </>
  )
}

export default Generator