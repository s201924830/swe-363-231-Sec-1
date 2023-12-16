const CustomEventEmitter = require('./event2');
const emitter = new CustomEventEmitter();

emitter.on('userLoggedIn', (user) => { console.log(`${new Date().toISOString()}: ${user} logged in`);});
emitter.on('userLoggedOut', (user) => { console.log(`${new Date().toISOString()}: ${user} logged out`);});

function simulateUserActivity() {
  const userId = `USER_${Math.floor(Math.random() * 100)}`;
  const loggedIn = Math.random() > 0.5;

  if (loggedIn) {emitter.emit('userLoggedIn', userId);} 
  else { emitter.emit('userLoggedOut', userId);}

  setTimeout(simulateUserActivity, Math.random() * 700 + 50);
}
simulateUserActivity(); 