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
   * Return the remainder of a string after the first occurrence of a given value.
   *
   * @param search string
   * @returns string
   */
  public after(search = ""): string {
    return search === ""
      ? this.value
      : this.value.split(search)[1] != undefined
      ? this.value.split(search)[1]
      : this.value;
  }

  /**
   * Return the remainder of a string after the last occurrence of a given value.
   *
   * @param search string
   * @returns string
   */
  public afterLast(search = ""): string {
    if (search === "") return this.value;

    return this.value.substring(this.value.lastIndexOf(search) + 1);
  }

  /**
   * Get the portion of a string before the first occurrence of a given value.
   *
   * @param search string
   * @returns string
   */
  public before(search = ""): string {
    return search === ""
      ? this.value
      : this.value.split(search)[0] != undefined
      ? this.value.split(search)[0]
      : this.value;
  }

  /**
   * Get the portion of a string before the last occurrence of a given value.
   *
   * @param search string
   * @returns string
   */
  public beforeLast(search = ""): string {
    if (search === "") return this.value;

    return this.value.substring(0, this.value.lastIndexOf(search));
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
   * Convert the given string to lower-case.
   *
   * @returns string
   */
  public lower(): string {
    return this.value.toLowerCase();
  }

  /**
   * Remove any occurrence of the given string in the subject.
   *
   * @param search string
   * @param caseSensitive boolean
   * @returns string
   */
  public remove(search: string, caseSensitive = true): string {
    if (caseSensitive) return this.value.replace(search, "");

    return this.value.replace(new RegExp(search, "ig"), "");
  }

  /**
   * Reverse the given string.
   *
   * @returns string
   */
  public reverse(): string {
    return this.value.split("").reverse().join("");
  }

  /**
   * Make a string's first character uppercase.
   *
   * @returns string
   */
  public ucfirst(): string {
    return this.value.charAt(0).toUpperCase() + this.value.slice(1);
  }

  /**
   * Convert the given string to upper-case.
   *
   * @returns string
   */
  public upper(): string {
    return this.value.toUpperCase();
  }
}
