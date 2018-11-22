const expect = require("expect");

const { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate the correct message object", () => {
    const from = "Tramaine";
    const text = "Hello world.";
    const message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA("number");
  });
});

describe("generateLocationMessage", () => {
  it("should generate the correct location message object", () => {
    const from = "Tramaine";
    const latitude = 123;
    const longitude = -456;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const message = generateLocationMessage(from, { latitude, longitude });
    
    expect(message).toInclude({ from, url });
    expect(message.createdAt).toBeA("number");
  });
});
