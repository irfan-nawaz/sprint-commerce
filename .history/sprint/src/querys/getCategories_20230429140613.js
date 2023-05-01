export default async function getProducts() {
    const data = await fetchCategories
    const json = await data.json()
    return json.animals
  }
  