import googleExercise1 from '../emails/googleExercise1';
import ebayExercise2 from '../emails/ebayExercise2';
import wordExercise3 from '../emails/wordExercise3';
import microsoftExercise4 from '../emails/microsoftExercise4';
import googleExercise5 from '../emails/googleExercise5';
import googleExercise6 from '../emails/googleExercise6';
import ebayExercise7 from '../emails/ebayExercise7';
import microsoftExercise8 from '../emails/microsoftExercise8';

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
  {
    questionText: (userName, userEmail) =>
      googleExercise5({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation:
      'This is phishing. The emails from this school normally come from another domain which is different to the one from the email. Also, be very careful about attached documents, they could contain hidden but harmful programs.',
  },
  {
    questionText: (userName, userEmail) =>
      googleExercise6({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation:
      'This is phishing. They are using a scare tactic in order for you to give them your password, but if you look at the change password button, you can see that the hyperlink redirect to another URL that is not owned by google.',
  },
  {
    questionText: (userName, userEmail) =>
      ebayExercise7({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legit', isCorrect: false },
    ],
    explanation:
      'This is phishing. Once again, they are using a scare tactic but with a more agressive look. The change password button redirects to an eBay-like page, but it redirects to somewhere else using tinyurl.',
  },
  {
    questionText: (userName, userEmail) =>
      microsoftExercise8({ name: userName, email: userEmail }),
    answerOptions: [
      { answerText: 'Phishing', isCorrect: false },
      { answerText: 'Legit', isCorrect: true },
    ],
    explanation:
      'This is not phishing. The URLs are legitimate and actually redirect to the service that is trying to get access.',
  },
];

export default questions;
