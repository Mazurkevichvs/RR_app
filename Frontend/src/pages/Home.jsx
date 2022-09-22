import React from 'react'
import Button from '../components/button';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
      <Link to='/LogIn'><Button className={"btn__start"} name={"Get started"}/></Link>
    </div>
    
  )
}

export default Home;