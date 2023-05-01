export default async function getAnimals() {
    const data = await fetch(`http://pets-v2.dev-apis.com/animals`)
    const json = await data.json()
    return json.animals
  }
  