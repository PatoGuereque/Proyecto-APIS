import { Container, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import questions from '../components/PhishingQuestions';

const PhishingQuizView = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
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
      {showScore ? (
        <Container maxWidth="lg" align="center">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            You scored {score} out of {questions.length}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              setScore(0);
              setCurrentQuestion(0);
              setShowScore(false);
            }}
          >
            Try again
          </Button>
        </Container>
      ) : (
        <Container maxWidth="lg" align="center">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Question {currentQuestion + 1}/{questions.length}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {questions[currentQuestion].questionText}
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
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </Button>
            ))}
          </Typography>
        </Container>
      )}
    </Box>
  );
};

export default PhishingQuizView;
