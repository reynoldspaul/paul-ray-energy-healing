//import './assets/main.css'

//import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// gh-pages workaround for loading page
const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
  sessionStorage.removeItem('redirectPath');
  // Wait until router is ready, then redirect
  router.isReady().then(() => {
    router.replace(redirectPath);
  });
}

app.use(createPinia())
app.use(router)

app.mount('#app')


