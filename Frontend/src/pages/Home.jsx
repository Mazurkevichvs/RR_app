import React from 'react'
import Button from '../components/button';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice';
import './Home.scss'

function Home() {

  const count = useSelector((state) => state.counter.value)
  
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <Link to='/LogIn'><Button className={"btn__start"} name={"Get started"}/></Link>
      <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
    
  )
}

export default Home;