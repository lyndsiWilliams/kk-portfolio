// Package imports
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// Component
import NavBar from '../components/NavBar';

it('renders the NavBar component', () => {
  render(
    <Router>
      <NavBar />
    </Router>);
});
