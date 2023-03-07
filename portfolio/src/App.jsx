import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ErrorBounders from '../utils/ErrorBoundery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ErrorBounders>
        
    </ErrorBounders>
    </div>
  )
}

export default App
