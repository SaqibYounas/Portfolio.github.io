import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutHero from '../AboutContent';
import { aboutHeroData } from '../../../data/About/aboutSection';

jest.mock('next/image', () => {
  return function MockImage(props: any) {
    return <img {...props} alt={props.alt || 'mock-image'} />;
  };
});

jest.mock('framer-motion', () => ({
  motion: {
    div: (props: any) => <div {...props} />,
  },
}));

jest.mock('../../CV/DownloadCV', () => {
  const MockDownloadCV = () => <button>Download CV</button>;
  return MockDownloadCV;
});

describe('AboutHero Component', () => {
  it('renders user name correctly', () => {
    render(<AboutHero />);
    expect(screen.getByText(aboutHeroData.name)).toBeInTheDocument();
  });

  it('renders email and LinkedIn link', () => {
    render(<AboutHero />);
    expect(screen.getByText(aboutHeroData.email)).toBeInTheDocument();
    expect(screen.getByText(/linkedin\.com/i)).toBeInTheDocument();
  });

  it('renders the Download CV button', () => {
    render(<AboutHero />);
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });
});
