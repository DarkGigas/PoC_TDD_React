import React from "react"
import "./App.css"

function App() {
  return (
    <div className="App" data-test="app-component">
      <h1 data-test="counter-display">
        The counter is currently
      </h1>
      <button data-test="increment-button">Increments Counter</button>
    </div>
  )
}

export default App
