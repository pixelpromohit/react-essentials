import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App(props) {  
  const myObj = {
    username: "hitesh",
    age: 21,
  }

  let newArr = [1, 2, 3]

  return (
    <>  
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card channel="chaiaurcode"/>
      <Card />
    </>
  )
}

export default App
