import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CanvaEmbed from '../components/CanvaEmbed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Header/>
      <CanvaEmbed/>
    </>
  )
}

export default App
