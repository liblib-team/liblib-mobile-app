import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { popularBooksReducer } from './popularBooks.reducer'

const reducer = combineReducers({
  auth: authReducer,
  popularBooks: popularBooksReducer,
})

export default reducer
