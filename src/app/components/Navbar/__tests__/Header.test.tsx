import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
});

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

jest.mock('react-icons/ai', () => ({
  AiFillHome: (props: any) => <span {...props}>HomeIcon</span>,
  AiFillInfoCircle: (props: any) => <span {...props}>InfoIcon</span>,
  AiFillProject: (props: any) => <span {...props}>ProjectIcon</span>,
  AiFillStar: (props: any) => <span {...props}>StarIcon</span>,
  AiFillMail: (props: any) => <span {...props}>MailIcon</span>,
  AiOutlineMenu: (props: any) => <span {...props}>MenuIcon</span>,
  AiOutlineClose: (props: any) => <span {...props}>CloseIcon</span>,
}));

import { usePathname } from 'next/navigation';

describe('Header Component', () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  it('renders the logo', () => {
    render(<Header />);
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });

    const mobileMenu = screen.getByTestId('mobile-menu');

    expect(mobileMenu).toHaveClass('translate-x-full');

    fireEvent.click(toggleButton);
    expect(mobileMenu).toHaveClass('translate-x-0');

    fireEvent.click(toggleButton);
    expect(mobileMenu).toHaveClass('translate-x-full');
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(toggleButton);
  });
});
