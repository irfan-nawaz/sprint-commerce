const initialState = {
  mens: false,
}
const MENS = 'mens'
const filterReducer = (state, action) => {
  switch (action.type) {
    case HIGH_TO_LOW:
      return { ...state, sortBy: 'HIGH_TO_LOW' }
    case JERSEY:
      return { ...state, jersey: !state.jersey }
    case BOOTS:
      return { ...state, boots: !state.boots }
    case SNEAKERS:
      return { ...state, sneakers: !state.sneakers }
    case FOOTBALL:
      return { ...state, football: !state.football }
    case PRICE:
      return { ...state, price: action.payload }
    case RATING:
      return { ...state, rating: action.payload }
    case LOW_TO_HIGH:
      return { ...state, sortBy: 'LOW_TO_HIGH' }
    default:
      return state
  }
}

export { initialState, filterReducer }
