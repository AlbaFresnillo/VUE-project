<script setup>
defineProps({
  text: {
    type: String,
    default: 'Click Here',
    required: true
  },
  action: {
    type: Function,
    default: () => {},
    required: true
  }
})
</script>

<template>
  <button @click="action">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  text-transform: uppercase;
  padding: 7px;
  border-width: thin;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(183, 216, 216);
  }
}
</style>
