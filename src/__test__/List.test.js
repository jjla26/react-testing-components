import { render, screen } from '@testing-library/react';
import List from '../components/List';

describe('<List />', () => {
  test('should render children', () => {
    render(<List>I am the child</List>);
    const text = screen.getByText(/I am the child/i);
    expect(text).toBeInTheDocument();
  })

  test('should not render any element', () => {
    render(<List></List>);
    const text = screen.queryByText(/I am the child/i);
    expect(text).not.toBeInTheDocument();
  })

});
