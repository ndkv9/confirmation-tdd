const Confirmation = ({ children, handleConfirm, handelCancel }) => {
  return (
    <div role='dialog'>
      <h1>Confirmation</h1>
      {children}
      <button onClick={() => handleConfirm()}>OK</button>
      <button onClick={() => handelCancel()}>Cancel</button>
    </div>
  )
}

export default Confirmation
