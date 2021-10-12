const initialState = {
  auto: [],
  status: 'EMPTY'
}

export default function autoReducer(state = initialState, action) {
  console.log('---action.payload', action.payload)

  switch (action.type) {
    case "LOAD_AUTO":
    return {...state, auto: [...state.auto, action.payload], status: 'SUCCESS'}

    case "AUTO_FAILED":
    return {...state, status: 'FAILED'}
      
    default:
    break;
  }
  return state;
}