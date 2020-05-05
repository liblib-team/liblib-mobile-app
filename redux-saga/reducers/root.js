import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { booksBySubjectReducer } from './booksBySubject.reducer'
import { listSubjects } from './subject.reducer'
import { bookDetailReducer } from './bookDetail.reducer'
import { hotBooksReducer } from './hotBooks.reducer'
import { popularBooksReducer } from './popularBooks.reducer'

const reducer = combineReducers({
  auth: authReducer,
  listSubjects: listSubjects,
  bookDetail: bookDetailReducer,
  booksBySubject: booksBySubjectReducer,
  hotBooks: hotBooksReducer,
  popularBooks: popularBooksReducer,
})

export default reducer
