<script setup>
import BotonEmit from "./BotonEmit.vue";

import { onMounted, ref, watch } from "vue";

const props = defineProps({
  tareaInicial: Number,
  textBtn: String,
});

const tareaIdSelected = ref(0);
const tareaInfo = ref(null);

async function getTareaInfo() {
  tareaInfo.value = null;
  if (tareaIdSelected.value != 0) {
    const resTarea = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${tareaIdSelected.value}`
    );
    tareaInfo.value = await resTarea.json();
  }
}

watch(tareaIdSelected, getTareaInfo);

onMounted(() => {
  tareaIdSelected.value = props.tareaInicial || 0;
});
</script>

<template>
  <BotonEmit :text="textBtn" />
  <h1>{{ tareaInicial }}</h1>
  <button @click="tareaIdSelected = 1">Tarea 1</button>
  <button @click="tareaIdSelected = 2">Tarea 2</button>
  <button @click="tareaIdSelected = 3">Tarea 3</button>
  <button @click="tareaIdSelected = 4">Tarea 4</button>
  <button @click="tareaIdSelected = 0">Reset</button>
  <p>
    {{ tareaInfo }}
  </p>
</template>

<style scoped></style>
