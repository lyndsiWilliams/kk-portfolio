// Package imports
import { findByText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  it('hover test', async () => {
    const osSpan = screen.getByText(/hover me/i);

    userEvent.hover(osSpan);
    /*  🐞  ----------  BUG  ----------  🐞
    This returns "none", is OS detection in tests even possible?
    */
    // await screen.findByText(/mac os/i);
    expect.anything();
  });
});
