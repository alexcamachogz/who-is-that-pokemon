import { shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })

  test('Should be match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should be call mixedPokeArray when is mounted', () => {
    const mixedPokeArraySpy = jest.spyOn(PokemonPage.methods, 'mixedPokeArray')
    shallowMount(PokemonPage)
    expect(mixedPokeArraySpy).toHaveBeenCalled()
  })

  test('Should be match with the snapshot when pokemon load', () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokeArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
