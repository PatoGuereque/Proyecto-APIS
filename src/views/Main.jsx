import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

const images = [
  {
    name: 'Phishing',
    src: 'https://www.bbva.com/wp-content/uploads/2018/10/Portada-Phishing-1920x1441.jpg',
  },
  {
    name: 'Malware',
    src: 'https://noticias.cec.es/wp-content/uploads/2020/03/pdfExploit.jpg',
  },
  {
    name: 'Social Engineering',
    src: 'https://www.noticias.ltda/wp-content/uploads/2019/07/social-engineering.png',
  },
];

const Main = () => (
  <>
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
          luctus tincidunt. Nulla nulla velit, congue eu felis ut, aliquet
          tempus quam. Praesent placerat, orci ut sagittis gravida, nulla mauris
          luctus nisi, sit amet vulputate ex nulla in velit. Vivamus nunc dolor,
          vulputate ac pretium at, egestas vitae urna. Praesent bibendum tempor
          felis, sed lacinia purus porta lobortis. Praesent egestas aliquet
          velit ac varius.
        </Typography>
      </Container>
    </Box>
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {images.map(({ name, src }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" alt={name} height="160" image={src} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </>
);

export default Main;
