import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import ShowItem from './index';


describe('ShowItem', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <ShowItem />
        </BrowserRouter>
      )
    })
  
    afterEach(cleanup)
  
    it('should render without errors', () => {
      expect(screen.getByRole('heading')).toBeInTheDocument()
    })
  })
  

  