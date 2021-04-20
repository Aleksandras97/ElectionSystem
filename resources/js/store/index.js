import axios from 'axios'
import { createStore } from 'vuex'
import { AuthModule } from './auth'


const state = {
    notifications: [],
}
const getters = {

}
const mutations = {
    PUSH_NOTIFICATION(state, notification) {
        state.notifications.push(notification)

    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
        state.notifications = state.notifications.filter(notification => {
            return notification.id !== notificationToRemove.id;
        })
    }
}

const actions = {
    async addNotification ({ commit, dispatch }, notification) {
        commit('PUSH_NOTIFICATION', notification);
        await new Promise(
            (resolve, reject) => setTimeout(() => resolve(), 4000));
        dispatch('removeNotification', notification);
    },
    removeNotification ({ commit }, notification) {
        commit('REMOVE_NOTIFICATION', notification);
    },




}

const modules = {
    Auth: AuthModule
}

export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules
})
