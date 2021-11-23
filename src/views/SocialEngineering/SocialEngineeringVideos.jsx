import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

const SocialEngineeringVideos = () => (
  <>
    <Grid item xs={12} lg={6}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Impersonating TI Personnel
      </Typography>
      <Box
        sx={{
          maxWidth: '640px',
        }}
      >
        <ReactPlayer url="https://www.youtu.be/BOMgZCfpGVU" width="100%" />
      </Box>
    </Grid>
    <Grid item xs={12} lg={6}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Cloning RFID Card
      </Typography>
      <Box
        sx={{
          maxWidth: '640px',
        }}
      >
        <ReactPlayer url="https://youtu.be/Mk9CA8MkUXY" width="100%" />
      </Box>
    </Grid>
  </>
);

export default SocialEngineeringVideos;
