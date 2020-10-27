import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixin from './mixins/mixin'

const app = createApp(App)

app.mixin(mixin).use(router).mount('#app')

