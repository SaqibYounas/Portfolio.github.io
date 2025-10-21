import WeatherAppPageClient from '../../components/Projects/weather/WeatherAppPage';
import { weatherAppData } from '../../data/weather-project';

const WeatherAppPage = () => {
  return <WeatherAppPageClient data={weatherAppData} />;
};

export default WeatherAppPage;
