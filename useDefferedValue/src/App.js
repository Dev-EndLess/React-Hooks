import React, { useState } from 'react'
import List from './List';

function App() {
  const [input, setInput] = useState('')

  function handleChange(event) {
    setInput(event.target.value)
  }

  return (
    <div className='App'>
      <input type="text" value={input} onChange={handleChange} />
      <List input={input}/>
    </div>
  );
}

export default App;
