import { call, put, takeEvery } from '@redux-saga/core/effects';
import getInfoSwapi from '../../../utils/getInfoSwapi'

export function* getPlanetsWorker() {
  yield put({type: "SEARCH_PLANETS"});
  try {
    const dataPlanets = yield call(getInfoSwapi, 'planets');
    yield put({type: "LOAD_PLANETS" , payload: dataPlanets.results});
    yield put({type: "SEARCH_SUCCESS_PLANETS"});

  } catch {
    yield put({type: "SEARCH_FAILED_PLANETS" });
  }

}

export function* getPlanetsWatcher() {
  yield takeEvery('GET_PLANETS_startSaga', getPlanetsWorker)
}  