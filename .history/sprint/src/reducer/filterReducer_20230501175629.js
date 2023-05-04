const initialState = {
  mens: false,
  womens: false,
  track: false,
}
const MENS = 'mens'
const WOMENS = 'womens'
const TRACK = 'track'
const RESET = 'reset'
const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case MENS:
      return { ...state, mens: !state.mens }
    case WOMENS:
      return { ...state, womens: !state.womens }
    case TRACK:
      return { ...state, track: !state.track }
      case RESET:
        return 
    default:
      return state
  }
}

export { initialState, filterReducer }
