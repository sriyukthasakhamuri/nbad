import { Container } from '@mui/material';
import EnergyConsumptionChart from '../components/Charts/EnergyConsumptionChart';

const Summary = () => {
  return (
    <Container component="main" sx={{ mt: 4 }}>
      <EnergyConsumptionChart />
    </Container>
  );
};

export default Summary;