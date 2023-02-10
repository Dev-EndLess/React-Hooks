import React, { useState, useTransition } from 'react'
import './App.css';

function App() {
  const [isPending, startTransition] = useTransition()
  const [input, setInput] = useState('')
  const [list, setList] = useState([])

  const LIST_SIZE = 20123

  function handleChange(event) {
    setInput(event.target.value)
    startTransition(() => {
      const l = []
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(event.target.value)
      }
      setList(l)
    })
  }

  const elementsList = list.map((item, index) => { 
    return <div key={index}>{item}</div>})

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <br/>
      {
        isPending
          ? "Loaing..."
          : elementsList
      }
    </div>
  );
}

export default App;
