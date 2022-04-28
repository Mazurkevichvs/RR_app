import React, { useContext } from 'react';
import {Button, Aside} from '../components'
import { UserContext } from '../UserContext';

function Maintain() {
    const {login, setLogin} = useContext(UserContext);
    
  return (
      
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
  )
}

export default Maintain