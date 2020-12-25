const venom = require('venom-bot');
const stages = require('./stages');
const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./storage');

venom.create(
  'support', 
  (base64Qrimg, asciiQR, attempts, urlCode) => {
    console.log('Number of attempts to read the qrcode: ', attempts);
    console.log('Terminal qrcode: ', asciiQR);
    console.log('base64 image string qrcode: ', base64Qrimg);
    console.log('urlCode (data-ref): ', urlCode);
  }, 
  (statusSession, session) => {
    console.log('Status Session: ', statusSession);
    console.log('Session name: ', session);
  },
  {
    autoClose: 0, 
    disableWelcome: true
  })
  .then((client) => start(client))
  .catch((erro) => {
      console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    localStorage.getItem(message.from) === null ? localStorage.setItem(message.from, 0) : localStorage.getItem(message.from);
    if (message.from === '553175335853@c.us' && message.isGroupMsg === false) {
        stages[localStorage.getItem(message.from)].file.execute(client, message);
    }
  });
}