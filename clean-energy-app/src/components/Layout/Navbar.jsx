import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <AppBar position="static" role="navigation">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/dashboard"
            color="inherit"
            aria-label="Go to Dashboard"
          >
            Dashboard
          </Button>
          <Button
            component={Link}
            to="/summary"
            color="inherit"
            aria-label="Go to Summary"
          >
            Summary
          </Button>
          <Button
            component={Link}
            to="/reports"
            color="inherit"
            aria-label="Go to Reports"
          >
            Reports
          </Button>
        </Box>
        <Button 
          color="inherit" 
          onClick={logout}
          aria-label="Logout"
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;