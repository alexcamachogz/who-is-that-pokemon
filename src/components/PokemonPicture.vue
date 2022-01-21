<template>
  <div class="pokemon-container">
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
    class="hidden-pokemon"
    alt="pokemon">
  <!-- <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
    class="fade-in"
    alt="pokemon"> -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .pokemon-container {
    height: 200px;
  }
  img {
    height: 200px;
    position: absolute;
    right: calc(50% - 103px);
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
  }
  .hidden-pokemon {
    filter: grayscale(100%) brightness(0);
  }
</style>
