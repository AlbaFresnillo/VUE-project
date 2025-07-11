<script setup>
import { ref } from 'vue'

const props = defineProps({
  initialValue: {
    type: String,
    default: '',
    required: true
  },
  placeholder: {
    type: String,
    default: 'Input',
    required: true
  }
})

const valor = ref(props.initialValue)
const emit = defineEmits(['newValue'])

function enviarValor() {
  emit('newValue', valor.value)
}
</script>

<template>
  <input type="text" :placeholder="placeholder" v-model="valor" @input="enviarValor" />
</template>

<style scoped>
input {
  padding: 7px;
  border-width: thin;
  border-radius: 10px;
  font-size: 1.3rem;
}
</style>
