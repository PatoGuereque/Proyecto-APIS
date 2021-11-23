import { Box, Container, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import SocialEngineeringQuizView from './SocialEngineeringQuiz';

const SocialEngineeringView = () => {
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
        <SocialEngineeringQuizView />
      ) : (
        <Container maxWidth="lg" align="center">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Social Engineering
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            This section will focus on social engineering attacks. You are going
            to be presented with two situations, and choose the option that best
            describe what should you do in those situations. Later, two videos
            will be shown regarding social engineering attacks.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => setQuizActive(true)}
          >
            Start Quiz
          </Button>
        </Container>
      )}
    </Box>
  );
};

export default SocialEngineeringView;
