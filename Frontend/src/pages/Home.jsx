import React from 'react'
import Button from '../components/button';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const {isLogged} = useSelector((state => state.loginSlice))
  return (
    <div className='container home'>
      <h1 className='app__title'>Random Recipe App</h1>
      <Link to={isLogged ? '/generator' : '/logIn'}><Button className={"btn__start"} name={"Get started"}/></Link>
    </div>
    
  )
}

export default Home;