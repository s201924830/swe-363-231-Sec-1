const readline = require('readline');

const qaPairs = {
  'How are you?': "good",
  'What is your name?': "chat bot.",
  "what is your purpose?": "chatting ",
  "why are we still here?": "just to suffer",
};
const readline0 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getUserInput = () => {
  readline0.question('You: ', (input) => {
    if (input.toLowerCase() === 'exit' || input.toLowerCase() === 'quit') {
      readline0.close();
    } else {
      const response = qaPairs[input] || "Sorry, I did not understand what you meant.";
      console.log('Chatbot:', response);
      getUserInput();
    }
  });
};

getUserInput();
readline0.on('close', () => {
  console.log('come back later, please ;{');
  process.exit(0);
});