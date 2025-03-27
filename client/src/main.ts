import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import { createAuth0 } from '@auth0/auth0-vue'

createApp(App)
  .use(router)
  .use(createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENTID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_APP_URL + "/"
    }
  }))
  .mount('#app')
