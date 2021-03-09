// Package imports
import { ApolloProvider } from '@apollo/client';
import { render } from '@testing-library/react';
// Component
import Blog from '../components/Blog';
import client from '../apollo';

it('renders the Blog component', () => {
  render(
    <ApolloProvider client={client}>
      <Blog />
    </ApolloProvider>);
});
