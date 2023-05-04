export function filterCategory({ mens, womens }, products) {
  let sortedList = []
  if (mens === false && womens === false) {
    sortedList = [...products]
  }
  if (mens) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'mens'),
    )
  }
  return sortedList
}
