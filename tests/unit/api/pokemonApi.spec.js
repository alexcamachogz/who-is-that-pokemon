import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {
  test('Axios should be configure with pokemon API', () => {
    expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  })
})
