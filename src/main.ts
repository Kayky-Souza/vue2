import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from 'vue';
import { createPinia } from "pinia";

import App from './App.vue'
import router from './router'
// createApp(App).use(router).mount('#app')

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
