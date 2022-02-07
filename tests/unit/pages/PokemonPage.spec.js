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

  test('Should be show PokemonPicture y PokemonOption components', () => {
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

    const PokemonPicture = wrapper.find('pokemon-picture-stub')
    const PokemonOption = wrapper.find('pokemon-options-stub')

    expect(PokemonPicture.exists()).toBeTruthy()
    expect(PokemonOption.exists()).toBeTruthy()
    expect(PokemonPicture.attributes('pokemonid')).toBe('1')
    expect(PokemonOption.attributes('pokemonlist')).toBeTruthy()
  })

  test('Check answer', async () => {
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

    await wrapper.vm.checkAnswer(1)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe(`Sí, es un ${pokemons[0].name}`)

    await wrapper.vm.checkAnswer(10)
    expect(wrapper.vm.message).toBe(`No, es un ${pokemons[0].name}`)
  })
})
