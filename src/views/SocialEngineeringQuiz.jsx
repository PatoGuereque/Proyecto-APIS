import { Container, Typography, Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import questions from '../components/SocialEngineeringQuestions';
import SocialEngineeringVideos from './SocialEngineeringVideos';

const SocialEngineeringQuizView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showVideos, setShowVideos] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerOptionClick = (_explanation) => {
    setShowExplanation(true);
    setExplanation(_explanation);
    setDisableButton(true);
  };

  const handleNextButton = () => {

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowVideos(true);
    }

    setShowExplanation(false);
    setDisableButton(false);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        justifyContent: 'center',
      }}
    >
      {showVideos ? (
        <Grid container align="center">
          <SocialEngineeringVideos />
          <Grid item xs={12}>
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                setCurrentQuestion(0);
                setShowVideos(false);
              }}
            >
              From Start
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Container maxWidth="lg" align="center">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Situation {currentQuestion + 1}/{questions.length}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            <strong>Situation:</strong> {questions[currentQuestion].situation}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            <strong>Question:</strong> {questions[currentQuestion].questionText}
          </Typography>

          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <Button
                key={answerOption.answerText}
                onClick={() => handleAnswerOptionClick(answerOption.explanation)}
                variant="contained"
                sx={{
                  mr: 1,
                  ml: 1,
                  mt: 2,
                }}
                disabled={disableButton}
              >
                {answerOption.answerText}
              </Button>
            ))}

            {showExplanation ? (
              <>
                <Typography mb={2} mt={2}>
                  {explanation}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => handleNextButton()}
                >
                  Next
                </Button>
              </>
            ) : (
              <></>
            )}
          </Typography>

        </Container>
      )}
    </Box>
  );
};

export default SocialEngineeringQuizView;
