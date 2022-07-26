import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Counter from './Counter'

const handler = jest.fn()
afterEach(() => handler.mockReset())

it('should render a counter', () => {
  render(<Counter count={0} onCounterIncrease={handler} />)
  screen.getByText(/count/i)
})

it('should render a counter with a custom label', () => {
  render(<Counter label={'Current'} count={0} onCounterIncrease={handler} />)
  screen.getByText(/current/i)
})

it('should default start a zero', () => {
  render(<Counter label={"Current"} count={0} onCounterIncrease={handler} />)
  screen.getByText(/0/i)
})

it('should be called with shiftKey false', () => {
  render(<Counter count={0} onCounterIncrease={handler}  />)
  const incrementor = screen.getByTestId(/counter/i)
  user.click(incrementor, {shiftKey: false})
  expect(handler).toBeCalledWith(false)
})
