// Package imports
import { render, screen } from '@testing-library/react';
// Component
import Gallery from '../components/Gallery';

describe('Gallery component', () => {
  it('renders the Gallery component', () => {
    render(<Gallery />);
  });
  it('displays placeholder text', () => {
    render(<Gallery />);
    
    const placeholderText = screen.getByRole('heading', {
      name: /this is the gallery page!/i,
    });
    expect(placeholderText).toBeVisible();
  });
});
