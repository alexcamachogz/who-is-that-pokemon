<template>
  <h1>¿Quién es este pokémon?</h1>
  <PokemonPicture :pokemon-id="251" :show-pokemon="true"/>
  <PokemonOptions/>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>
