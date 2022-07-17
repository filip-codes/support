import { Stringable } from "./Stringable";

export class Str {
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
