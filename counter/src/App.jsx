import { useState } from 'react'
import Timer from './Timer.jsx';
import './App.css'


function App() {
 let [counter,setCounter]=useState(15);
  const addValue = () =>{
    if(counter<30){
    counter = counter + 1;
    setCounter(counter);
    }
  }
  const removeValue = () =>{
    if(counter>0){
    counter  = counter - 1;
    setCounter(counter);
    }
  }
  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <Timer/>
      
    </>
  )
}

export default App
