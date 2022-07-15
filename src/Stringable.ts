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
}
