import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../components/Input';

describe('<Input />', () => {
  test('should render the input', () => {
    render(<Input type='text' />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  })

  test('should render the value of the text input', () => {
    const onChangeMock = jest.fn()
    render(<Input type='text' value='test' onChange={onChangeMock} />);
    const text = screen.getByDisplayValue('test')
    expect(text).toBeInTheDocument()
    fireEvent.change(text, { target: { value: 'change' } })
    fireEvent.change(text, { target: { value: 'another change' } })
    expect(onChangeMock).toHaveBeenCalledTimes(2)
  })
  test('should get input class', () => {
    const onChangeMock = jest.fn()
    render(<Input type='text' value='test' onChange={onChangeMock}/>);
    const text = screen.getByDisplayValue('test')
    expect(text).toHaveClass('input')
  })
  test('should not get input class', () => {
    const onChangeMock = jest.fn()
    render(<Input type='radio' value='test' onChange={onChangeMock}/>);
    const text = screen.getByRole('radio')
    expect(text).not.toHaveClass('input')
  })
});
