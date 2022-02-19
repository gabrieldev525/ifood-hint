// Third party
import { all, put, takeLatest } from 'redux-saga/effects'

// Local
import { ProductTypes } from './types'
import { fetchProducts } from './action'

function* fetchProductsSaga({ payload }: ReturnType<typeof fetchProducts>) {
  yield put({
    type: ProductTypes.FETCH_PRODUCT_SUCCESS,
    payload
  })
}

export default all([
  takeLatest(ProductTypes.FETCH_PRODUCT, fetchProductsSaga)
]);