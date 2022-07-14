import { Skeleton } from "../src/Skeleton";

describe("Skeleton", () => {
  it("can be instantiated without throwing errors", () => {
    expect(() => new Skeleton()).not.toThrow(TypeError);
  });
});
