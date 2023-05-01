import fet
export default async function getProducts() {
  const {
    data: { categories },
  } = await fetchCategories('https://sprint/sprint-api/v1/product')

  return categories
}
