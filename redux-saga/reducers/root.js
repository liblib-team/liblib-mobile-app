import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { booksCollectionReducer } from './booksCollection.reducer'
import { listSubjects } from './subject.reducer'
import { bookDetailReducer } from './bookDetail.reducer'

const reducer = combineReducers({
  auth: authReducer,
  popularBooks: booksCollectionReducer,
  hotBooks: booksCollectionReducer,
  listSubjects: listSubjects,
  booksBySubject: booksCollectionReducer,
  bookDetail: bookDetailReducer,
})

export default reducer
