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

  /**
   * Make a string's first character lowercase.
   *
   * @returns string
   */
  public lcfirst(): string {
    return this.value.charAt(0).toLowerCase() + this.value.slice(1);
  }

  /**
   * Make a string's first character uppercase.
   *
   * @returns string
   */
  public ucfirst(): string {
    return this.value.charAt(0).toUpperCase() + this.value.slice(1);
  }
}
