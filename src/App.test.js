import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {HomePage} from './pages'

describe('initial page', () => {
  describe('expect render successfully in homepage', () => {
    test('home page cointains "Get album recommendations by category"', () => {
      const { getByText } = render(<App />);
      const titleElement = getByText('Get album recommendations by category');
      expect(titleElement).toBeInTheDocument();
    });
  });
});

describe('testing event', () => {
  test('redirect button to category page sucessfully rendered', () => {
    const { getByText } = render(<App/>);
    expect(document.querySelector('a').getAttribute('href')).toBe('/');
  });
});
