const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650))
  return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsNames = ([pokeOptA, pokeOptB, pokeOptC, pokeOptD] = []) => {
  console.log(pokeOptA, pokeOptB, pokeOptC, pokeOptD)
}

const getPokemonOptions = () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  getPokemonsNames(mixedPokemons.splice(0, 4))
}

export default getPokemonOptions
