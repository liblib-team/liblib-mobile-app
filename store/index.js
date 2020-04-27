import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, compose } from 'redux'
import devToolsEnhancer from 'redux-devtools-extension'

import reducer from '../reducers/root'
import rootSaga from '../sagas/root'

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(middleware))

sagaMiddleware.run(rootSaga)

export default store
