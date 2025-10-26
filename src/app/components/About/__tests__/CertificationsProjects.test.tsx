import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CertificationsProjects from '../CertificationsProjects';
import { certificationsData } from '../../../data/About/certificateProjects';

jest.mock('framer-motion', () => {
  const FakeDiv = ({ children }: any) => <div>{children}</div>;
  const FakeH2 = ({ children }: any) => <h2>{children}</h2>;
  return { motion: { div: FakeDiv, h2: FakeH2 } };
});

jest.mock('next/link', () => ({ children, href }: any) => (
  <a href={href}>{children}</a>
));

describe('CertificationsProjects Component', () => {
  beforeEach(() => render(<CertificationsProjects />));

  it('renders heading correctly', () => {
    expect(screen.getByText(/Certifications & Projects/i)).toBeInTheDocument();
  });

  it('renders all certifications', () => {
    certificationsData.certificates.forEach((cert, i) => {
      const certItem = screen.getByTestId(`cert-${i}`);
      expect(certItem).toHaveTextContent(cert.title);
      expect(certItem).toHaveTextContent(cert.date);
    });
  });
  it('renders all projects', () => {
    certificationsData.projects.forEach((project) => {
      const projectItem = screen
        .getAllByRole('listitem')
        .find(
          (li) =>
            li.textContent?.includes(project.name) &&
            li.textContent?.includes(project.description)
        );

      expect(projectItem).toBeInTheDocument();
    });
  });
});
