const initialState = {
  people: [],
  statusPeople: 'EMPTY',
}

export default function peopleReducer(state = initialState, action) {

  switch (action.type) {
    case "LOAD_PEOPLE":
    return {...state, people: [...action.payload]}

    case "CLEAN_PEOPLE":
    return {...state, people: [], statusPeople: 'EMPTY' }

    case "SEARCH_PEOPLE":
    return {...state, statusPeople: 'SEARHING' }

    case "SEARCH_SUCCESS_PEOPLE":
    return {...state, statusPeople: 'SUCCESS' }

    case "SEARCH_FAILED_PEOPLE":
    return {...state, statusPeople: 'FAILED' }
      
    default:
    break;
  }
  return state;
}