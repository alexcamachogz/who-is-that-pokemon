import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {
  test('should be match with the snapshot', () => {
    const wrapper = shallowMount(PokemonPicture, {
      propsData: {
        pokemonId: 1,
        showPokemon: true
      }
    })
    expect(wrapper.html).toMatchSnapshot()
  })

  test('Should be show the hidden image and the pokemon number 100', () => {
    const wrapper = shallowMount(PokemonPicture, {
      propsData: {
        pokemonId: 100,
        showPokemon: false
      }
    })
    const [hiddenPokemon, pokemon] = wrapper.findAll('img')
    const expectedPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'

    expect(hiddenPokemon.exists).toBeTruthy()
    expect(hiddenPokemon.classes('hidden-pokemon')).toBeTruthy()
    expect(hiddenPokemon.attributes('src')).toBe(expectedPokemon)
    expect(pokemon).toBe(undefined)
  })

  test('Should be shot the pokemon if showPokemon is true', () => {
    const wrapper = shallowMount(PokemonPicture, {
      propsData: {
        pokemonId: 100,
        showPokemon: true
      }
    })
    const [, pokemon] = wrapper.findAll('img')
    expect(pokemon.exists()).toBeTruthy()
    expect(pokemon.classes('hidden-pokemon')).toBeFalsy()
    expect(pokemon.classes('fade-in')).toBeTruthy()
  })
})
