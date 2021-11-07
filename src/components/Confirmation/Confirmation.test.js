import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Confirmation from './Confirmation'

describe('Confirmation component', () => {
  beforeEach(() => {
    const question = 'Do you confirm?'
    render(<Confirmation>{question}</Confirmation>)
  })

  it('should render', () => {
    const dialogElement = screen.getByRole('dialog')
    expect(dialogElement).toBeInTheDocument()
  })

  it('should have title with proper content', () => {
    const titleElement = screen.getByText('Confirmation')
    expect(titleElement).toBeInTheDocument()
  })

  it('should have a dynamic confirmation question', () => {
    const questionElement = screen.getByText('Do you confirm?')
    expect(questionElement).toBeInTheDocument()
  })
})
