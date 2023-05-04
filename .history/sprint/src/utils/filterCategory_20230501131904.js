export function getCategory({ mens, womens }, products) {
  let sortedList = []
  if (mens === false && womens === false) {
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
  if (sneakers) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'sneakers'),
    )
  }
  if (boots) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'boots'),
    )
  }

  return sortedList
}
