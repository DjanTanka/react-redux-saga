const initialState = {
  people: [],
  planets: [] 
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "LOAD_PEOPLE":
    return {...state, people: [...action.payload]}

    case "LOAD_PLANETS":
    return {...state, planets: [...action.payload]}

    case "CLEAN_STORE":
      return {...state, people: [] , planets: []}
    
    default:
    break;
  }
  return state;
}