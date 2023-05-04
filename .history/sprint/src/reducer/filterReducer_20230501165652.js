const initialState = {
  mens: false,
  womens: false,
  track: false,
}
const MENS = 'mens'
const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case MENS:
      return { ...state, mens: !state.mens }
    default:
      return state
  }
}

export { initialState, filterReducer }
