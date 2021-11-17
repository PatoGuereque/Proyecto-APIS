import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AboutView = () => (
  <div>
    <h1>About us</h1>
    <Card
      variant="outlined"
      style={{ margin: 'auto', flexDirection: 'column', maxWidth: '95vw' }}
    >
      <Grid
        container
        display="flex"
        direction="row"
        alignItems="center"
        justifyContent="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        padding="20px"
        margin="5px"
      >
        <Grid item md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Joel Chávez
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />a benevolent smile
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Rodrigo Kwok
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective{' '}
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />a benevolent smile
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Daniel David
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />a benevolent smile
              </Typography>
            </CardContent>{' '}
          </Card>
        </Grid>
        <Grid item md={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Omar Balboa
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />a benevolent smile
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Alex Vargas
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Programmer
              </Typography>
              <Typography variant="body2">
                Computer Science student
                <br /> at ITESM monterrey
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Patricio Güereque
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />a benevolent smile
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item md={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                Cesar Martínez
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />a benevolent smile
              </Typography>
            </CardContent>
          </Card>{' '}
        </Grid>
      </Grid>
    </Card>
  </div>
);

export default AboutView;
