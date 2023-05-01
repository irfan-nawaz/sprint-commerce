import fetchCategories from '../backend/db/fetchCategories'
export default async function getCategories() {
  const {
    data: { categories },
  } = await fetchCategories('https://sprint/sprint-api/v1/categories')

  return 
}
