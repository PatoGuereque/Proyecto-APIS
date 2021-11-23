import googleExercise1 from '../emails/googleExercise1';
import ebayExercise2 from '../emails/ebayExercise2';
import wordExercise3 from '../emails/wordExercise3';
import microsoftExercise4 from '../emails/microsoftExercise4';

const questions = [
  {
    questionText: (userName, userEmail) =>
      googleExercise1({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation:
      "This is phishing. When you hover on the redirect links, you can see that the URLs are similar but not the same as Google's official URLs. When clicking on redirect links, you need to make sure that the URLs are the correct ones.",
  },
  {
    questionText: (userName, userEmail) =>
      ebayExercise2({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation:
      'This is phishing. The domain of the email from which the fax was received is "ebay-support.com" while the hyperlink in the button "Protect your account" points to a page with the ending "mailru382.co"',
  },
  {
    questionText: (userName, userEmail) =>
      wordExercise3({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation:
      'This is phishing. The open button hyperlink leads to a URL that tries to look like google drive, but has the domain sytez.net.',
  },
  {
    questionText: (userName, userEmail) =>
      microsoftExercise4({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: false },
      { answerText: 'Legit', isCorrect: true },
    ],
    explanation:
      'This is not phishing. Even if the mail domain is microsoft-support, it is still legitimate. Also, the button redirects to microsoft.com using HTTPS',
  },
];

export default questions;
