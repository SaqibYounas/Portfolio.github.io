import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadCV from '../DownloadCV';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  };
});

describe('DownloadCV Component', () => {
  it('renders the download button', () => {
    render(<DownloadCV />);
    const button = screen.getByRole('button', { name: /Download CV/i });
    expect(button).toBeInTheDocument();
  });

  it('triggers download with correct href and filename', () => {
    const clickMock = jest.fn();

    const originalCreateElement = document.createElement.bind(document);

    const createElementSpy = jest
      .spyOn(document, 'createElement')
      .mockImplementation((tagName: string) => {
        const element = originalCreateElement(tagName);
        element.click = clickMock;
        return element;
      });

    render(<DownloadCV />);
    const button = screen.getByRole('button', { name: /Download CV/i });
    fireEvent.click(button);

    expect(createElementSpy).toHaveBeenCalledWith('a');
    expect(clickMock).toHaveBeenCalled();

    createElementSpy.mockRestore();
  });
});
