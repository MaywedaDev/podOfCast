import { useState } from 'react'
import Home from './pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen'>
      <Home />
    </div>
  )
}

export default App
