import { useRef } from 'react'
import Modal from './Modal'

export const App1 = () => {
  const modalRef = useRef()

  const handleOpenModal = () => {
    modalRef.current.openModal()
  }

  console.log('parent rendered')

  return (
    <main className="App">
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </main>
  )
}