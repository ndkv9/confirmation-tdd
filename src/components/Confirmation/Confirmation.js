const Confirmation = ({ children }) => {
  return (
    <div role='dialog'>
      <h1>Confirmation</h1>
      {children}
      <button>OK</button>
      <button>Cancel</button>
    </div>
  )
}

export default Confirmation
