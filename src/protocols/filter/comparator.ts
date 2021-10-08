import { ComparatorOperatorEnum } from './comparator-operator-enum'
import { OptionsFilter } from './options-filter'

interface OptionsComparator extends OptionsFilter {
  regex?: string
}

export class Comparator {
  private constructor (
    private readonly _operator: ComparatorOperatorEnum,
    private readonly _key: string,
    private readonly _value: any | any[],
    private readonly _options?: OptionsComparator
  ) { }

  get operator (): ComparatorOperatorEnum {
    return this._operator
  }

  get key (): string {
    return this._key
  }

  get value (): any {
    return this._value
  }

  get values (): any[] {
    if (Array.isArray(this._value)) {
      return this._value
    } else {
      return [this._value]
    }
  }

  getValueIndex (index: number): any {
    if (Array.isArray(this._value)) {
      return this._value[index]
    }
    return this._value
  }

  get options (): OptionsComparator {
    return this._options
  }

  private static readonly builder = (operator: ComparatorOperatorEnum, key: string, value: any | any[], options?: OptionsComparator): Comparator => {
    return new Comparator(operator, key, value, options)
  }

  static eq = (key: string, value: any, options?: OptionsFilter): Comparator => Comparator.builder(ComparatorOperatorEnum.EQ, key, value, options)

  static neq = (key: string, value: any, options?: OptionsFilter): Comparator => Comparator.builder(ComparatorOperatorEnum.NEQ, key, value, options)

  static eqId = (value: any): Comparator => Comparator.builder(ComparatorOperatorEnum.EQ_ID, null, value)

  static neqId = (value: any): Comparator => Comparator.builder(ComparatorOperatorEnum.NEQ_ID, null, value)

  static gt = (key: string, value: any): Comparator => Comparator.builder(ComparatorOperatorEnum.GT, key, value)

  static gte = (key: string, value: any): Comparator => Comparator.builder(ComparatorOperatorEnum.GTE, key, value)

  static lt = (key: string, value: any): Comparator => Comparator.builder(ComparatorOperatorEnum.LT, key, value)

  static between = (key: string, start: any, end: any): Comparator => Comparator.builder(ComparatorOperatorEnum.BETWEEN, key, [start, end])

  static lte = (key: string, value: any): Comparator => Comparator.builder(ComparatorOperatorEnum.LTE, key, value)

  static in = (key: string, value: any[], options?: OptionsFilter): Comparator => Comparator.builder(ComparatorOperatorEnum.IN, key, value, options)

  static inId = (value: any[]): Comparator => Comparator.builder(ComparatorOperatorEnum.IN_ID, null, value)

  static nin = (key: string, value: any[]): Comparator => Comparator.builder(ComparatorOperatorEnum.NIN, key, value)

  static exists = (key: string, value: boolean): Comparator => Comparator.builder(ComparatorOperatorEnum.EXISTS, key, value)

  static regex = (key: string, value: any, regex: string): Comparator => Comparator.builder(ComparatorOperatorEnum.REGEX, key, value, { regex })

  static and = (comparators: Comparator | Comparator[]): Comparator => Comparator.builder(ComparatorOperatorEnum.OP_AND, null, comparators)

  static not = (comparators: Comparator | Comparator[]): Comparator => Comparator.builder(ComparatorOperatorEnum.OP_NOT, null, comparators)

  static nor = (comparators: Comparator | Comparator[]): Comparator => Comparator.builder(ComparatorOperatorEnum.OP_NOR, null, comparators)

  static or = (comparators: Comparator | Comparator[]): Comparator => Comparator.builder(ComparatorOperatorEnum.OP_OR, null, comparators)
}
