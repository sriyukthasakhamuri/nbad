import { useState, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { Typography, Paper, Box } from '@mui/material';
import { getEnergyConsumptionData } from '../../services/api';

const EnergyConsumptionChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEnergyConsumptionData();
        setData(response);
      } catch (error) {
        console.error('Error fetching energy consumption data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Paper elevation={3} sx={{ p: 3, my: 4 }}>
      <Typography variant="h6" gutterBottom>
        Global Clean Energy Consumption Trends
      </Typography>
      <Box sx={{ height: 400, width: '100%' }}>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="solar" 
              stroke="#8884d8" 
              name="Solar Energy"
            />
            <Line 
              type="monotone" 
              dataKey="wind" 
              stroke="#82ca9d" 
              name="Wind Energy"
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        This chart shows the growth in global clean energy consumption, 
        highlighting the increasing adoption of solar and wind energy sources 
        over the past decade. Data sourced from International Energy Agency (IEA).
      </Typography>
    </Paper>
  );
};

export default EnergyConsumptionChart;