const buildResponse = require('../../lib/handle/message');
const constants = require('../constants/internal');
const DO_NOT_REPLY = constants.DO_NOT_REPLY;

function respondToGood(channel, tags, message, self, client) {
  const response = buildResponse(channel, tags, message, self);
  if (response !== DO_NOT_REPLY) { client.say(channel, response); }
}

module.exports = respondToGood;
