import 
export default async function getProducts() {
  const data = await fetchCategories('https://sprint/sprint-api/v1/categories')
  const json = await data.json()
  return json.animals
}
