import { render, screen } from '@testing-library/react'
import ListItem from '../components/ListItem'

describe('<ListItem />', () =>{
  test('should render the lisItem', () => {
    const { rerender } = render(<ListItem selected={true}>Hello</ListItem>)
    const text = screen.getByText('Hello')
    expect(text).toBeInTheDocument()
    expect(text).toHaveClass('selected')
    rerender(<ListItem>Hello</ListItem>)
    expect(text).not.toHaveClass('selected')
  })
  test('should check that it has the class pointer', () => {
    const { rerender } = render(<ListItem pointer={true}>Hello</ListItem>)
    const text = screen.getByText('Hello')
    expect(text).toBeInTheDocument()
    expect(text).toHaveClass('pointer')
    rerender(<ListItem>Hello</ListItem>)
    expect(text).not.toHaveClass('pointer')
  })
})