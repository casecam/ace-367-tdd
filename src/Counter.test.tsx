import { render, screen } from '@testing-library/react';
import Counter from './Counter'

it('should render a counter', () => {
  render(<Counter />)
  screen.getByText(/count/i)
})

it('should render a counter with a custom label', () => {
  render(<Counter label={'Current'} />)
  screen.getByText(/current/i)
})

it('should default start a zero', () => {
  render(<Counter label={"Current"} />)
  screen.getByText(/0/i)
})