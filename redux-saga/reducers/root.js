import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { topViewBooksReducer } from './topViewBooks.reducer'

const reducer = combineReducers({
  auth: authReducer,
  topViewBooks: topViewBooksReducer,
})

export default reducer
