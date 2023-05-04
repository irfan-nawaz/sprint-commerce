const initialState = {
  mens: false,
  womens: false,
  track: false,
}
const MENS = 'mens'
const WOMENS = 'womens'
const TRACK = 'track'
const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case MENS:
      return { ...state, mens: !state.mens }
    case WOMENS:
      return { ...state, WOMENS: !state.womens }
    default:
      return state
  }
}

export { initialState, filterReducer }
