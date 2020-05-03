import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { popularBooksReducer } from './popularBooks.reducer'
import { listSubjects } from './subject.reducer'

const reducer = combineReducers({
  auth: authReducer,
  popularBooks: popularBooksReducer,
  hotBooks: popularBooksReducer,
  listSubjects: listSubjects,
})

export default reducer
