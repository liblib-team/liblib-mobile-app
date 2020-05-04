import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_LIST_SUBJECTS } from '../actions/action-type'
import { SERVER_URL } from '../../auth'

const queryListSubjects = () => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'subject/list', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryListSubjects(request) {
  try {
    const data = yield call(queryListSubjects)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.log(error)
  }
}

export function* watchQueryListSubjects() {
  yield takeLatest(GET_LIST_SUBJECTS, doQueryListSubjects)
}
