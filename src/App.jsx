import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://kinergy.io" target="_blank">
          <img src="/kinergy-logo.png" className="logo" alt="Kinergy logo" />
        </a>
      </div>
      <h1>Kinergy</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Kinergy logo to learn more
      </p>
    </>
  )
}

export default App
