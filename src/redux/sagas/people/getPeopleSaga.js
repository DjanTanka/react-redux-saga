import { call, put, takeEvery } from '@redux-saga/core/effects';
import getInfoSwapi from '../../../utils/getInfoSwapi'

//бизнес логика приложений(запросы и др. ассинхронные действия)
export function* getPeopleWorker() {
  
  try {
    yield put({type: "SEARCH_PEOPLE"});
    const dataPeople = yield call(getInfoSwapi, 'people');
    yield put({type: "LOAD_PEOPLE" , payload: dataPeople.results});
    yield put({type: "SEARCH_SUCCESS_PEOPLE"});
  }
  catch {
    yield put({type: "SEARCH_FAILED_PEOPLE" });
  }
  

}
// в вотчере описываем какие экшены будут происходить в приложении 
//и за ктр следим
export function* getPeopleWatcher() {
  yield takeEvery('GET_PEOPLE_startSaga', getPeopleWorker)
}  