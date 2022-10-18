class HttpError extends Error {
  status = 0;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default HttpError;
