import PortfolioDisplayClient from '../../components/Projects/Portfolio/Portfolio';
import { portfolioData } from '../../data/Projects/portfolio';

export default function PortfolioDisplayPage() {
  return <PortfolioDisplayClient data={portfolioData} />;
}
