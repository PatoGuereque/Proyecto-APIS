import React from 'react';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { routes } from '../views/routes';

const Header = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          TRY.PHISH.ME
        </Typography>
        <nav>
          {routes.map((route) => (
            <Link
              key={route.name}
              component={RouterLink}
              to={route.to}
              variant="button"
              color="#fff"
              underline={location.pathname === route.to ? 'always' : 'hover'}
              sx={{ my: 1, mx: 1.5 }}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
