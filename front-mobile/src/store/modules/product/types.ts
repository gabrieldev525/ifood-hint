export enum ProductTypes {
  FETCH_PRODUCT = 'FETCH_PRODUCT',
  FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
}

export interface IProduct {
  name: string,
  description: string,
  test?: string
}