import React from 'react';
import { Box, Container } from '@mui/material';
import Copyright from './Copyright';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      px: 2,
      mt: 'auto',
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    }}
  >
    <Container>
      <Copyright />
    </Container>
  </Box>
);

export default Footer;
