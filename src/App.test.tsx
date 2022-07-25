import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

it('renders the heading', () => {
  render(<Heading />);
  screen.getByText(/hello react/i)
});

it('renders the paragraph', () => {
  render(<App />);
  screen.getByText(/nice tdd/i)
})

// it('generates a label', () => {
//   /* In this test we don’t need a component with TSX and a fake DOM etc. 
//   Its a TypeScript method that returns a string. To conform to the React.Component 
//   constructor signature, we pass in an empty object as props. */
//   const a = new App({})
//   expect(a.label('React')).toBe("Hello React")
// })