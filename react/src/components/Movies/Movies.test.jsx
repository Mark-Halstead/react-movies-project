import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import Movies from './index';

describe("boop", async () => {


test('renders a list of shows', async () => {
  const mockShows = [
    {
      id: 1,
      name: 'Show 1',
      image: { medium: 'image1.jpg' },
      summary: 'This is the summary of show 1.',
    },
    {
      id: 2,
      name: 'Show 2',
      image: { medium: 'image2.jpg' },
      summary: 'This is the summary of show 2.',
    },
  ];

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: async () => mockShows,
  });

  render(<Movies />);

  await waitFor(() => {
    expect(screen.getByText('Show 1')).toBeInTheDocument();
    expect(screen.getByText('Show 2')).toBeInTheDocument();
    expect(screen.getByText('This is the summary of show 1.')).toBeInTheDocument();
    expect(screen.getByText('This is the summary of show 2.')).toBeInTheDocument();
  });
});
})
