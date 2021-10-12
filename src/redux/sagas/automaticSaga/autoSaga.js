import { call, put } from '@redux-saga/core/effects';


//бизнес логика приложений(запросы и др. ассинхронные действия)
export function* autoWorker() {
  try {
    const respons = yield call(fetch, 'http://swapi.dev/api/people/1')
    const data = yield call([respons, respons.json])
    yield put({type: "LOAD_AUTO", payload: data})
  }
  catch {
    yield put({type: "AUTO_FAILED" });
  }
}

export function* autoWatcher() {
  yield  autoWorker()
}  