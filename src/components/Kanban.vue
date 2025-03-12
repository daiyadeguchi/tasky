<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const todos = ref([])
const inprogresses = ref([])
const dones = ref([])
const addItemPressed = ref(false)

// TODO: mock only. delete when backend is connected!
todos.value.push({ id: 0, title: 'laundry' }, { id: 1, title: 'call mom' })
inprogresses.value.push(
  { id: 2, title: 'pay tax' },
  { id: 3, title: 'buy grocery' },
  { id: 4, title: 'schedule ball game' },
)
dones.value.push({ id: 5, title: 'make todo app' })

function moved(item) {
  if (item.removed) {
    console.log(item.removed.element.title)
  }
}

function addItem() {
  addItemPressed.value = !addItemPressed.value
}
</script>

<template>
  <div class="container">
    <div class="todo">
      <p>TODO</p>
      <draggable v-model="todos" @change="moved" itemKey="id" tag="ul" group="items">
        <template #item="{ element: todo }">
          <li class="card" :key="todo.id">{{ todo.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="inprogress">
      <p>IN PROGRESS</p>
      <draggable v-model="inprogresses" @change="moved" itemKey="id" tag="ul" group="items">
        <template #item="{ element: inprogress }">
          <li class="card" :key="inprogress.id">{{ inprogress.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="done">
      <p>DONE</p>
      <draggable v-model="dones" @change="moved" itemKey="id" tag="ul" group="items">
        <template #item="{ element: done }">
          <li class="card" :key="done.id">{{ done.title }}</li>
        </template>
      </draggable>
    </div>
  </div>
  <div class="add-item-dialog">
    <dialog v-if="addItemPressed" open>
      <h2>Add todo item:</h2>
      <form method="dialog">
        <label for="title">Title: </label>
        <input type="text" name="title" />
        <button>Submit</button>
        <button @click="addItem">Cancel</button>
      </form>
    </dialog>
  </div>
  <div class="add-item">
    <button @click="addItem" class="add_item_button">+</button>
  </div>
</template>

<style scoped>
.container,
.add_item {
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

.add_item_button {
  height: 70px;
  width: 70px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 20px;
  background-color: rgb(167, 248, 248);
  border-radius: 50%;
  font-size: 40px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

p {
  text-align: center;
}

dialog {
  height: 70%;
  width: 50%;
  position: absolute;
  top: 50%;
  right: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
