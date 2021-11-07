import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('App component', () => {
  test('renders header title', () => {
    render(<App />)
    const headerElement = screen.getByText(/hello world/i)
    expect(headerElement).toBeInTheDocument()
  })
})
