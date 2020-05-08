import { all } from 'redux-saga/effects'

import { watchLogin } from './auth.saga'
import {
  watchQueryPopularBook,
  watchQueryHotBooks,
  watchQueryBooksBySubject,
} from './booksCollection.saga'
import { watchQueryListSubjects } from './subject.saga'
import { watchQueryBookDetail } from './bookDetail.saga'
import { watchQueryGetRatingBook, watchQueryPostRatingBook } from './rating-book.saga'
import { watchQueryRelevanceBooks } from './relevanceBooks.saga'
import { watchQueryBooksSameAuthors } from './booksSameAuthors.saga'

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchQueryPopularBook(),
    watchQueryHotBooks(),
    watchQueryListSubjects(),
    watchQueryBooksBySubject(),
    watchQueryBookDetail(),
    watchQueryGetRatingBook(),
    watchQueryPostRatingBook(),
    watchQueryRelevanceBooks(),
    watchQueryBooksSameAuthors(),
  ])
}
