<template>
  <div class="options-container">
    <ul>
      <li
        v-for="{name, id} in pokemonList"
        :key="id"
        @click="decision(id)">
        {{name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemonList: {
      type: Array,
      require: true
    },
    election: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    decision (pokeId) {
      if (this.election) return
      this.$emit('selectPoke', pokeId)
    }
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    width: 300px;
  }

  li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    display: block;
    text-transform: capitalize;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .options-container {
    display: flex;
    justify-content: center;
  }
</style>
