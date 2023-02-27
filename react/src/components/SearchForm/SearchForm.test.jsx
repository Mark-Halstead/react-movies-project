import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { BrowserRouter } from 'react-router-dom'

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);


import SearchForm from './index';


describe('SearchForm', () => {
    beforeEach(() => {
  
      render(
        <BrowserRouter>
          <SearchForm />
        </BrowserRouter>
      );
    });
  
    afterEach(() => {

      cleanup();
    });
  
    it('should update the input value when typed in', () => {

      const input = screen.getByRole('textbox');
  

      userEvent.type(input, 'Jurassic Park');
  

      expect(input).toHaveValue('Jurassic Park');
    });
  });
  

