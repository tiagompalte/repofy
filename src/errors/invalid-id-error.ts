import { RepositoryError } from './repository-error'

export class InvalidIdError extends RepositoryError {
  constructor (message?: string, error?: any) {
    super(message || 'Invalid identifier', error)
    this.name = 'InvalidIdError'
  }
}
