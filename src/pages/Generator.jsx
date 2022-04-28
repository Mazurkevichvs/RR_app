import React, {useContext, useState, useRef} from 'react';
import { Recipe, Button, Aside } from '../components';
import "./Generator.scss";
import {UserContext} from '../UserContext';


function Generator({logIn, logOut}) {
  const {login, setLogin} = useContext(UserContext);
  const [input, setInput] = useState(null);

  const meals = [{id: 1, name: 'Breakfast'}, {id: 2, name: 'Launch'}, {id: 3, name: 'Dinner'}];

  const recipeRef = useRef(null);

  const scrollTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }
  
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);

  return (
    <>
    <section className="wrapper">
      <header>
          { login 
          ? <p className='user__title'>User: {login}</p> 
          : <input onChange={onChangeInput} className='login__input' type="text" placeholder='example@mail.com '/>
          }
          { login 
          ? <Button onClick={logOut} className={"btn__log"} name={"Log out"}/> 
          : <Button onClick={logIn} className={"btn__log"} name={"Log in"}/>
          }
        </header>
        <main>
          <Aside meals={meals} />
          { login 
          ? ( <div className='generate__btns'>
            <Button className={"btn__generate"} name={"Generate from your recepies"}/>
            <Button className={"btn__generate"} name={"Generate recipe from DB"}/>
          </div>
            
            ) 
          : <Button onClick={() => scrollToDiv(recipeRef)} className={"btn__generate"} name={"Generate from DB"}/>}
        </main>
    </section>
      
      {login || <Recipe scrollTop={scrollTop} recipeRef={recipeRef}/> }
      
    </>
  )
}

export default Generator