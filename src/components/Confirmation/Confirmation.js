const Confirmation = ({ children }) => {
  return (
    <div role='dialog'>
      <h1>Confirmation</h1>
      {children}
      <button>OK</button>
    </div>
  )
}

export default Confirmation
