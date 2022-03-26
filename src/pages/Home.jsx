import React from 'react'
import Button from '../components/button';
import {Link} from 'react-router-dom';

import './Home.scss'




function Home() {

  return (
    <div className='container'>
      <Link to='/LogIn'><Button name={"Get started"}/></Link>
    </div>
    
  )
}

export default Home;