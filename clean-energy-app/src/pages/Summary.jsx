import { Container, Typography } from '@mui/material';
import EnergyConsumptionChart from '../components/Charts/EnergyConsumptionChart';
import { useEffect, useState } from 'react';
import { getEnergyConsumptionData } from '../services/api';

const Summary = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEnergyConsumptionData();
        const formattedData = result.map(item => ({
          name: item.year,
          consumption: item.solar + item.wind // Combine solar and wind for total consumption
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching energy consumption data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container component="main" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Summary</Typography>
      <EnergyConsumptionChart data={data} />
      <Typography paragraph>
        This chart shows the energy consumption data over time. Source: [Your Source Here].
      </Typography>
    </Container>
  );
};

export default Summary;