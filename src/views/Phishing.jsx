import { Container, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import PhishingQuizView from './PhishingQuiz';

const PhishingView = () => {
  const [quizActive, setQuizActive] = useState(false);

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        justifyContent: 'center',
      }}
    >
      {quizActive ? (
        <PhishingQuizView />
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

          <Button
            variant="contained"
            size="large"
            onClick={() => setQuizActive(true)}
          >
            Start
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default PhishingView;
