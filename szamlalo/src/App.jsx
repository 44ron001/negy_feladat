import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
	  <title>{count}</title>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Kattints rám
        </button>
      </div>
    </>
  )
}
export default App
