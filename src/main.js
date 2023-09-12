import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/route'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faXmark} from '@fortawesome/free-solid-svg-icons'
import {  faEyeSlash ,faEye} from '@fortawesome/free-regular-svg-icons'

library.add(faUserSecret,faXmark,faEyeSlash,faEye)

const app = createApp(App)
app.use(router);
app.mount("#app")
app.component('font-awesome-icon', FontAwesomeIcon)