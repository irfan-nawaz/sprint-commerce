export function filterCategory({ mens, womens, track }, products) {
  let sortedList = []
  if (mens === false && womens && track) {
    sortedList = [...products]
  }
  if (mens) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'mens'),
    )
  }
  if (womens) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'womens'),
    )
  }
  if (track) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'track'),
    )
  }
  return sortedList
}
