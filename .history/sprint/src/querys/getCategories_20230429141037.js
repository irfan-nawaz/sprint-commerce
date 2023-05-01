import { fetchCategories } from '../backend/db/categories'
export default async function getCategories() {
  const data = await fetchCategories('https://sprint/sprint-api/v1/categories')
  const json = await data.json()
  console.log(json)
}
