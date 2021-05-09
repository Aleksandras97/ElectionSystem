require('./bootstrap');



import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import store from './store';
import Master from "./layouts/Master";
import router from './routes';
import i18n from './i18n';
require('./store/subscriber')

import { library } from '@fortawesome/fontawesome-svg-core'
import {faPersonBooth, faPlusSquare, faTrash, faCheck, faUser, faSignOutAlt, faSignInAlt, faSpinner, faHome, faUsers, faUsersCog, faVoteYea, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'


library.add(faPlusSquare, faTrash, faPersonBooth, faCheck, faUser, faSignOutAlt, faSignInAlt, faSpinner, faHome, faUsers, faUsersCog, faVoteYea, faChevronDown)

router.beforeEach( async (to, from , next) => {

    let language = to.params.lang;

    if(!language) {
        language = 'en'
    }

    i18n.global.locale = language
    next();
})



store.dispatch('attempt', localStorage.getItem('access_token')).then(() => {
    createApp({
        components: {
            Master
        }
    }).use(router).use(i18n).use(store).use(VueChartkick).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
})
