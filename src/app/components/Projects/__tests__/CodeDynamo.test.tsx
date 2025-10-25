import { render, screen } from '@testing-library/react';
import RoleBasedProject from '../CodedynamoProject/CodeDynamo';
import '@testing-library/jest-dom';

const mockData = {
  title: 'Test Project',
  slug: 'test-project',
  carouselImages: ['image1.jpg', 'image2.jpg'],
  introduction: 'This is the introduction.',
  problemStatement: 'This is the problem statement.',
  objectives: ['Objective 1', 'Objective 2'],
  clientScope: ['Client Scope 1', 'Client Scope 2'],
  adminScope: ['Admin Scope 1', 'Admin Scope 2'],
  commingsoon: 'https://example.com',
};

jest.mock('../../Sidebar/SideBar', () => ({
  __esModule: true,
  default: ({ images }: { images: string[] }) => (
    <div data-testid="carousel">{images.join(',')}</div>
  ),
}));

describe('RoleBasedProject Component', () => {
  beforeEach(() => {
    render(<RoleBasedProject data={mockData} />);
  });

  it('renders the project title', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      mockData.title
    );
  });

  it('renders the carousel with images', () => {
    expect(screen.getByTestId('carousel')).toHaveTextContent(
      mockData.carouselImages.join(',')
    );
  });

  it('renders all sections correctly', () => {
    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText(mockData.introduction)).toBeInTheDocument();
    expect(screen.getByText('Problem Statement')).toBeInTheDocument();
    expect(screen.getByText(mockData.problemStatement)).toBeInTheDocument();
    expect(screen.getByText('Objectives')).toBeInTheDocument();
    expect(screen.getByText('Client Scope')).toBeInTheDocument();
    expect(screen.getByText('Admin Scope')).toBeInTheDocument();
  });

  it('renders all list items', () => {
    mockData.objectives.forEach((obj) => {
      expect(screen.getByText(obj)).toBeInTheDocument();
    });
    mockData.clientScope.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
    mockData.adminScope.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it('renders the live demo link', () => {
    const link = screen.getByRole('link', { name: mockData.commingsoon });
    expect(link).toHaveAttribute('href', mockData.commingsoon);
  });

  it('renders back to projects link', () => {
    const backLink = screen.getByRole('link', { name: /Back to Projects/i });
    expect(backLink).toHaveAttribute('href', '/projects');
  });
});
