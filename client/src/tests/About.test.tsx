// Package imports
import { render, screen } from '@testing-library/react';
// Component
import About from '../components/About';

describe('About component', () => {
  it('renders the About component', () => {
    render(<About />);
  });
  it('displays placeholder text', () => {
    render(<About />);
    
    const placeholderText = screen.getByRole('heading', {
      name: /this is the about page!/i,
    });
    expect(placeholderText).toBeVisible();
  });
});
