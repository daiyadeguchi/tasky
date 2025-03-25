<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import draggable from 'vuedraggable'

const todos = ref<TodoItem[]>([])
const inprogresses = ref<TodoItem[]>([])
const dones = ref<TodoItem[]>([])
const newItem = ref<string>('')
const newDescription = ref<string>('')
const addItemPressed = ref<boolean>(false)

interface TodoItem {
  id?: number,
  status?: number,
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

watch(todos, async (newTodo, _) => {
  newTodo.forEach((todo) => {
    if (todo.status !== 0) {
      const newItem = { id: todo.id, status: todo.status, title: todo.title, description: todo.description }
      updateItem(newItem, 0)
    }
  })
})

watch(inprogresses, async (newInProgress, _) => {
  newInProgress.forEach((inProgress) => {
    if (inProgress.status !== 1) {
      const newInProgress = { id: inProgress.id, status: inProgress.status, title: inProgress.title, description: inProgress.description }
      updateItem(newInProgress, 1)
    }
  })
})

watch(dones, async (newDone, _) => {
  newDone.forEach((done) => {
    if (done.status !== 2) {
      const newItem = { id: done.id, status: done.status, title: done.title, description: done.description }
      updateItem(newItem, 2)
    }
  })
})

async function updateItem(newItem: TodoItem, status: number) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      status: status, title: newItem.title, description:
        newItem.description
    })
  }
  await fetch(`http://127.0.0.1:3000/api/updateTodo/${newItem.id}`, requestOptions);
}

async function submitNewItem() {
  todos.value.push({ title: newItem.value });
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newItem.value, description: newDescription.value })
  }
  await fetch('http://127.0.0.1:3000/api/todo', requestOptions);
}

function openAddItemDialog() {
  addItemPressed.value = !addItemPressed.value
}
</script>

<template>
  <div class="container">
    <div class="todo">
      <p>TODO</p>
      <draggable v-model="todos" itemKey="id" tag="ul" group="items">
        <template #item="{ element: todo }">
          <li class="card" :key="todo.id">{{ todo.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="inprogress">
      <p>IN PROGRESS</p>
      <draggable v-model="inprogresses" itemKey="id" tag="ul" group="items">
        <template #item="{ element: inprogress }">
          <li class="card" :key="inprogress.id">{{ inprogress.title }}</li>
        </template>
      </draggable>
    </div>
    <div class="done">
      <p>DONE</p>
      <draggable v-model="dones" itemKey="id" tag="ul" group="items">
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
        <input type="text" name="title" v-model="newItem" /><br />
        <label for="description">Description: </label>
        <textarea name="description" v-model="newDescription" />
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
  border-radius: 2%;
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
