import { render, screen } from '@testing-library/react';
import Counter from './Counter'

it('should render a counter', () => {
  render(<Counter />)
  screen.getByText(/count/i)
})