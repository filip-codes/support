import { Str } from "../src/Str";

describe("Str", () => {
  it("can be instantiated without throwing errors", () => {
    expect(() => new Str()).not.toThrow(TypeError);
  });
});
