import React from 'react';
import renderWithTheme from '../../../_helpers/testing/renderWithTheme.web';
import { SkipNavContent, SkipNavLink } from '../SkipNav';

beforeAll(() => jest.spyOn(console, 'error').mockImplementation());
afterAll(() => jest.restoreAllMocks());

describe('<SkipNav />', () => {
  it('<SkipNavLink /> should throw error on native', () => {
    expect(() => renderWithTheme(<SkipNavLink />)).toThrow(
      '[Blade: SkipNav]: SkipNavLink is not available on React Native',
    );
  });

  it('<SkipNavContent /> should throw error on native', () => {
    expect(() => renderWithTheme(<SkipNavContent />)).toThrow(
      '[Blade: SkipNav]: SkipNavContent is not available on React Native',
    );
  });
});