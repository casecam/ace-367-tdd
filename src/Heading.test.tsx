import { render, screen } from '@testing-library/react';
import Heading from './Heading';

it('renders the heading', () => {
  render(<Heading recipient={'World'}/>);
  screen.getByRole('heading', { name: /hello react/i})
})
