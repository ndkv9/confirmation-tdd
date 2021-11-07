import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Confirmation component', () => {
  beforeEach(() => {
    render(<Confirmation />)
  })

  it('should render', () => {
    const dialogElement = screen.getAllByRole('dialog')
    expect(dialogElement).toBeInTheDocument()
  })
})
