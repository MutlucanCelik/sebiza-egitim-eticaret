import { createApp } from 'vue'
import '@/assets/css/main.css'
import App from '@/app/App.vue'
import router from '@/app/router'
import '@mdi/font/css/materialdesignicons.css';


createApp(App).use(router).mount('#app')
