<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else class="game-container">
    <h1>¿Quién es este pokémon?</h1>

    <div class="game">
      <PokemonPicture
        :pokemon-id="pokemon.id"
        :show-pokemon="showPokemon" />
      <PokemonOptions
        :pokemon-list="pokeArray"
        :election="election"
        @select-poke="checkAnswer" />
      <h3>Puntaje: {{ score }}</h3>
    </div>

    <template v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>
      <button
        v-if="score > 0"
        class="btn btn__new-round"
        @click="nextPokemon">
        Siguiente ronda
      </button>
      <template v-else>
        <p>Perdiste, tu puntaje fue de <span>{{ finalScore }}.</span></p>
        <button
          class="btn btn__new-game"
          @click="nextPokemon">
          Nuevo juego
        </button>
      </template>
    </template>
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
      showPokemon: false,
      showAnswer: false,
      message: '',
      election: false,
      score: 0,
      finalScore: 0
    }
  },

  methods: {
    async mixedPokeArray () {
      this.pokeArray = await getPokemonOptions()

      const rdnInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokeArray[rdnInt]
    },
    checkAnswer (pokeId) {
      const pokemonName = (this.pokemon.name).charAt(0).toUpperCase() + (this.pokemon.name).slice(1)
      this.showPokemon = true
      this.showAnswer = true
      this.election = true

      if (pokeId === this.pokemon.id) {
        this.message = `Sí, es un ${pokemonName}`
        this.score++
      } else {
        this.message = `No, es un ${pokemonName}`
        this.finalScore = this.score
        this.score = 0
      }
    },
    nextPokemon () {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemon = null
      this.election = false
      this.mixedPokeArray()
    }
  },

  mounted () {
    this.mixedPokeArray()
  }
}
</script>

<style scoped>
  h3 {
    margin: 0;
    padding: 0;
  }

  span {
    font-weight: bold;
  }
  .btn {
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    font-size: 16px;
  }

  .btn__new-game {
    background-color: rgb(209, 179, 9);
    border: 1px solid rgba(209, 179, 9, 0.2);
  }
  .btn__new-game:hover {
    background-color: rgba(209, 179, 9, 0.5);
  }

  .btn__new-round {
    background-color: rgb(9, 209, 166);
    border: 1px solid rgba(9, 209, 166, 0.2);
  }
  .btn__new-round:hover {
    background-color: rgba(9, 209, 166, 0.5);
  }

  .game-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>
