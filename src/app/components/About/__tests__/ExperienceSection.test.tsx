import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExperienceSection from '../ExperienceSection';
import { experienceData } from '../../../data/About/experience';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  },
}));

jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
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
