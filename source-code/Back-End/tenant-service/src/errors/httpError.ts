interface HttpErrorOptions {
  stack?: string;
  message: string;
  code?: string;
  details?: string;
  statusCode?: number;
}
/**
 * Custom HTTP Error class that extends the built-in `Error` class.
 *
 * This class is used to represent errors in an Express application that contain additional information
 * like HTTP status code, error details, and stack trace. It is helpful for structured error handling
 * and responding to clients with meaningful error messages.
 *
 * @extends {Error}
 */
export class HttpError extends Error {
  public stack?: string;
  public code?: string;
  public statusCode?: number;
  public details?: string;

  /**
   * Constructs an instance of the `HttpError` class.
   *
   * Custom HTTP Error class that extends the built-in `Error` class.
   *
   * This class is used to represent errors in an Express application that contain additional information
   * like HTTP status code, error details, and stack trace. It is helpful for structured error handling
   * and responding to clients with meaningful error messages.
   *
   * @param {HttpErrorOptions} options - The options for the HttpError, including message, status code, stack, and details.
   * @param {string} options.message - The error message to describe the error.
   * @param {string} [options.stack] - Optional stack trace for debugging purposes.
   * @param {string} [options.details] - Optional additional details about the error.
   * @param {number} options.statusCode - The HTTP status code representing the type of error (e.g., 400 for Bad Request, 500 for Internal Server Error).
   */
  constructor({ message, stack, code, statusCode, details }: HttpErrorOptions) {
    super(message); // Use `super` to pass the error message to the parent Error class
    this.statusCode = statusCode;
    this.details = details;
    this.code = code;
    this.stack = stack;
  }
}
