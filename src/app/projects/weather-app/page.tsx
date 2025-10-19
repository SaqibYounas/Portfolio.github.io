import WeatherAppPageClient from '../../components/Projects/weather/WeatherAppPage';
import { weatherAppData } from '../../data/weather-project';

const WeatherAppPage = () => {
  // Server side: just pass static data
  return <WeatherAppPageClient data={weatherAppData} />;
};

export default WeatherAppPage;
