// Local
import { ProductTypes } from './types'

export const fetchProducts = () => ({
  type: ProductTypes.FETCH_PRODUCT,
  payload: {
    test: 'test'
  }
})