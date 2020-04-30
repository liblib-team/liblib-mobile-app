import { call, put, takeLatest } from 'redux-saga/effects'
import { Toast } from 'native-base'
import { GET_TOP_VIEW_BOOK } from '../actions/action-type'

const queryTopViewBook = () => {
  return [
    {
      id: '1',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/phan-tich-chung-khoan-outline-26.jpg?v=1521167573353',
      title: 'Memory',
      author: 'Alexander',
    },
    {
      id: '2',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/thuat-doc-tam.png?v=1568685712587',
      title: 'About yourself',
      author: 'Alexander',
    },
    {
      id: '3',
      uri:
        'https://bizweb.dktcdn.net/100/197/269/products/buoi-sang-dieu-ky-danh-cho-nha-ban-hang-01.jpg?v=1561185496810',
      title: 'Its',
      author: 'Alexander',
    },
  ]
}

function* doQueryTopViewBook(request) {
  try {
    const data = yield call(queryTopViewBook)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    Toast.show({
      text: error,
      type: 'danger',
    })
  }
}

export function* watchQueryTopViewBook() {
  yield takeLatest(GET_TOP_VIEW_BOOK, doQueryTopViewBook)
}
