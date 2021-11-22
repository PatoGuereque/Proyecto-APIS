const questions = [
  {
    situation:
      "You work in a very important company, which has a skyscraper. Only people with an access card can enter the offices. You just used your card to open the office door when you hear someone behind you say “Hey, excuse me. Can you keep the door open please?\" When you turn around, you see this person with a tray of coffee cups, he's talking on the phone, and he's in a hurry.",
    questionText: 'Would you let him in?',
    answerOptions: [
      {
        answerText: 'Yes',
        explanation:
          'The attacker knows that people are programmed to help. Seeing this person who has his hands full and appears to be supported, your first instinct might be to help him out. But keep in mind that all this can be a hoax so that he can go to the offices without using the access card.',
        isCorrect: false,
      },
      {
        answerText: 'No',
        explanation:
          "Very well. Although it may seem bad vibes, it is the safest thing for the company and for you as an employee to avoid problems with possible intruders in the offices. Attackers will try to take advantage of people's goodness in order to get what they want.",
        isCorrect: true,
      },
    ],
  },
  {
    questionText:
      'WhatsApp has had a service outage, and lasts in that state for a few hours a day. When the service is recovered, you and several of your acquaintances receive the following message:',
    answerOptions: [
      {
        answerText: 'Yes',
        explanation:
          'The attacker took advantage of the service crash to be able to send this message to all potential victims once the service returns to appear even more compelling. You have to be very careful with WhatsApp messages, since the official announcements of the company usually (if not never) do not send them by private message.',
        isCorrect: false,
      },
      {
        answerText: 'No',
        explanation:
          'Excellent. Although they take advantage of the fall of WhatsApp to sound more convincing, it is important to see the small details. A quick Google search reveals that Karelis Hernández is not the head of WhatsApp. In addition, a change like the one that comes in the message would have easily reached the news, since WhatsApp is free and does not charge for its services.',
        isCorrect: true,
      },
    ],
  },
];

export default questions;
