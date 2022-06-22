import React, { useContext } from 'react';
import {Button, Aside, RecipeList} from '../components'
import { UserContext } from '../UserContext';

function Maintain({logIn, logOut, meals}) {
    const {login, setLogin} = useContext(UserContext);
    
  return (
      
    <section className="wrapper">
      <header>
          { login 
          ? <p className='user__title'>User: {login}</p> 
          : <input className='login__input' type="text" placeholder='example@mail.com '/>
          }
          { login 
          ? <Button onClick={logOut} className={"btn__log"} name={"Log out"}/> 
          : <Button onClick={logIn} className={"btn__log"} name={"Log in"}/>
          }
        </header>
        <main>
          <Aside meals={meals}/>
          <RecipeList/>
        </main>
    </section>
  )
}

export default Maintain