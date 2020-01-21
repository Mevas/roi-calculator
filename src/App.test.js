import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

// test('renders page', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText('Content');
//   expect(linkElement).toBeInTheDocument();
// });
//
// test('renders footer', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText('Footer');
//   expect(linkElement).toBeInTheDocument();
// });

test('renders footer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('418.85');
  expect(linkElement).toBeInTheDocument();
});
