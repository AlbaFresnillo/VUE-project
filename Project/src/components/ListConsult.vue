<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps({
  characters: {
    type: Array,
    default: [],
    required: true
  }
})

function showCharacter(idCharacter) {
  router.push(`/personaje/${idCharacter}`)
}
</script>

<template>
  <ul>
    <li v-for="char in characters" :key="char.id" @click="showCharacter(char.id)">
      {{ char.name }}
    </li>
  </ul>
</template>

<style scoped>
li {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  cursor: pointer;
}
</style>
