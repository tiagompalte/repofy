export class RepositoryError extends Error {
  readonly cause: any
  constructor (message: string, error?: any) {
    super(message)
    this.name = 'RepositoryError'
    this.cause = error
  }
}
