import { RepositoryError } from './repository-error'

export class ValidationError extends RepositoryError {
  constructor (message: string, error?: any) {
    super(message, error)
    this.name = 'ValidationError'
  }
}
