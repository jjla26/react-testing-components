import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

describe('<Card />', () => {
  test('should render children', () => {
    render(<Card><div>I am the child</div></Card>);
    const text = screen.getByText(/I am the child/i);
    expect(text).toBeInTheDocument();
  })

  test('should not render any element', () => {
    render(<Card></Card>);
    const text = screen.queryByText(/I am the child/i);
    expect(text).not.toBeInTheDocument();
  })
});
