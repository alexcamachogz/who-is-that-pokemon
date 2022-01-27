<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>¿Quién es este pokémon?</h1>
    <PokemonPicture :pokemon-id="pokemon.id" :show-pokemon="showPokemon"/>
    <PokemonOptions :pokemon-list="pokeArray"/>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  },

  data () {
    return {
      pokeArray: [],
      pokemon: null,
      showPokemon: false
    }
  },

  methods: {
    async mixedPokeArray () {
      this.pokeArray = await getPokemonOptions()

      const rdnInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokeArray[rdnInt]
    }
  },

  mounted () {
    this.mixedPokeArray()
  }
}
</script>
