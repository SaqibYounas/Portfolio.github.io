// WeatherAppPageClient.test.tsx
import { render, screen } from '@testing-library/react';
import { WeatherAppPageClient } from '../Weather/WeatherApp';
import React from 'react';

const mockData = {
  title: 'Weather App',
  overview: 'This app shows weather information for any city.',
  shortDescription: 'A simple weather app using React and OpenWeather API.',
  features: [
    'Search by city',
    'Displays temperature, humidity, and wind speed',
    'Forecast for next 7 days',
  ],
  techStack: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeather API'],
  apiUsed: 'OpenWeather API',
  fetchExamples: [
    'fetch("api/weather?city=London")',
    'fetch("api/weather?city=New York")',
  ],
  image: '/images/weather-app.png',
  liveDemo: 'https://weatherapp.example.com',
};

describe('WeatherAppPageClient Component', () => {
  it('renders the main heading', () => {
    render(<WeatherAppPageClient data={mockData} />);
    const heading = screen.getByRole('heading', { name: /weather app/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the overview section', () => {
    render(<WeatherAppPageClient data={mockData} />);
    const overview = screen.getByText(mockData.overview);
    expect(overview).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<WeatherAppPageClient data={mockData} />);
    mockData.features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('renders the tech stack', () => {
    render(<WeatherAppPageClient data={mockData} />);
    mockData.techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument();
    });
  });

  it('renders API used', () => {
    render(<WeatherAppPageClient data={mockData} />);
    const apiText = screen.getByText(new RegExp(mockData.apiUsed, 'i'));
    expect(apiText).toBeInTheDocument();
  });

  it('renders API fetch examples', () => {
    render(<WeatherAppPageClient data={mockData} />);
    mockData.fetchExamples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });

  it('renders the live demo link', () => {
    render(<WeatherAppPageClient data={mockData} />);
    const link = screen.getByRole('link', {
      name: /https:\/\/weatherapp.example.com/i,
    });
    expect(link).toHaveAttribute('href', mockData.liveDemo);
  });

  it('renders the back to projects link', () => {
    render(<WeatherAppPageClient data={mockData} />);
    const backLink = screen.getByRole('link', { name: /← back to projects/i });
    expect(backLink).toHaveAttribute('href', '/projects');
  });
});
