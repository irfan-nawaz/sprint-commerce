export function filterCategory({ mens, womens, track }, products) {
  let sortedList = []
  if (mens === false) {
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
  sortedList = sortedList.concat(
    products.filter((item) => item.categoryName === 'mens'),
  ) 
  return sortedList
}
