import 
export default async function getCategories() {
  const {
    status,
    data: { categories },
  } = await fetchCategories('https://sprint/sprint-api/v1/categories')
  console.log('this is a catogeries list')
  if (status === 200) {
    return categories
  } else {
    return 'no data available'
  }
}
