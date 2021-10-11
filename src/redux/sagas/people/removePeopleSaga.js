import { put, takeEvery } from "@redux-saga/core/effects"

export function* removePeopleWorker() {
  yield put({type: "CLEAN_PEOPLE" })
}

export function* removePeopleWatcher() {
  yield takeEvery('REMOVE_PEOPLE_startSaga', removePeopleWorker )
}  