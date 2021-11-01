import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';

const MainLayout = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <main>{children}</main>

    <Footer />
  </Box>
);

MainLayout.propTypes = {
  children: PropTypes.element,
};

export default MainLayout;
