import { Stringable } from "./Stringable";

export class Str {
  /**
   * Return the remainder of a string after the first occurrence of a given value.
   *
   * @param subject string
   * @param search string
   * @returns string
   */
  public static after(subject: string, search = ""): string {
    return new Stringable(subject).after(search);
  }

  /**
   * Return the remainder of a string after the last occurrence of a given value.
   *
   * @param subject string
   * @param search string
   * @returns string
   */
  public static afterLast(subject: string, search = ""): string {
    return new Stringable(subject).afterLast(search);
  }

  /**
   * Get the portion of a string before the first occurrence of a given value.
   *
   * @param subject string
   * @param search string
   * @returns string
   */
  public static before(subject: string, search = ""): string {
    return new Stringable(subject).before(search);
  }

  /**
   * Get the portion of a string before the last occurrence of a given value.
   *
   * @param subject string
   * @param search string
   * @returns string
   */
  public static beforeLast(subject: string, search = ""): string {
    return new Stringable(subject).beforeLast(search);
  }

  /**
   * Get the portion of a string between two given values.
   *
   * @param subject string
   * @param from string
   * @param to string
   * @returns string
   */
  public static between(subject: string, from = "", to = ""): string {
    if (from === "" || to === "") return subject;

    return this.beforeLast(this.after(subject, from), to);
  }

  /**
   * Get the smallest possible portion of a string between two given values.
   *
   * @param subject string
   * @param from string
   * @param to string
   * @returns string
   */
  public static betweenFirst(subject: string, from = "", to = ""): string {
    if (from === "" || to === "") return subject;

    return this.before(this.after(subject, from), to);
  }

  /**
   * Get a new stringable object from the given string.
   *
   * @param string string
   * @returns Stringable
   */
  public static of(string: string): Stringable {
    return new Stringable(string);
  }

  /**
   * Convert a value to camel case.
   *
   * @param string string
   * @returns string
   */
  public static camel(string: string): string {
    return new Stringable(string).camel();
  }

  /**
   * Determine if a given string contains a given substring.
   *
   * @param value string
   * @param needles string | string[]
   * @returns boolean
   */
  public static contains(value: string, needles: string | string[]): boolean {
    return new Stringable(value).contains(needles);
  }

  /**
   * Make a string's first character lowercase.
   *
   * @param string string
   * @returns string
   */
  public static lcfirst(string: string): string {
    return new Stringable(string).lcfirst();
  }

  /**
   * Convert the given string to lower-case.
   *
   * @param string string
   * @returns string
   */
  public static lower(string: string): string {
    return new Stringable(string).lower();
  }

  /**
   * Remove any occurrence of the given string in the subject.
   *
   * @param search string
   * @param string string
   * @param caseSensitive boolean
   * @returns string
   */
  public static remove(
    search: string,
    string: string,
    caseSensitive = true
  ): string {
    return new Stringable(string).remove(search, caseSensitive);
  }

  /**
   * Reverse the given string.
   *
   * @param value string
   * @returns string
   */
  public static reverse(value: string) {
    return new Stringable(value).reverse();
  }

  /**
   * Make a string's first character uppercase.
   *
   * @param string string
   * @returns string
   */
  public static ucfirst(string: string): string {
    return new Stringable(string).ucfirst();
  }

  /**
   * Convert the given string to upper-case.
   *
   * @param string string
   * @returns string
   */
  public static upper(string: string): string {
    return new Stringable(string).upper();
  }
}
