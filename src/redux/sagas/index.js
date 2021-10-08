import { call, fork, put, spawn, takeEvery } from 'redux-saga/effects'

//бизнес логика приложений(запросы и др. ассинхронные действия)


export function* workerSaga() {

  const getInfoSwapi = async (type) => {
    console.log('---type', type)
    let response = await fetch(`http://swapi.dev/api/${type}`)
    const data = await response.json()
    return data
  }

  function* loadPeople () {
    // throw new Error(); 
    const dataPeople = yield call(getInfoSwapi, 'people');
    yield put({type: "LOAD_PEOPLE" , payload: dataPeople.results});
  } 

  function* loadPlanet () {
    const dataPlanets = yield call(getInfoSwapi, 'planets');
    yield put({type: "LOAD_PLANETS" , payload: dataPlanets.results})
  } 

  yield spawn(loadPeople)
  yield fork(loadPlanet)
}

export function* workerCleanSaga () {
  yield put({type: "CLEAN_STORE" });
}

// в вотчере описываем какие экшены будут происходить в приложении 
//и за ктр следим
export function* watchClickSaga() {
  yield takeEvery('CLICK_LOAD_startSaga', workerSaga )
  yield takeEvery('CLICK_CLEAN_startSaga', workerCleanSaga);
}  

export default function* rootSaga() {
  yield watchClickSaga();
  //yield fork(watchClickSaga); так как fork не блокирует
  //и поведение приложения не изменится
}

  //take - блокирует выполнение саги, пока в приложении не случится какой-то экш("ClICK")
  //как только он случается, запустится workerSaga
  //call работает с промисами, call дожидается ответа от функции внутри него
  //через "," в call'e передаются параметр, ктр потом пойдет аргументом, в функцию 
  //ктр в указана в  call
  
  //put вызывает dispatch c переданным action и payload

  //fork для параллельных асинхронных запросов. т.е. не блокирует и одновременно будут
  //загружаться и loadPeople и loadPlanet. а не ждать, когда загрузиться один чтоб загрузит 2
  // в отличиe от call.Но у форк есть проблемы. если в одном из дочерних fork
  //возникнет ошибка, то заблокируется вся родительская сага и все другие дочерние эффекты
  //чтоб такого не происходило надо использовать spawn. В таком случае блокируется только одна эта
  //дочрняя сага, остольные дочерние  и родительская - будут работать

  //join
 