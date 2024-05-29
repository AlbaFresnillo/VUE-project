<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import FormConsult from './components/FormConsult.vue'
import ListConsult from './components/ListConsult.vue'

const charactersResults = ref([])
</script>

<template>
  <RouterLink to="/">Back</RouterLink>
  <FormConsult @getCharacter="(x) => (charactersResults = x)" />
  <hr />
  <ListConsult :characters="charactersResults" />
</template>

<style scoped></style>
