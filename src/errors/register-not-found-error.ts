import { RepositoryError } from './repository-error'

export class RegisterNotFoundError extends RepositoryError {
  constructor (message?: string, error?: any) {
    super(message || 'Register not found', error)
  }
}
