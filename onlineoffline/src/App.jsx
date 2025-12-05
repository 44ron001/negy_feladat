import { useState } from 'react'
import './App.css'

function App() {
  let online = navigator.onLine;

  return (
    <>
      <p className="cimke">
        A böngésző online? {online.toString()}
      </p>
    </>
  )
}

export default App