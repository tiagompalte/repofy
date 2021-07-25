export interface ResultPaged<T> {
  content: T[]
  page: number
  totalElements: number
}
