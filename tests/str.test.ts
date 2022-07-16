import { Str } from "../src/Str";

describe("Str", () => {
  it("can be instantiated without throwing errors", () => {
    expect(() => new Str()).not.toThrow(TypeError);
  });

  it("can convert a value to camel case", () => {
    expect(Str.camel("Midonis_support_package")).toBe("midonisSupportPackage");

    expect(Str.of("Midonis_support_package").camel()).toBe(
      "midonisSupportPackage"
    );
  });

  it("can make a string's first character uppercase", () => {
    expect(Str.ucfirst("midonis")).toBe("Midonis");

    expect(Str.of("midonis").ucfirst()).toBe("Midonis");
  });
});
