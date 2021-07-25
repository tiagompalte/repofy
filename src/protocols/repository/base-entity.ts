export interface BaseEntity<T> {
  id?: T
  ativo?: boolean
  dataInclusao?: Date
  dataAtualizacao?: Date
  versao?: number
}
