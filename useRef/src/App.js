import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <div className='App'>
      <input 
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)} 
        />
      <h3>My name is {name} and it used to be {prevName.current}</h3>
    </div>
  );
}

export default App;

