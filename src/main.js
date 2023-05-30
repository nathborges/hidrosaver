import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus, faShower, faToilet, faSink } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faShower, faToilet, faSink)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
