<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { loginWithRedirect } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      }
    }
  }
}
</script>
<template>
  <button @click="login">Login</button>
</template>
<style scoped></style>
