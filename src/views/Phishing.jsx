import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Grid,
} from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import PhishingQuizView from './PhishingQuiz';

const PhishingView = () => {
  const [quizActive, setQuizActive] = useState(false);
  const [name, setName] = useState('User');
  const [email, setEmail] = useState('user@example.com');
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setQuizActive(true);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: quizActive ? 0 : 8,
        justifyContent: 'center',
      }}
    >
      {quizActive ? (
        <PhishingQuizView userName={name} userEmail={email} />
      ) : (
        <Container maxWidth="lg" align="center">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Phishing
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            In this section we are going to focus on phishing. We will show a
            sample email and you have to decide wether it is phishing or not.
            Before starting we need that you to provide a name and email, this
            can or cannot be real, these are just for the exercise.
          </Typography>

          <Grid container justifyContent="center">
            <form>
              <Grid item xs={12} mt={1}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField onChange={onChange} value={value} label="Name" />
                  )}
                />
              </Grid>
              <Grid item xs={12} mt={1}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      onChange={onChange}
                      value={value}
                      label="Email"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} mt={1}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit(onSubmit)}
                >
                  Start
                </Button>
              </Grid>
            </form>
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default PhishingView;
