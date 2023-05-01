import { fetchCategories } from '../backend/db/categories'
export default async function getCategories() {
  const {
    status,
    data: { categories },
  } = await fetchCategories('https://sprint/sprint-api/v1/categories')
  if (status === 200) {
    return categories
  } else {
    return 'no data available'
  }
}
