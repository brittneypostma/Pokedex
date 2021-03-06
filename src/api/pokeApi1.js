export const getPokemon1 = async () => {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
    const data = await res.json()
    return Promise.all(
      data.results.map(async pokemon => {
        const result = await fetchPokemon(pokemon)
        return result
      })
    )
  } catch (err) {
    return console.log('error fetching pokemon: ', err)
  }
}

async function fetchPokemon(pokemon) {
  try {
    let url = pokemon.url
    const response = await fetch(url)
    return await response.json()
  } catch (e) {
    throw new Error(`fetching ${pokemon.name}'s details went wrong`)
  }
}

// const baseUrl = 'https://pokeapi.com/api/v2/'

// const buildUrl = configObject => {
//   let optionsString = ''
//   if (typeof configObject === 'string') {
//     if (configObject.includes(baseUrl)) {
//       return configObject
//     }
//     return baseUrl
//   }
// }
