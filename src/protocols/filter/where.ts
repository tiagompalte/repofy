import { LogicalOperatorEnum } from './logical-operator-enum'
import { Comparator } from './comparator'

export interface Where {
  operator: LogicalOperatorEnum
  comparator: Comparator | Comparator[]
}
