import React, { useState, useRef } from 'react'
import ConfirmationModal from './ConfirmationModal'
import './App.css';

function App() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  return (
    <div className='App'>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusConfirmBtn()}>
        Focus Confirm
      </button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>
        Focus Deny
      </button>
      <button onClick={() => modalRef.current.focusCloseBtn()}>
        Focus Close
      </button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

export default App
