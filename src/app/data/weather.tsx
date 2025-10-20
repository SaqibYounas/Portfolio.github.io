import { weatherAppData } from './weather-project';

export const projects: {
  title: string;
  description: string;
  image: string;
  detailsPage: string;
  liveDemo?: string;
}[] = [
  {
    title: weatherAppData.title,
    description: weatherAppData.shortDescription,
    image: weatherAppData.image,
    detailsPage: '/projects/weather-app',
    liveDemo: weatherAppData.liveDemo,
  },
];

export { weatherAppData };
