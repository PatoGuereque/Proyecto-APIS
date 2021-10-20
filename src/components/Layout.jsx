import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Copyright from './Copyright';

const MainLayout = ({ children }) => (
  <>
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Menu
        </Typography>
      </Toolbar>
    </AppBar>
    <main>{children}</main>
    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </Box>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
