import { useState } from 'react'
import './App.css'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CanvaEmbed from '../components/CanvaEmbed'
import QuestionFlashCard from '../components/QuestionFlashCard'
import FlashCardManager from '../components/FlashCardManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Header/>
      <CanvaEmbed/>
      <FlashCardManager/>
    </>
  )
}

export default App
