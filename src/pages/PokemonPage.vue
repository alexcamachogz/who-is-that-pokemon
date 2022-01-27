<template>
  <h1>¿Quién es este pokémon?</h1>
  <PokemonPicture :pokemon-id="251" :show-pokemon="true"/>
  <PokemonOptions :pokemons="pokeArray"/>
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
      pokeArray: []
    }
  },

  methods: {
    async mixedPokeArray () {
      this.pokeArray = await getPokemonOptions()
    }
  },

  mounted () {
    this.mixedPokeArray()
  }
}
</script>
