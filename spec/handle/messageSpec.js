const subject = require('../../lib/handle/message');

describe("handle/message/buildResponse", function() {
  it("builds a response string from a valid message", function () {
    const target = "";
    const context = "";
    const message = "suggest";
    const self = false;

    const actual = subject(target, context, message, self);

    expect(actual).toContain(message);
  });

  it("builds a DO_NOT_REPLY message for messages that need no response", function () {
    const target = "";
    const context = "";
    const message = "No reply necessary, but know that I love you.";
    const self = false;

    const actual = subject(target, context, message, self);

    expect(actual).toEqual("");
  });

  it("does not respond to itself even if the message is valid", function () {
    const target = "";
    const context = "";
    const message = "suggest";
    const self = true;

    const actual = subject(target, context, message, self);

    expect(actual).toEqual("");
  });
});
