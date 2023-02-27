import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import Movies from './index';

describe('Movies', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      );
    });
  
    it('should render the page header', async () => {

      await waitFor(() => expect(screen.getByText('Shows Page')).toBeInTheDocument());
    });
})
