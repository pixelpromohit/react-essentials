import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    console.log("clicked", counter)
    //counter = counter + 1
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log("clicked", Math.random())
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>counter in react</h1>
      <h2>Couter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick = {removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
