const checkRightAnswer = require("./game");

test("It should generate wrong answer", () => {
    expect(checkRightAnswer({ question: "sets", answer: "test" }, "etss"))
      .toBe(false);
});

test("It should generate right answer", () => {
    expect(checkRightAnswer({ question: "sets", answer: "test" }, "test"))
      .toBe(true);
});
