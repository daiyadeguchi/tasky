<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

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
      <p>Todo</p>
      <draggable v-model="todos" tag="ul" group="items">
        <template #item="{ element: todo }">
          <li class="card">{{ todo.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="inprogress">
      <p>In Progress</p>
      <draggable v-model="inprogresses" tag="ul" group="items">
        <template #item="{ element: inprogress }">
          <li class="card">{{ inprogress.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="done">
      <p>Done</p>
      <draggable v-model="dones" tag="ul" group="items">
        <template #item="{ element: done }">
          <li class="card">{{ done.title }}</li>
        </template>
      </draggable>
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

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
}

li {
  list-style: none;
}

p {
  text-align: center;
}
</style>
