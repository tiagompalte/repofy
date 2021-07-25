import { RepositoryError } from './repository-error'

export class VersionRepositoryError extends RepositoryError {
  constructor (message: string, error?: any) {
    super(message, error)
    this.name = 'VersionRepositoryError'
  }
}
