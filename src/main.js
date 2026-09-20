import { createApp } from 'vue'
import "@visuallyjs/browser-ui/css/visuallyjs.css"
import './index.css'
import App from './App.vue'

import { VisuallyJsPlugin } from "@visuallyjs/browser-ui-vue";

const app = createApp(App);
app.use(VisuallyJsPlugin);
app.mount('#app')
