import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

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

it('should custom start at another value', () => {
  render(<Counter label={'Current'} start={10} />)
  screen.getByText(10)
})

it('should increment the count by one', () => {
  render(<Counter />)
  const incrementor = screen.getByTestId(/counter/i)
  user.click(incrementor)
  screen.getByText(/1/i)
})

it('should shift-click increment the count by ten', () => {
  render(<Counter />)
  screen.getByText(0)
  const incrementor = screen.getByTestId(/counter/i)
  user.click(incrementor, {shiftKey: true})
  screen.getByText(10)
})