import { Container, Typography } from '@mui/material';
import RenewableGrowthChart from '../components/Charts/RenewableGrowthChart';
import { useEffect, useState } from 'react';
import { getRenewableGrowthData } from '../services/api';

const Reports = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getRenewableGrowthData();
        const formattedData = result.map(item => ({
          name: item.technology,
          growth: item.investment
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching renewable growth data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container component="main" sx={{ mt: 4 }} role="main">
      <Typography variant="h4" gutterBottom>Reports</Typography>
      <RenewableGrowthChart data={data} aria-label="Renewable Growth Chart" />
      <Typography paragraph>
        This chart shows the renewable energy growth data. Source: [Your Source Here].
      </Typography>
    </Container>
  );
};

export default Reports;