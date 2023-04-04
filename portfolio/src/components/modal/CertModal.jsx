import React from 'react'
import './certModal.css'

const CertModal = (props) => {
    const { show, closeModal } = props;

  return (
    <div className={show ? "modal" : "hide"}>
        <p>This is modal</p>
      <button type="button" onClick={handler}>Close Modal</button>
    </div>
  )
}

export default CertModal
