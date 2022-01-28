import pokeApi from '../pages/api/pokemonApi'

const getPokemons = () => {
  const randoms = []
  for (let index = 0; index < 4; index++) {
    randoms.push(Math.floor(Math.random() * 649))
  }
  return randoms
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
  const mixedPokemons = getPokemons()
  const pokeNames = await getPokemonsNames(mixedPokemons.splice(0, 4))
  return pokeNames
}

export default getPokemonOptions
