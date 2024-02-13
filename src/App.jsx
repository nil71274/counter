import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = ()=>{
    setCount(count+1);
    console.log("Incremented",count+1);
  }

  const decrement = ()=>{
    setCount(count-1);
    console.log("Decremented",count-1);
  }

  const reset = ()=>{
    setCount(0);
    console.log("Cleared",count);
  }

  return (
    <>
    <h3>Counter</h3>
    <h1>{count}</h1>
    <button onClick={increment}>Add 1</button>
    <button onClick={decrement}>Subtract 1</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default App
