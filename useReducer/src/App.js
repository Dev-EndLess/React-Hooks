import { useReducer } from 'react'
import { reducer } from './reducer'
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })

  return (
    <main className='App' style={{ color: state.color ? '#FFF' : '#FFF952'}}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) => dispatch({ type: 'USER_INPUT', payload: e.target.value })}
      />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={(() => dispatch({ type: 'DECREMENT' }))}>-</button>
        <button onClick={(() => dispatch({ type: 'INCREMENT' }))}>+</button>
        <button onClick={(() => dispatch({ type: 'TOGGLE_COLOR' }))}>Toggle Color</button>
      </section>
      <br />
      <p>{state.userInput}</p>
    </main>
  );
}

export default App;
