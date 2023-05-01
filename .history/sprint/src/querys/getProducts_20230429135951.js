export default async function getProducts() {
  const data = await fetch(``)
  const json = await data.json()
  return json.animals
}
