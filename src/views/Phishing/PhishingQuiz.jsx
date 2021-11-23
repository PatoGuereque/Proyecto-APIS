import { Container, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import questions from '../../components/PhishingQuestions';
import FakeEmail from '../../components/FakeEmail';

const PhishingQuizView = ({ userName, userEmail }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [emailContent, setEmailContent] = useState(
    questions[0].questionText(userName, userEmail)
  );
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowExplanation(true);
  };

  const handleNextButton = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setEmailContent(
        questions[currentQuestion + 1].questionText(userName, userEmail)
      );
    } else {
      setShowScore(true);
    }

    setShowExplanation(false);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
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
              setEmailContent(questions[0].questionText(userName, userEmail));
              setShowScore(false);
            }}
          >
            Try again
          </Button>
        </Container>
      ) : (
        <>
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

            <Typography
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Is the following email phishing or legit?
            </Typography>

            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <Button
                variant="contained"
                key={answerOption.answerText}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                sx={{
                  mr: 1,
                  ml: 1,
                }}
                disabled={showExplanation}
              >
                {answerOption.answerText}
              </Button>
            ))}

            {showExplanation ? (
              <>
                <Typography mb={2} mt={2}>
                  {questions[currentQuestion].explanation}
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
          </Container>
          <FakeEmail
            fromName={userName}
            fromEmail={emailContent.fromEmail}
            toEmail={userEmail}
            subject={emailContent.subject}
            letter={emailContent.letter}
            emailTemplateHtml={emailContent.emailTemplateHtml}
          />
        </>
      )}
    </Box>
  );
};

PhishingQuizView.propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
};

export default PhishingQuizView;
