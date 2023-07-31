import { createApp, h, Fragment } from 'vue'
import * as VueAxe from 'vue-axe'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import '@/assets/css/tailwind.css'

let app = null

if (import.meta.env.DEV) {
  app = createApp({
    render: () => h(Fragment, [h(App), h(VueAxe.VueAxePopup)])
  })
  app.use(VueAxe.default)
} else {
  app = createApp(App)
}

// Add Store Feature
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
