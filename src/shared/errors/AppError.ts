class AppError {
  public readonly statusCode: number;

  public readonly body: string;

  constructor(body: string, statusCode = 400) {
    this.body = body;
    this.statusCode = statusCode;
  }
}

export default AppError;
