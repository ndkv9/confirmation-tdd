const Confirmation = ({ children, handleConfirm, handleCancel }) => {
  return (
    <div role='dialog'>
      <h1>Confirmation</h1>
      {children}
      <button onClick={handleConfirm}>OK</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}

export default Confirmation
