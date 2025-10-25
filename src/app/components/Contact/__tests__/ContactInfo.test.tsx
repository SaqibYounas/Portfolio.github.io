import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactInfo from '../ContactInfo';
import { contactInfo, socialLinks } from '../../../data/other/contractlinks';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    },
  };
});

describe('ContactInfo Component', () => {
  it('renders contact info correctly', () => {
    render(<ContactInfo />);
    expect(screen.getByText(contactInfo.phone)).toBeInTheDocument();
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument();
    expect(screen.getByText(contactInfo.location)).toBeInTheDocument();
  });

  it('renders all social links', () => {
    render(<ContactInfo />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(socialLinks.length);

    socialLinks.forEach((link) => {
      expect(
        links.some((anchor) => anchor.getAttribute('href') === link.href)
      ).toBe(true);
    });
  });

  it('renders Follow Me heading', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/Follow Me/i)).toBeInTheDocument();
  });

  it('renders Contact Info heading', () => {
    render(<ContactInfo />);
    expect(screen.getByText(/Contact Info/i)).toBeInTheDocument();
  });
});
