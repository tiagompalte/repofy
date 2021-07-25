import { Where } from './where'
import { Comparator } from './comparator'
import { LogicalOperatorEnum } from './logical-operator-enum'

export class Filter {
  private readonly _command: Where[]
  constructor () {
    this._command = []
  }

  get command (): Where[] {
    return this._command
  }

  private addCommand (comparator: Comparator | Comparator[], operator: LogicalOperatorEnum): void {
    this._command.push({ comparator, operator })
  }

  and (comparator: Comparator | Comparator[]): Filter {
    this.addCommand(comparator, LogicalOperatorEnum.AND)
    return this
  }

  or (comparator: Comparator | Comparator[]): Filter {
    this.addCommand(comparator, LogicalOperatorEnum.OR)
    return this
  }

  not (comparator: Comparator): Filter {
    this.addCommand(comparator, LogicalOperatorEnum.NOT)
    return this
  }

  nor (comparator: Comparator | Comparator[]): Filter {
    this.addCommand(comparator, LogicalOperatorEnum.NOR)
    return this
  }
}
