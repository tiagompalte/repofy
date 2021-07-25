import { BaseEntity } from '../../../protocols'

export interface Test extends BaseEntity<string> {
  nome?: string
  ordem?: number
  data?: Date
}
