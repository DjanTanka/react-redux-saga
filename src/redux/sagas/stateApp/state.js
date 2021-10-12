import { put, takeEvery } from "@redux-saga/core/effects"

export function* removeWholeStateWorker() {
  yield put({type: "CLEAN_PEOPLE" })
  yield put({type: "CLEAN_PLANETS" })
}

export function* removeWholeStateWatcher() {
  yield takeEvery('REMOVE_WHOLE_STATE_startSaga', removeWholeStateWorker)
}  