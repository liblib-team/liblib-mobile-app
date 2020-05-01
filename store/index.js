import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'

import reducer from '../redux-saga/reducers/root'
import rootSaga from '../redux-saga/sagas/root'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(middleware))

sagaMiddleware.run(rootSaga)

export default store
