import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions Component', () => {
  let wrapper
  let liTags

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemonList: pokemons
      }
    })

    liTags = wrapper.findAll('li')
  })

  test('Should be match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Should be show correctly the 4 options', () => {
    expect(liTags.length).toBe(4)
    expect(liTags[0].text()).toBe('bulbasaur')
    expect(liTags[1].text()).toBe('ivysaur')
    expect(liTags[2].text()).toBe('venusaur')
    expect(liTags[3].text()).toBe('charmander')
  })

  test('Should be emit "selection" with their own params when clicked', () => {
    liTags[0].trigger('click')
    liTags[1].trigger('click')
    liTags[2].trigger('click')
    liTags[3].trigger('click')

    expect(wrapper.emitted('selectPoke').length).toBe(4)
    expect(wrapper.emitted('selectPoke')[0]).toStrictEqual([1])
    expect(wrapper.emitted('selectPoke')[1]).toStrictEqual([2])
    expect(wrapper.emitted('selectPoke')[2]).toStrictEqual([3])
    expect(wrapper.emitted('selectPoke')[3]).toStrictEqual([4])
  })
})
