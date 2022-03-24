import React, {useState} from 'react';
import './App.css';
import Button from './components/button';


function App() {
  const [isStarted, setisStarted] = useState(false);
  
  const updateData = () => {
    setisStarted(!isStarted)
  }

  function clickToStart() {
    return(
      <div className='container'>
      <input className='login__input' type="text" placeholder='example@mail.com '/>
      <Button name={"log-in with Email"}/>
      <Button name={"Continue offline"}/>
      </div>
      
    )
  }

  return (
    <div className="App">
      {isStarted ? clickToStart() : <Button updateData={updateData} name={"Get started"}/>}
          
    </div>
  );
}

export default App;
