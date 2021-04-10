require('./bootstrap');



import { createApp } from 'vue';
import Master from "./layouts/Master";
import router from './routes';

import { library } from '@fortawesome/fontawesome-svg-core'
import {faPersonBooth, faPlusSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare, faTrash, faPersonBooth)

createApp({
    components: {
        Master
    }
}).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
