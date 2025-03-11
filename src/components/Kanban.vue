<script setup lang="ts">
import { ref } from 'vue'

const todos = ref([])
const inprogresses = ref([])
const dones = ref([])

// TODO: mock only. delete when backend is connected!
todos.value.push({ title: 'testing' }, { title: 'another testing' })
inprogresses.value.push(
  { title: 'in progress test' },
  { title: 'it is just test' },
  { title: 'weee weee' },
)
dones.value.push({ title: 'tesjklfdsatjkla' })
</script>

<template>
  <div class="container">
    <div class="todo">
      <li v-for="todo in todos">
        {{ todo.title }}
      </li>
    </div>
    <div class="inprogress">
      <li v-for="inprogress in inprogresses">
        {{ inprogress.title }}
      </li>
    </div>
    <div class="done">
      <li v-for="done in dones">
        {{ done.title }}
      </li>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  width: 100%;
  padding: 10px;
}

.container.div {
  flex: 1;
  text-align: start;
}

li {
  list-style: none;
}
</style>
