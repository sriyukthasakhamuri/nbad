import { useState, useEffect } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { getRenewableGrowthData } from '../services/api';

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRenewableGrowthData();
        setData(response);
      } catch (error) {
        console.error('Error fetching renewable growth data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container component="main" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Investment in Renewable Energy Technologies
        </Typography>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="technology" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#82ca9d" name="Investment (Billion USD)" />
          </BarChart>
        </ResponsiveContainer>
        <Typography variant="body2" sx={{ mt: 2 }}>
          This chart illustrates global investment trends in various renewable energy 
          technologies, showing the distribution of funding across different clean 
          energy solutions. Data sourced from Bloomberg New Energy Finance (BNEF).
        </Typography>
      </Paper>
    </Container>
  );
};

export default Reports;