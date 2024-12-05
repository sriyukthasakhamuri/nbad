import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { logout, token } = useAuth();

  return (
    <AppBar position="static" role="navigation">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
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