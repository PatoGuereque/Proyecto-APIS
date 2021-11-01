import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const Copyright = () => (
  <Typography variant="body2" color="text.secondary" align="center">
    {'Copyright © '}
    <Link color="inherit" component={RouterLink} to="/">
      APIS
    </Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
