import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography } from '@mui/material';

const EnergyConsumptionChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <Typography>No data available for the chart.</Typography>;
  }

  return (
    <LineChart width={600} height={300} data={data} aria-label="Energy Consumption Chart">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="consumption" stroke="#8884d8" />
    </LineChart>
  );
};

export default EnergyConsumptionChart;