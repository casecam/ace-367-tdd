import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';


import App from './App';

it('renders the paragraph', () => {
  render(<App />);
  screen.getByText(/nice tdd/i)
})

it('renders the app and the heading', () => {
  render(<App />)
  screen.getByRole('heading', { name: /hello react/i})
  screen.getByText(/current/i)
  screen.getByText(/0/i)
})

it('updates state when increment is called without shift', () => {
  render(<App />)
  screen.getByText(/0/i)
  user.click(screen.getByTestId('counter'), {shiftKey: false})
  screen.getByText(/1/i)
})

it('updates state when increment is called with shift', () => {
  render(<App />)
  screen.getByText(/0/i)
  user.click(screen.getByTestId('counter'), {shiftKey: true})
  screen.getByText(/10/i)
})