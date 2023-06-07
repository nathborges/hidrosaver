import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPlus, faShower, faToilet, faSink, faBottleWater } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faShower, faToilet, faSink, faBottleWater)

import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

createApp(App)
.use(PrimeVue)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')