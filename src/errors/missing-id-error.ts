import { RepositoryError } from './repository-error'

export class MissingIdError extends RepositoryError {
  constructor (message?: string, error?: any) {
    super(message || 'Missing identifier', error)
  }
}
