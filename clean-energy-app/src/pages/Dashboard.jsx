import { Container, Typography, Paper, Box, Link } from '@mui/material';

const Dashboard = () => {
  return (
    <Container component="main" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Recent Innovations in Clean Energy
        </Typography>
        
        <Typography paragraph>
          Recent innovations in clean energy have revolutionized how we approach sustainable power generation. 
          Breakthrough developments in solar technology have led to the creation of more efficient photovoltaic cells, 
          with perovskite solar cells showing particular promise for their low cost and high efficiency. Wind energy 
          has seen significant advances in turbine design and materials, enabling larger, more efficient installations 
          both onshore and offshore. Energy storage solutions have also evolved, with new battery technologies and 
          grid-scale storage systems making renewable energy more reliable and practical for widespread adoption.
        </Typography>

        <Typography paragraph>
          Hydrogen fuel technology has made substantial progress, particularly in green hydrogen production through 
          electrolysis powered by renewable sources. Smart grid technologies and artificial intelligence are being 
          integrated to optimize energy distribution and consumption, while advances in materials science have 
          enabled more efficient energy transmission and storage solutions.
        </Typography>

        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Source Reference:
          </Typography>
          <Link 
            href="https://www.iea.org/reports/renewable-energy-market-update-2023" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            IEA Renewable Energy Market Update 2023
          </Link>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Technical Implementation Details:
          </Typography>
          <Typography paragraph>
            This application is built using a modern tech stack including:
            - Frontend: React with Material-UI, utilizing React Router for navigation
            - Backend: Node.js with Express.js
            - Database: MongoDB for data storage
            - Authentication: JWT (JSON Web Tokens)
            - Charts: Recharts library for data visualization
            - Server: NGINX as reverse proxy
            The application follows a decoupled architecture with the frontend and backend 
            communicating via RESTful APIs, ensuring scalability and maintainability.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Dashboard;