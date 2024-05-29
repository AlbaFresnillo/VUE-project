<script setup>
import { ref } from 'vue'
import CustomButton from './global/CustomButton.vue'
import CustomInput from './global/CustomInput.vue'

const textToSearch = ref('')

const emits = defineEmits(['getCharacters'])

const searchCharacter = async () => {
  const resCharacter = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${textToSearch.value}`
  )
  const data = await resCharacter.json()

  emits('getCharacters', data.results || [])
}
</script>

<template>
  <div>
    <CustomInput
      :initial-value="textToSearch"
      @new-value="(val) => (textToSearch = val)"
      placeholder="Bucador de Personajes"
    />

    <CustomButton text="Buscar" :action="() => searchCharacter()" />
  </div>
</template>

<style scoped></style>
