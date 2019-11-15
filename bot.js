const tellMeImConnected = require('./lib/tmiAdapter/onConnected');
const onMessageReceived = require('./lib/handle/message');
const tmi = require('tmi.js');

const opts = {
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

const client = new tmi.client(opts);

client.on('connected', tellMeImConnected);
client.on('message', respondToGood);

client.connect();

function respondToGood(target, context, msg, self) {
  const response = onMessageReceived(target, context, msg, self);
  if (sendable(response)) { client.say(target, response); }
}

function sendable(response) { return !!response; }
