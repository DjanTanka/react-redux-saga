import { all } from 'redux-saga/effects'
import { getPeopleWatcher } from './people/getPeopleSaga'
import { removePeopleWatcher } from './people/removePeopleSaga'
import { getPlanetsWatcher } from './planets/getPlanetsSaga'
import { removePlanetsWatcher } from './planets/removePlanetsSaga'
import { removeWholeStateWatcher } from './state'

export default function* rootSaga() {
  yield all([
    getPeopleWatcher(),
    removePeopleWatcher(),
    getPlanetsWatcher(),
    removePlanetsWatcher(),
    removeWholeStateWatcher()
  ])
  //yield fork(watchClickSaga); так как fork не блокирует
  //и поведение приложения не изменится
}

  //take - блокирует выполнение саги, пока в приложении не случится какой-то экш("ClICK")
  //как только он случается, запустится workerSaga
  //call работает с промисами, call дожидается ответа от функции внутри него
  //через "," в call'e передаются параметр, ктр потом пойдет аргументом, в функцию 
  //ктр в указана в  call
  
  //put вызывает dispatch c переданным action и payload

  //yield fork(loadPeople)
  // yield fork(loadPlanet)

  //fork для параллельных асинхронных запросов. т.е. не блокирует и одновременно будут
  //загружаться и loadPeople и loadPlanet. а не ждать, когда загрузится один чтоб загрузить 2
  // в отличиe от call.Но у форк есть проблемы. если в одном из дочерних fork
  //возникнет ошибка, то заблокируется вся родительская сага и все другие дочерние эффекты
  //чтоб такого не происходило надо использовать spawn. В таком случае блокируется только одна эта
  //дочeрняя сага, остальные дочерние  и родительская - будут работать

  //join
 