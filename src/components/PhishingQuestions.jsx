import ebay from '../emails/ebay';
import google from '../emails/google';
import microsoft from '../emails/microsoft';
import word from '../emails/word';

const questions = [
  {
    questionText: (userName) => ebay(userName),
    answerOptions: [
      { answerText: 'Phising', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation: 'porque tal y tal',
  },
  {
    questionText: (userName) => google(userName),
    answerOptions: [
      { answerText: 'Phising', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation: 'porque tal y tal',
  },
  {
    questionText: (userName) => microsoft(userName),
    answerOptions: [
      { answerText: 'Phising', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation: 'porque tal y tal',
  },
  {
    questionText: (userName) => word(userName),
    answerOptions: [
      { answerText: 'Phising', isCorrect: false },
      { answerText: 'Legit', isCorrect: true },
    ],
    explanation: 'porque tal y tal',
  },
];

export default questions;
