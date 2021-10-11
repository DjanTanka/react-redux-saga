import { put, takeEvery } from "@redux-saga/core/effects"

export function* removePlanetsWorker() {
  yield put({type: "CLEAN_PLANETS" })
}

export function* removePlanetsWatcher() {
  yield takeEvery('REMOVE_PLANETS_startSaga', removePlanetsWorker )
}  