<template>
    <div class="md:pt-8 pb-6 px-2 md:px-0 bg-white">
        <div class="gb-white max-w-lg mx-auto">
            <h1 class="text-4xl font-bold text-black text-center">{{ t("login.login2") }}</h1>
        </div>

        <div class="gb-white max-w-lg mx-auto p-8 md:p-8 my-5">
            <section>
                <h3 class="font-bold text-2xl">{{ t("header.name") }}</h3>
                <p class="text-gray-700 pt-2">{{ t("login.login1") }}</p>

            </section>

            <section class="mt-10">
                <form action="" @submit.prevent="login" class="flex flex-col">

                    <div v-if="state.serverErrors" class="mb-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.serverErrors }}</div>

                    <div v-if="state.errors && state.errors.firstname " class="mb-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.firstname[0] }}</div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="username">{{ t("login.firstname") }}</label>
                        <input type="text" name="username"  id="username" class="login-input" v-model="state.username">
                    </div>
                    <div v-if="state.errors && state.errors.password " class="mb-2 text-sm py-2 px-3 bg-pink-200 text-red-700 rounded">{{ state.errors.password[0] }}</div>
                    <div class="mb-6 pt-3 rounded bg-gray-200">
                        <label class="block text-gray-700 text-sm font-bold mb-2 ml-3" for="password">{{ t("login.password") }}</label>
                        <input type="password" name="password" id="password" class="login-input" v-model="state.password">
                    </div>
                    <div class="flex justify-end">
                        <a href="#" class=" text-sm text-purple-600 hover:underline mb-6">{{ t("login.forgot") }}</a>
                    </div>
                    <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200">
                        {{ t("login.login2") }}
                        <font-awesome-icon v-if="state.loading" class="animate-spin" icon="spinner" />
                    </button>
                </form>
            </section>


        </div>
    </div>
</template>

<script>
import {reactive} from "vue";
import { useStore } from 'vuex';
import {useRouter} from "vue-router";
import { Notification } from '../composables/Notify.js';
import { useI18n } from 'vue-i18n'

export default {


    setup(){
        const router = useRouter();
        const store = useStore();

        let { SendNotification } = Notification();

        const { t } = useI18n()

        const state = reactive({
            username: '',
            password: '',
            serverErrors: '',
            errors: {},
            loading: false,
        });

        async function login() {
            state.errors = {}
            state.loading = true
            store.dispatch('login', {
                username: state.username,
                password: state.password,
            })
            .then(() => {
                router.push({ name: 'Home'})
                SendNotification('green', "Yout have successfully loged in!")
            })
            .catch(error => {
                if (error.response.status === 401) {
                    state.serverErrors = error.response.data.error
                }
                if (error.response.status === 422) {
                    state.errors = error.response.data.errors
                }
                state.password = ''
            })
            .finally(() => state.loading = false)


        }

        return {
            state,
            login,
            t
        }
    }
}
</script>
