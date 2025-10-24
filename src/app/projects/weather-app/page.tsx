import { WeatherAppPageClient } from '../../components/Projects/Weather/WeatherApp';
import { weatherAppData } from '../../data/Projects/weather-project';

const WeatherAppPage = () => {
  return <WeatherAppPageClient data={weatherAppData} />;
};

export default WeatherAppPage;
