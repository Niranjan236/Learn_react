import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Cards'

function App() {


  return (
    <>
      <h1 className="bg-green-400 rounded-2xl">Tailwind twst</h1>
      <Cards username="Mohan" btntxt="Know me"/>
      <Cards username="Niranjan" />
    </>
  )
}

export default App
