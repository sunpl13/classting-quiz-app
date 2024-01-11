import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  data: ChartData<'doughnut'>;
};

const DoughnutChart = ({ data }: Props) => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
