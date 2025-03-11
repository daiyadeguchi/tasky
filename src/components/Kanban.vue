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
      <draggable v-model="todos" tag="ul" group="items">
        <template #item="{ element: todo }">
          <li>{{ todo.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="inprogress">
      <draggable v-model="inprogresses" tag="ul" group="items">
        <template #item="{ element: inprogress }">
          <li>{{ inprogress.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="done">
      <draggable v-model="dones" tag="ul" group="items">
        <template #item="{ element: done }">
          <li>{{ done.title }}</li>
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

li {
  list-style: none;
}
</style>
