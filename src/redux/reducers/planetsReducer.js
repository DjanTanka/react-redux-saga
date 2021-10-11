const initialState = {
  planets: [],
  statusPlanets: 'EMPTY'
}

export default function planetsReducer(state = initialState, action) {

  switch (action.type) {
   
    case "LOAD_PLANETS":
    return {...state, planets: [...action.payload]}

    case "CLEAN_PLANETS":
    return {...state, planets: [], statusPlanets: 'EMPTY'}

    case "SEARCH_PLANETS":
    return {...state, statusPlanets: 'SEARHING' }

    case "SEARCH_SUCCESS_PLANETS":
    return {...state, statusPlanets: 'SUCCESS' }

    case "SEARCH_FAILED_PLANETS":
    return {...state, statusPlanets: 'FAILED' }
    
    default:
    break;
  }
  return state;
}