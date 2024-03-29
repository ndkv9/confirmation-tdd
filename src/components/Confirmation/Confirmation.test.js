import { render, screen, fireEvent } from '@testing-library/react'
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

  it('should have an OK button', () => {
    const confirmBtn = screen.getByRole('button', { name: 'OK' })
    expect(confirmBtn).toBeInTheDocument()
  })

  it('should have an cancel button', () => {
    const cancelBtn = screen.getByRole('button', { name: 'Cancel' })
    expect(cancelBtn).toBeInTheDocument()
  })
})

describe('with handlers', () => {
  it('calls and handler for OK btn when it is clicked', () => {
    const handleConfirm = jest.fn()
    render(
      <Confirmation handleConfirm={handleConfirm}>
        {'are you sure?'}
      </Confirmation>,
    )
    const confirmBtn = screen.getByRole('button', { name: 'OK' })
    fireEvent.click(confirmBtn)
    expect(handleConfirm).toBeCalled()
  })

  it('calls and handler for cancel btn when it is clicked', () => {
    const handleCancel = jest.fn()
    render(
      <Confirmation handleCancel={handleCancel}>
        {'are you sure?'}
      </Confirmation>,
    )
    const cancelBtn = screen.getByRole('button', { name: 'Cancel' })
    fireEvent.click(cancelBtn)
    expect(handleCancel).toBeCalled()
  })
})
