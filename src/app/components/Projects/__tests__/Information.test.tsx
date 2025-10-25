import { render, screen } from '@testing-library/react';
import { InformationDisplayClient } from '../Information-page/Information';
import { InfoDisplayProps } from '../../../types/Projects/information';
const mockData: InfoDisplayProps = {
  title: 'Test Project',
  name: 'CodeDynamo',
  image: '/Projects/Information-Page/Information-1.PNG',
  carouselImages: [
    '/Projects/Information-Page/Information-1.PNG',
    '/Projects/Information-Page/Information-2.PNG',
  ],
  description: 'This is a test description for the project.',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  techStack: ['React', 'Next.js', 'TypeScript'],
  liveDemo: 'https://saqibyounas.github.io/mrbigbullofficial.github.io',
};

describe('InformationDisplayClient Component', () => {
  beforeEach(() => {
    render(<InformationDisplayClient data={mockData} />);
  });

  it('renders the main title', () => {
    expect(screen.getByText(mockData.title)).toBeInTheDocument();
  });

  it('renders the description', () => {
    expect(screen.getByText(mockData.description)).toBeInTheDocument();
  });

  it('renders all features', () => {
    mockData.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders all tech stack items', () => {
    mockData.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders the live demo link correctly', () => {
    const link = screen.getByText(mockData.liveDemo);
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', mockData.liveDemo);
  });

  it('renders the back to projects link correctly', () => {
    const backLink = screen.getByText(/back to projects/i);
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest('a')).toHaveAttribute('href', '/projects');
  });
});
