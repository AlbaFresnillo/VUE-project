<script setup>
const props = defineProps({
  text: String,
  fn: Function,
});

const emit = defineEmits(["response", "otroEmit", "segundoEmit"]);

function responder() {
  emit("response", "Respuesta del botón");

  props.fn("Nuevo Mensaje");
}
</script>

<template>
  <button @click="responder">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 5px;
  background-color: darkblue;
  color: white;
  border-radius: 7px;
}
</style>
