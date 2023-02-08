import React, { forwardRef, useImperativeHandle, useRef } from "react";
import './index.css'

function ConfirmationModal({ isOpen, onClose }, ref) {

  const confirmBtn = useRef()
  const denyBtn = useRef()
  const closeBtn = useRef()

  useImperativeHandle(ref, () => {
    return {
      focusConfirmBtn: () => confirmBtn.current.focus(),
      focusDenyBtn: () => denyBtn.current.focus(),
      focusCloseBtn: () => closeBtn.current.focus()
    }
  }
  );

  if (!isOpen) return null

  return (
    <div className="modal-wds">
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you Confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmBtn}>
          Yes
        </button>
        <button className="deny-btn" ref={denyBtn}>
          No
        </button>
        <button className="close-btn" ref={closeBtn} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  )
}

export default forwardRef(ConfirmationModal);
