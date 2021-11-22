import { Grid, Typography } from '@mui/material';
import React from 'react';
import ReactPlayer from 'react-player/youtube';

const SocialEngineeringVideos = () => (
  <>
    <Grid item xs={12} md={6}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Impersonating TI Personnel
      </Typography>
      <ReactPlayer url="https://www.youtu.be/BOMgZCfpGVU" />
    </Grid>
    <Grid item xs={12} md={6} mt={2}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Cloning RFID Card
      </Typography>
      <ReactPlayer url="https://youtu.be/Mk9CA8MkUXY" />
    </Grid>
  </>
);

export default SocialEngineeringVideos;
