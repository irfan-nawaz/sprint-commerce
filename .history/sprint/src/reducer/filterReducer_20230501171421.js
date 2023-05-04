const initialState = {
  mens: false,
  womens: false,
  track: false,
}
const MENS = 'mens'
const WOMENS = 'womesn'
const filterReducer = (state, action) => {
  console.log(state, action)
  switch (action.type) {
    case MENS:
      return { ...state, mens: !state.mens }
      case WOMENS:
        return 
    default:
      return state
  }
}

export { initialState, filterReducer }
