import { render, screen } from '@testing-library/react';

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

// it('generates a label', () => {
//   /* In this test we don’t need a component with TSX and a fake DOM etc. 
//   Its a TypeScript method that returns a string. To conform to the React.Component 
//   constructor signature, we pass in an empty object as props. */
//   const a = new App({})
//   expect(a.label('React')).toBe("Hello React")
// })