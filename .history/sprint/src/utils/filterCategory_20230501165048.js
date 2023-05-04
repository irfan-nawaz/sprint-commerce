export function filterCategory({ mens }, products) {
  let sortedList = []
  if (mens === false) {
    sortedList = [...products]
  }
  if (mens) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'mens'),
    ) 
  }
  return sortedList
}
