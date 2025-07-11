<script setup>
import { ref, computed, onMounted } from "vue";

let id = 1;

const newAlumno = ref("");
const loading = ref(true);
const mostrarInactivos = ref(false);
const listadoAlumnos = ref([]);

const listadoAlumnosFiltrados = computed(() => {
  return mostrarInactivos.value
    ? listadoAlumnos.value
    : listadoAlumnos.value.filter((a) => a.active);
});

function agregarAlumno() {
  if (newAlumno.value == "") {
    return;
  }
  listadoAlumnos.value.push({ id: id++, name: newAlumno.value, active: true });
  newAlumno.value = "";
}

function quitarAlumno(alumno) {
  listadoAlumnos.value = listadoAlumnos.value.filter((a) => a !== alumno);
}

onMounted(() => {
  setTimeout(() => {
    listadoAlumnos.value = [
      { id: id++, name: "Alumno 1", active: true },
      { id: id++, name: "Alumno 2", active: true },
      { id: id++, name: "Alumno 3", active: true },
      { id: id++, name: "Alumno 4", active: true },
    ];
    loading.value = false;
  }, 5000);
});
</script>

<template>
  <input type="text" v-model="newAlumno" placeholder="Nuevo Alumno" />
  <button @click="agregarAlumno">Agregar Alumno</button>
  <p v-if="loading">Cargando listado de alumnos...</p>
  <ul v-if="listadoAlumnos.length > 0">
    <li v-for="alumno in listadoAlumnosFiltrados" :key="alumno.id">
      <input type="checkbox" v-model="alumno.active" />
      <span :class="{ inactive: !alumno.active }"
        >{{ alumno.id }}: {{ alumno.name }}</span
      >
      <button @click="quitarAlumno(alumno)">X</button>
    </li>
  </ul>
  <input type="checkbox" v-model="mostrarInactivos" />Ver Inactivos
  <br />
  <button @click="mostrarInactivos = !mostrarInactivos">
    Mostrar Inactivos
  </button>
</template>

<style scoped>
.inactive {
  text-decoration: line-through;
}
</style>
