import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Confirmation from './Confirmation'

describe('Confirmation component', () => {
  beforeEach(() => {
    render(<Confirmation />)
  })

  it('should render', () => {
    const dialogElement = screen.getByRole('dialog')
    expect(dialogElement).toBeInTheDocument()
  })
})
