
import { useState } from 'react';
import './App.css';


function App() {
 
  const [result, setresult] = useState("")
  const clickHandler=(event)=>{
    setresult(result.concat(event.target.value))
  }

  const clearDisplay=()=>{
    setresult("")
  }

  const calculate=()=>{
    setresult(eval(result).toString())
  }


  return (
    <div className='calculator-grid'>
      <div className='output span-4' >
       <div className='previous-oprand'></div>
       <div className='current-oprand'>{result}</div>
       
      </div>
      <button className='span-three' onClick={clearDisplay}>AC</button>
      
      <button value="/" onClick={clickHandler}>/</button>   
      <button value="1" onClick={clickHandler}>1</button> 
      <button value="2" onClick={clickHandler}>2</button> 
      <button value="3" onClick={clickHandler}>3</button> 
      <button value="*" onClick={clickHandler}>*</button> 
      <button value="4" onClick={clickHandler}>4</button> 
      <button value="5"onClick={clickHandler}> 5</button> 
      <button value="6" onClick={clickHandler}>6</button> 
      <button value="+" onClick={clickHandler}>+</button> 
      <button value="7" onClick={clickHandler}>7</button> 
      <button value="8" onClick={clickHandler}>8</button>
      <button value="9" onClick={clickHandler}>9</button> 
      <button value="-" onClick={clickHandler}>-</button> 
      <button value="." onClick={clickHandler}>.</button>
      <button value="0" onClick={clickHandler}>0</button> 
      <button className='span-two' onClick={calculate}>=</button>   
    </div>
    

  )
   
  
}

export default App;
