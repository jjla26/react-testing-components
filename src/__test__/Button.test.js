import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/Button'

describe('<Button />', () =>{
  test('should render the button', () => {
    const onClickMock = jest.fn()
    render(<Button name='First button' onClick={onClickMock}/>)
    const button = screen.getByRole('button', {name: 'First button'})
    fireEvent.click(button)
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
    expect(onClickMock).toHaveBeenCalledTimes(2)
  })
})