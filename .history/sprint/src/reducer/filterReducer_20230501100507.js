const filterReducer = (state, action) => {
  console.log(state)
  switch (action) {
    case 'mens':
      return state.filter((i) => i.categoryName === 'mens')
    default:
      return state
  }
}

export default filterReducer
