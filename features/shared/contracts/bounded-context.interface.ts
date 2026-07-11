export interface BoundedContext {
  /**
   * Unique domain identifier.
   * Example: "projects", "tasks", "knowledge".
   */
  readonly name: string;

  /**
   * Human-readable domain name.
   */
  readonly displayName: string;

  /**
   * Domain version.
   */
  readonly version: string;
}