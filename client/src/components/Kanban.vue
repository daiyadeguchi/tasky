<script setup lang="ts">
import { ref, onMounted } from 'vue'
import draggable from 'vuedraggable'

const todos = ref<TodoItem[]>([])
const inprogresses = ref<TodoItem[]>([])
const dones = ref<TodoItem[]>([])
const newItem = ref<string>('')
const addItemPressed = ref<boolean>(false)

interface TodoItem {
  id?: number,
  status: number,
  title: string,
  description?: string
}

onMounted(() => {
  getTodos();
})

async function getTodos() {
  const results: TodoItem[] = await fetch('http://127.0.0.1:3000/api/todos')
    .then(response => response.json())
  results.forEach((res) => {
    const newItem = { id: res.id, status: res.status, title: res.title, description: res.description }
    switch (res.status) {
      case 0:
        todos.value.push(newItem);
        break;
      case 1:
        inprogresses.value.push(newItem);
        break;
      case 2:
        dones.value.push(newItem);
        break;
    }
  })
}

function moved(item: { removed: { element: { title: any } } }) {
  if (item.removed) {
    console.log(item.removed.element.title)
  }
}

function submitNewItem() {
  todos.value.push({ status: 0, title: newItem.value })
}

function openAddItemDialog() {
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
      <h2>Add todo item</h2>
      <form method="dialog">
        <label for="title">Title: </label>
        <input type="text" name="title" v-model="newItem" />
        <div class="add-item-dialog-buttons">
          <button @click="submitNewItem">Submit</button>
          <button @click="openAddItemDialog">Cancel</button>
        </div>
      </form>
    </dialog>
  </div>
  <div class="add-item">
    <button @click="openAddItemDialog" class="add-item-button">+</button>
  </div>
</template>

<style scoped>
.container,
.add_item {
  display: flex;
}

.container>div {
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

.add-item-button {
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

.add-item-dialog-buttons {
  position: absolute;
  bottom: 20%;
  right: 50%;
  left: 50%;
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
  border-radius: 2%;
  background-color: white;
}
</style>
