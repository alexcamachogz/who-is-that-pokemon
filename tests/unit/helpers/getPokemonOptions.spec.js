import getPokemonOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
  test('Should be return an Array of 4 random numbers', () => {
    expect(Array.isArray(getPokemons())).toBeTruthy()
    expect(getPokemons().length).toBe(4)
  })

  test('Should be return an array with four pokemon names', async () => {
    const pokemons = await getPokemonsNames([1, 2, 3, 4])
    const pokemonsBase = [
      { name: 'bulbasaur', id: 1 },
      { name: 'ivysaur', id: 2 },
      { name: 'venusaur', id: 3 },
      { name: 'charmander', id: 4 }
    ]

    expect(pokemons).toStrictEqual(pokemonsBase)
  })

  test('getPokemonOptions should be return a mixed array', async () => {
    const mixedPokemons = await getPokemonOptions()
    const jsonBase = [
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) }
    ]

    expect(mixedPokemons.length).toBe(4)
    expect(mixedPokemons).toStrictEqual(jsonBase)
  })
})
