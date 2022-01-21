<template>
  <h1>¿Quién es este pokémon?</h1>
  <pokemon-picture/>
  <pokemon-options/>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'

export default {
  components: {
    PokemonOptions,
    PokemonPicture
  }
}
</script>
