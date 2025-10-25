import { render, screen } from '@testing-library/react';
import PortfolioDisplayClient from '../Portfolio/Portfolio';

const mockData = {
  title: 'Test Portfolio',
  carouselImages: ['/images/image1.jpg', '/images/image2.jpg'],
  introduction: 'This is the introduction section.',
  problemStatement: 'This is the problem statement.',
  objectives: ['Objective 1', 'Objective 2'],
  features: ['Feature 1', 'Feature 2'],
  techStack: ['React', 'Next.js', 'TypeScript'],
  versionControl: {
    currentVersion: 'v1.0.0',
    futureUpdates: ['Update 1', 'Update 2'],
  },
  commingsoon: {
    title: 'CodeDynamo Project',
    carouselImages: ['/images/codedynamo1.jpg'],
    introduction: 'Codedynamo intro',
    problemStatement: 'Codedynamo problem',
    objectives: ['Obj 1'],
    features: ['Feat 1'],
    techStack: ['React', 'Node.js'],
    versionControl: {
      currentVersion: 'v1.0.0',
      futureUpdates: ['Update 1'],
    },
  },
  codedynamo: [
    {
      title: 'Coming Soon Project',
      carouselImages: ['/images/comingsoon1.jpg'],
      introduction: 'Coming soon intro',
      problemStatement: 'Coming soon problem',
      objectives: ['Obj 1'],
      features: ['Feat 1'],
      techStack: ['Next.js'],
      versionControl: {
        currentVersion: 'v0.1.0',
        futureUpdates: ['Update 1'],
      },
    },
  ],
};

describe('PortfolioDisplayClient Component', () => {
  beforeEach(() => {
    render(<PortfolioDisplayClient data={mockData} />);
  });

  it('renders the main title', () => {
    expect(screen.getByText(/Test Portfolio/i)).toBeInTheDocument();
  });

  it('renders the introduction section', () => {
    expect(
      screen.getByText(/This is the introduction section./i)
    ).toBeInTheDocument();
  });

  it('renders the problem statement section', () => {
    expect(
      screen.getByText(/This is the problem statement./i)
    ).toBeInTheDocument();
  });

  it('renders all objectives', () => {
    mockData.objectives.forEach((obj) => {
      expect(screen.getByText(obj)).toBeInTheDocument();
    });
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

  it('renders version control current version', () => {
    expect(screen.getByText(/v1.0.0/i)).toBeInTheDocument();
  });

  it('renders back to projects link', () => {
    expect(screen.getByText(/Back to Projects/i)).toBeInTheDocument();
  });
});
