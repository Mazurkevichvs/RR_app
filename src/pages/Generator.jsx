import React from 'react';
import { Recipe, Button } from '../components';
import "./Generator.scss";


function Generator() {
  return (
    <>
    <section className="wrapper">
      <header>
          <input className='login__input' type="text" placeholder='example@mail.com '/>
          <button className='btn btn__log'>Log in</button>
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