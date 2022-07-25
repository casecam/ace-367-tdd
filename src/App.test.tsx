import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

it('renders the heading', () => {
  render(<App />);
  screen.getByRole('heading', {name: /hello react/i})
});

it('renders the paragraph', () => {
  render(<App />);
  screen.getByText(/nice tdd/i)
})

it('generates a label', () => {
  const a = new App({})
  expect(a.label()).toBe("Hello React")
})