import axios from 'axios'


const state = {
    token: null,
    user: null,
}
const getters = {
    authenticated(state) {
        return state.token  != null
    },
    authUser(state) {
        return state.user
    },
}
const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USER(state, data) {
        state.user = data
    },
}

const actions = {
    async login ({ dispatch }, credentials) {
        let response = await axios.post('api/login', {
            firstname: credentials.username,
            password: credentials.password,
        })
        return dispatch('attempt', response.data.access_token)
    },

    async attempt ({ commit, state, dispatch }, token) {
        if(token) {
            commit('SET_TOKEN', token)
        }

        if(!state.token){
            return
        }

        try {
            let response = await axios.get('/api/loginUser')

            commit('SET_USER', response.data)

        } catch (error) {
            console.log('failed', error)
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    },

    async logout({ commit }){

        return await axios.post('api/logout').then(() =>  {

            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        })
    }


}

export const AuthModule = ({
    state,
    getters,
    mutations,
    actions
})
