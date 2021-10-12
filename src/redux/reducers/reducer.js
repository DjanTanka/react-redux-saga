import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import planetsReducer from './planetsReducer'
import autoReducer from './autoReducer'

export default combineReducers({
  peopleReducer,
  planetsReducer,
  autoReducer
})
