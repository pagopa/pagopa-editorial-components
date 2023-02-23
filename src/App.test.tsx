import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/This project is designed to be used with storybook: run yarn storybook instead/i);
  expect(linkElement).toBeInTheDocument();
});
