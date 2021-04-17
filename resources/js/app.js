require('./bootstrap');



import { createApp } from 'vue';
import store from './store';
import Master from "./layouts/Master";
import router from './routes';
require('./store/subscriber')

import { library } from '@fortawesome/fontawesome-svg-core'
import {faPersonBooth, faPlusSquare, faTrash, faCheck, faUser, faSignOutAlt, faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faPlusSquare, faTrash, faPersonBooth, faCheck, faUser, faSignOutAlt, faSignInAlt)

store.dispatch('attempt', localStorage.getItem('access_token')).then(() => {
    createApp({
        components: {
            Master
        }
    }).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
})
