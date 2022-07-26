import { render, screen } from '@testing-library/react';


it('should render a counter', () => {
  render(<Counter />)
  screen.getByLabelText(/count/i)
})