const filterReducer = (state, action) => {
  switch (action) {
    case 'mens':
      return state.filter((i) => i.categoryName === 'mens')
    default:
      return state
  }
}

export default filterReducer
