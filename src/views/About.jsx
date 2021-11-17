import React from 'react';
import Typography from '@mui/material/Typography';

import CardGrid from '../components/CardGrid';

const AboutView = () => (
  <div>
    <Typography padding="10px" variant="h2" component="div" gutterBottom>
      About us
    </Typography>
    <Typography variant="h5" margin="10px" align="left" color="text.secondary" paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
      luctus tincidunt. Nulla nulla velit, congue eu felis ut, aliquet tempus
      quam. Praesent placerat, orci ut sagittis gravida, nulla mauris luctus
      nisi, sit amet vulputate ex nulla in velit. Vivamus nunc dolor, vulputate
      ac pretium at, egestas vitae urna. Praesent bibendum tempor felis, sed
      lacinia purus porta lobortis. Praesent egestas aliquet velit ac varius.
    </Typography>
    <CardGrid />
  </div>
);

export default AboutView;
