import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';
test('renders the heading', () => {
  render(<App />);
  screen.getByRole('heading', {name: /hello react/})
});
