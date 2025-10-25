import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../HomePage';
import { socialLinks } from '../../../data/other/contractlinks';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  },
}));

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
});

describe('HeroSection Component', () => {
  it('renders the main heading', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Hi! I'm/i)).toBeInTheDocument();
    expect(screen.getByText(/Muhammad Saqib Younas/i)).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();
    expect(
      screen.getByText(/React\.js, Next\.js, Node\.js/i)
    ).toBeInTheDocument();
  });

  it('renders the "More About Me" link', () => {
    render(<HeroSection />);
    const link = screen.getByRole('link', { name: /More About Me/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
  });

  it('renders all social links', () => {
    render(<HeroSection />);

    socialLinks.forEach((link) => {
      const socialLink = screen.getByLabelText(link.name);
      expect(socialLink).toBeInTheDocument();
      expect(socialLink).toHaveAttribute('href', link.href);
      expect(socialLink).toHaveAttribute('target', '_blank');
    });
  });
});
