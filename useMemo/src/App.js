import React, { useState, useMemo, useEffect } from 'react'
import './App.css';

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState()

  const doubleNumber = useMemo(() => {
    return emulateSlowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevState => !prevState)}>
        Change Theme
      </button>
      <div style={themeStyles}>
        {doubleNumber}
      </div>
    </div>
  );
}

export default App;

function emulateSlowFunction(num) {
  for (let i = 0; i <= 1234567891; i++) {
    // empty object
  }
  return num * 2
}
