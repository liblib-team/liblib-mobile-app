import { all } from 'redux-saga/effects'

import { watchLogin } from './auth.saga'
import {
  watchQueryPopularBook,
  watchQueryHotBooks,
  watchQueryBooksBySubject,
} from './booksCollection.saga'
import { watchQueryListSubjects } from './subject.saga'
import { watchQueryBookDetail } from './bookDetail.saga'

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchQueryPopularBook(),
    watchQueryHotBooks(),
    watchQueryListSubjects(),
    watchQueryBooksBySubject(),
    watchQueryBookDetail(),
  ])
}
