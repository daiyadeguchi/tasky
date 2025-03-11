<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const todos = ref([])
const inprogresses = ref([])
const dones = ref([])

// TODO: mock only. delete when backend is connected!
todos.value.push({ title: 'laundry' }, { title: 'call mom' })
inprogresses.value.push(
  { title: 'pay tax' },
  { title: 'buy grocery' },
  { title: 'schedule ball game' },
)
dones.value.push({ title: 'make todo app' })

function moved(item) {
  if (item.removed) {
    console.log(item.removed.element.title)
  }
}
</script>

<template>
  <div class="container">
    <div class="todo">
      <p>TODO</p>
      <draggable v-model="todos" @change="moved" tag="ul" group="items">
        <template #item="{ element: todo }">
          <li class="card">{{ todo.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="inprogress">
      <p>IN PROGRESS</p>
      <draggable v-model="inprogresses" @change="moved" tag="ul" group="items">
        <template #item="{ element: inprogress }">
          <li class="card">{{ inprogress.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="done">
      <p>DONE</p>
      <draggable v-model="dones" @change="moved" tag="ul" group="items">
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
}

.container > div {
  width: 100%;
  border: 2px solid #72727265;
  margin: 2px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 5px;
  background-color: #f1f1f1;
}

ul {
  list-style-position: inside;
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  text-align: center;
}
</style>
