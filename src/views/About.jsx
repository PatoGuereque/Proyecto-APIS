import React from 'react';
import { Typography, Box } from '@mui/material';
import CardGrid from '../components/CardGrid';

const AboutView = () => (
  <>
    <Box sx={{ justifyContent: 'center', display: 'flex' }}>
      <Typography padding="10px" variant="h2" component="div">
        About us
      </Typography>
    </Box>
    <CardGrid />
  </>
);

export default AboutView;
