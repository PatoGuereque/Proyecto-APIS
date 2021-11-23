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
          variant="h1"
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
          Hello! this is <b>try.phish.me</b>, a site where you can learn how to protect
          your personal data online. <br />Nowadays, there are many threats to our
          online privacy and here we chose three of the most common ones to shed a light on these posible attacks. Do not
          know what phising is? Are you aware of the types of malware there
          are? Ever heard about Social Engineering? No? Do not worry, we are here
          to help.
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
