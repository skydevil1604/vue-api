import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Search from './components/search'
import Result from './components/result'
import VueFinalModal from 'vue-final-modal'
import Footer from './components/footer' 

const app = createApp(App)
app.use(store)
app.use(VueFinalModal(), { 
    componentName: 'VueFinalModal',
    key: '$vfm',    
    dynamicContainerName: 'ModalContainer'
})
app.component('Search', Search)
app.component('Result', Result)
app.component('Footer', Footer)
app.use(VueAxios, axios)
app.mount('#app')
