const questions = [
  {
    questionText:
      'Program that infects files and reproduces itself to infect other files and cause damage',
    answerOptions: [
      { answerText: 'Virus', isCorrect: true },
      { answerText: 'Trojan', isCorrect: false },
      { answerText: 'Worm', isCorrect: false },
      { answerText: 'Ransomware', isCorrect: false },
    ],
  },
  {
    questionText:
      'It disguises itself as a legitimate application while it does malicious activities in the background',
    answerOptions: [
      { answerText: 'Adware', isCorrect: false },
      { answerText: 'Virus', isCorrect: false },
      { answerText: 'Trojan', isCorrect: true },
      { answerText: 'Rootkit', isCorrect: false },
    ],
  },
  {
    questionText:
      'Program that tries to not harm your PC, but it tries to steals confidential data like passwords, users, history...',
    answerOptions: [
      { answerText: 'Worm', isCorrect: false },
      { answerText: 'Adware', isCorrect: false },
      { answerText: 'Ransomware', isCorrect: false },
      { answerText: 'Spyware', isCorrect: true },
    ],
  },
  {
    questionText:
      'Program that exposes advertisements to the user without their consent or was not aware of said advertisements',
    answerOptions: [
      { answerText: 'Spyware', isCorrect: false },
      { answerText: 'Commercialware', isCorrect: false },
      { answerText: 'Adware', isCorrect: true },
      { answerText: 'Rootkit', isCorrect: false },
    ],
  },
  {
    questionText:
      "Program similar to a Trojan in that it creates a backdoor to have access to the victim's computer, but it's more dangerous because it embeds itself to the Operating System of the machine.",
    answerOptions: [
      { answerText: 'Virus', isCorrect: false },
      { answerText: 'Randomware', isCorrect: false },
      { answerText: 'Rootkit', isCorrect: true },
      { answerText: 'Worm', isCorrect: false },
    ],
  },
  {
    questionText:
      'The objective of this malware is to infect as many computers as possible by transmitting itself on the network.',
    answerOptions: [
      { answerText: 'Worm', isCorrect: true },
      { answerText: 'Trojan', isCorrect: false },
      { answerText: 'Netbot', isCorrect: false },
      { answerText: 'Virus', isCorrect: false },
    ],
  },
  {
    questionText:
      "Program that takes a computer's data hostage and demands the victims for money in order for them to get back their data.",
    answerOptions: [
      { answerText: 'Rootkit', isCorrect: false },
      { answerText: 'MITM', isCorrect: false },
      { answerText: 'DNS', isCorrect: false },
      { answerText: 'Ransomware', isCorrect: true },
    ],
  },
];

export default questions;
