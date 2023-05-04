const initialState = {
  mens: false,
}
const MENS = 'mens'
const filterReducer = (state, action) => {
  switch (action.type) {
    case MENS:
      return { ...state, sortBy: 'HIGH_TO_LOW' }
    default:
      return state
  }
}

export { initialState, filterReducer }
