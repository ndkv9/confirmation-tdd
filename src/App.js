import Confirmation from './components/Confirmation/Confirmation'

function App() {
  const handleConfirm = () => {
    console.log('confirmed!')
  }

  const handleCancel = () => {
    console.log('canceled!')
  }

  return (
    <div>
      <h1>hello world</h1>
      <Confirmation handleConfirm={handleConfirm} handleCancel={handleCancel}>
        {<p>Ahihi?</p>}
      </Confirmation>
    </div>
  )
}

export default App
