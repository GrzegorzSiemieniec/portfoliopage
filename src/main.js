/* Set up using Vue 3 */
import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import DarkModeSwitch from 'vue-dark-mode-switch'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faLinkedin, faHtml5, faCss3, faNode, faVuejs, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faAngleUp, faGripLines } from '@fortawesome/free-solid-svg-icons'
import ElementPlus from 'element-plus'
import 'C:/Users/cezik/Desktop/portfolio/portfolio/node_modules/element-plus/theme-chalk/index.css'
/* add icons to the library */
library.add(faGithub, faLinkedin, faAngleUp, faGripLines, faHtml5, faCss3, faNode, faVuejs, faSquareJs)

createApp(App)
.use(ElementPlus, AOS, DarkModeSwitch)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')