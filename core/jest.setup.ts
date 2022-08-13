import React from 'react';
import '@testing-library/jest-dom';
import jestIconsNames from './src/utils/test/jestIconsNames';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const BaseComponent = (props) => React.createElement('div', { ...props });

const Icons = {};
jestIconsNames.forEach((icon) => (Icons[icon] = BaseComponent));

jest.mock('cyberbank-icons', () => {
  return {
    default: jest.fn(() => 'mocked baz'),
    ...Icons,
  };
});
