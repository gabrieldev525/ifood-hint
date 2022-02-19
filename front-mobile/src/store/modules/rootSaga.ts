// Third party
import { all } from 'redux-saga/effects'

// Local
import products from './product/sagas'

export default function* rootSaga() {
  return yield all([
    products
  ])
}