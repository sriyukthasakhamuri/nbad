import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout, token } = useAuth();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }} role="navigation">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Clean Energy App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {token && (
            <>
              <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>
              <Button component={Link} to="/summary" color="inherit">Summary</Button>
              <Button component={Link} to="/reports" color="inherit">Reports</Button>
            </>
          )}
        </Box>
        {token ? (
          <Button color="inherit" onClick={logout}>Logout</Button>
        ) : (
          <Button component={Link} to="/login" color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;