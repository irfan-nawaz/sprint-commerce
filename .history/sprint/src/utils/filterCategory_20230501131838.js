export function getCategory({ mens, womens }, products) {
  let sortedList = []
  if (mens === false && womens === false) {
    sortedList = [...products]
  }
  if (jersey) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'jersey'),
    )
  }
  if (football) {
    sortedList = sortedList.concat(
      products.filter((item) => item.categoryName === 'football'),
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
