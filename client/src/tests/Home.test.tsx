// Package imports
import { render, screen } from '@testing-library/react';
// Component
import Home from '../components/Home';

describe('Home component', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders the Home component', () => {
    expect.anything();
  });
  it('displays name with subtext', () => {
    const name = screen.getByRole('heading', {
      name: /kathleen kidder/i,
    });
    const subtext = screen.getByRole('heading', {
      name: /writer, artist, cat and lizard fanatic/i,
    });

    expect(name).toBeVisible();
    expect(subtext).toBeVisible();
  });
});
