import { ResultPaged } from './result-paged'
import { BaseEntity } from './base-entity'
import { Filter } from '../filter/filter'
import { Sort } from './sort'

export interface Repository<U, T extends BaseEntity<U>> {
  fieldId(): string
  fieldVersion(): string
  fieldCreatedAt(): string
  fieldUpdatedAt(): string
  fieldActive(): string
  find(filter?: Filter, populate?: string | string[], sort?: Sort | Sort[], includeAll?: boolean): Promise<T[]>
  findOne(filter?: Filter, populate?: string | string[], sort?: Sort | Sort[], includeAll?: boolean): Promise<T>
  findById(id: U, populate?: string | string[], includeAll?: boolean): Promise<T>
  paged(first?: number, pageSize?: number, filter?: Filter, populate?: string | string[], sort?: Sort | Sort[], includeAll?: boolean): Promise<ResultPaged<T>>
  insert(doc: T, populate?: string | string[]): Promise<T>
  insertMany(docs: T[], populate?: string | string[]): Promise<T[]>
  update(id: U, doc: T, populate?: string | string[], includeAll?: boolean): Promise<T>
  updateMany(filter: Filter, doc: T, populate?: string | string[], includeAll?: boolean): Promise<T[]>
  delete(id: U, includeAll?: boolean): Promise<void>
  deleteMany(filter?: Filter, includeAll?: boolean): Promise<void>
  exists(filter?: Filter, includeAll?: boolean): Promise<boolean>
  upsert(doc: T, filter?: Filter, populate?: string | string[], includeAll?: boolean): Promise<T>
  count(filter?: Filter, includeAll?: boolean): Promise<number>
  logicDelete(id: U): Promise<void>
  logicActive(id: U): Promise<void>
}
