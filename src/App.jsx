import { useState } from 'react'
import './App.css'
import PrincipalScrollContainer from '../components/PrincipalScrollContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PrincipalScrollContainer/>
    </>
  )
}

export default App
