import { Str } from "../src/Str";

describe("Str", () => {
  it("can be instantiated without throwing errors", () => {
    expect(() => new Str()).not.toThrow(TypeError);
  });

  it("can return the remainder of a string after the first occurrence of a given value", () => {
    expect(Str.after("Hello World!", "Hello")).toBe(" World!");
    expect(Str.after("Hello World!", "Filip")).toBe("Hello World!");
    expect(Str.after("Hello World!")).toBe("Hello World!");

    expect(Str.of("Hello World!").after("Hello")).toBe(" World!");
    expect(Str.of("Hello World!").after("Filip")).toBe("Hello World!");
    expect(Str.of("Hello World!").after()).toBe("Hello World!");
  });

  it("can convert a value to camel case", () => {
    expect(Str.camel("Midonis_support_package")).toBe("midonisSupportPackage");

    expect(Str.of("Midonis_support_package").camel()).toBe(
      "midonisSupportPackage"
    );
  });

  it("can make a string's first character lowercase", () => {
    expect(Str.lcfirst("Midonis")).toBe("midonis");

    expect(Str.of("Midonis").lcfirst()).toBe("midonis");
  });

  it("can convert the given string to lower-case", () => {
    expect(Str.lower("MIDONIS")).toBe("midonis");

    expect(Str.of("MIDONIS").lower()).toBe("midonis");
  });

  it("can remove any occurrence of the given string in the subject", () => {
    expect(Str.remove("m", "midonis")).toBe("idonis");
    expect(Str.remove("m", "Midonis", false)).toBe("idonis");

    expect(Str.of("midonis").remove("m")).toBe("idonis");
    expect(Str.of("Midonis").remove("m", false)).toBe("idonis");
  });

  it("can reverse the given string", () => {
    expect(Str.reverse("midonis")).toBe("sinodim");

    expect(Str.of("midonis").reverse()).toBe("sinodim");
  });

  it("can make a string's first character uppercase", () => {
    expect(Str.ucfirst("midonis")).toBe("Midonis");

    expect(Str.of("midonis").ucfirst()).toBe("Midonis");
  });

  it("can convert the given string to upper-case", () => {
    expect(Str.upper("midonis")).toBe("MIDONIS");

    expect(Str.of("midonis").upper()).toBe("MIDONIS");
  });
});
