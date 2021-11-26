// import './utils/debug.js';
import { createApp } from 'vue';
import Router from './router';
import App from './App.vue';
import './styles/index.css';

const app = createApp(App);

app.use(Router);
app.mount('#app');
