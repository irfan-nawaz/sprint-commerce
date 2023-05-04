const initialState = {
  mens: false,
}
const MENS = 'mens'
const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case MENS:
      return { ...state, sortBy: !state.mens }
    default:
      return state
  }
}

export { initialState, filterReducer }
