import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Poster from './components/Poster.jsx'
import Poster_hover from './components/Poster_hover.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Poster>
        
      </Poster>
      <Poster_hover>

      </Poster_hover>
    </>
  )
}

export default App
