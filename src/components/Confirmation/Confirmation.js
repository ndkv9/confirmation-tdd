const Confirmation = ({ children, handleConfirm }) => {
  return (
    <div role='dialog'>
      <h1>Confirmation</h1>
      {children}
      <button onClick={() => handleConfirm()}>OK</button>
      <button>Cancel</button>
    </div>
  )
}

export default Confirmation
