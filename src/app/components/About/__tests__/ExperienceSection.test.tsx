import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceSection from '../ExperienceSection';
import { experienceData } from '../../../data/About/experience';

jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: new Proxy(
      {},
      {
        get:
          (_, key) =>
          ({
            children,
            initial,
            animate,
            transition,
            whileHover,
            ...props
          }: any) => <div {...props}>{children}</div>,
      }
    ),
  };
});

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
});

describe('ExperienceSection Component', () => {
  it('renders the main heading', () => {
    render(<ExperienceSection />);
    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
  });

  it('renders all experience roles and companies', () => {
    render(<ExperienceSection />);

    experienceData.forEach((exp) => {
      expect(screen.getByText(exp.role)).toBeInTheDocument();
      expect(screen.getByText(exp.company)).toBeInTheDocument();
      expect(screen.getAllByText(exp.location)[0]).toBeInTheDocument();
      expect(screen.getAllByText(exp.duration)[0]).toBeInTheDocument();
      exp.details.forEach((detail) => {
        expect(screen.getByText(detail)).toBeInTheDocument();
      });
    });
  });

  it('renders technologies used', () => {
    render(<ExperienceSection />);

    experienceData.forEach((exp) => {
      expect(
        screen.getByText(exp.technologies, { exact: false })
      ).toBeInTheDocument();
    });
  });

  it('renders View Certificate links correctly', () => {
    render(<ExperienceSection />);

    experienceData.forEach((exp) => {
      const link = screen.getByText(/View Certificate/i, {
        selector: `a[href="${exp.certificate}"]`,
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', exp.certificate);
    });
  });
});
