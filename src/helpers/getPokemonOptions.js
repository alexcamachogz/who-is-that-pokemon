import pokeApi from '../pages/api/pokemonApi'

const getPokemons = () => {
  const pokeArray = Array.from(Array(650))
  return pokeArray.map((_, index) => index + 1)
}

const getPokemonsNames = async ([pokeOptA, pokeOptB, pokeOptC, pokeOptD] = []) => {
  const promisePokeArray = [
    pokeApi.get(`/${pokeOptA}`),
    pokeApi.get(`/${pokeOptB}`),
    pokeApi.get(`/${pokeOptC}`),
    pokeApi.get(`/${pokeOptD}`)
  ]

  const response = await Promise.all(promisePokeArray)

  return response.map(poke => {
    return {
      name: poke.data.name,
      id: poke.data.id
    }
  })
}

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokeNames = await getPokemonsNames(mixedPokemons.splice(0, 4))
  return pokeNames
}

export default getPokemonOptions
