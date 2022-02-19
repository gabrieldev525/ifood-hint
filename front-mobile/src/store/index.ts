// third party
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// local
import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'


const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware
]

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
)

sagaMiddleware.run(rootSaga)

export default store