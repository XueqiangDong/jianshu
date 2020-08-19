import { takeEvery, put } from 'redux-saga/effects'
import { GET_TODO_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from "./actionCreator"

function* getTodoList() {
  try {
    let res = yield axios.get('http://localhost:3001/list')
    let action = initListAction(res.data)
    yield put(action)
  } catch (e) {
    //
  }

}

function* todoSagas() {
  yield takeEvery(GET_TODO_LIST, getTodoList);
}

export default todoSagas