export class Stringable {
  /**
   * The underlying string value.
   */
  protected value: string;

  /**
   * Create a new instance of the class.
   *
   * @param string string
   */
  public constructor(string: string) {
    this.value = string;
  }

  /**
   * Convert a value to camel case.
   *
   * @returns string
   */
  public camel(): string {
    return this.value
      .toLowerCase()
      .replace(/\s/g, "")
      .replace(/[^a-zA-Z0-9]+(.)/g, (from: string, char: string) =>
        char.toUpperCase()
      );
  }
}
