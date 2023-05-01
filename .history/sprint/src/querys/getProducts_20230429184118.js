export default async function getProducts() {
  const data = await fetch(`https://sprint/sprint-api/v1/products`)
  const json = await data.json()
  return json.animals
}

import fetchCategories from '../backend/db/fetchCategories'
export default async function getProducts() {
  const {
    data: { categories },
  } = await fetchCategories('https://sprint/sprint-api/v1/product')

  return categories
}
