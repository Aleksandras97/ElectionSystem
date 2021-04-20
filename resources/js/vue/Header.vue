<template>
    <header class="bg-white shadow-sm w-full fixed z-10  top-0">
        <div class="max-auto px-8 py-2 bg-white">
            <div class="flex justify-between">
                <div class="logo flex items-center space-x-4 mr-10">
                    <font-awesome-icon class="h-8 text-blue-400" icon="person-booth"/>
                    <h1 class="text-gray-600 text-2xl">Election System</h1>
                </div>
                <div class="menu flex justify-end items-center flex-1 space-x-4">
                    <template v-if="authenticated">
                        <span v-if="User?.is_admin" class="bg-red-200 text-red-600 py-2 px-5 rounded-full text-2xl font-bold">Admin</span>
                        <font-awesome-icon
                            icon="user"
                        />
                        <h1 class="text-gray-600 text-2xl">{{ User?.firstname }}</h1>
                        <font-awesome-icon
                            icon="sign-out-alt"
                        />
                        <HeaderLink class="text-white font-bold py-1 px-4 ml-3 border-b-4 rounded bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500" to="/logout" exact>Logout</HeaderLink>
                    </template>
                    <template v-else>
                        <font-awesome-icon
                            icon="sign-in-alt"
                        />
                        <HeaderLink class="text-white font-bold py-1 px-4 ml-3 border-b-4 rounded bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500" to="/login" exact>Login</HeaderLink>

                    </template>
                </div>
            </div>
        </div>
    </header>


</template>

<script>
import {computed, ref} from 'vue'
import { useStore } from 'vuex';
import HeaderLink from "./HeaderLink";
import store from "../store";

export default {
    components: {HeaderLink},
    setup(){
        const store = useStore();

        const authenticated = computed(() => store.getters.authenticated)

        const User = computed(() => store.getters.authUser)

        return {
            authenticated,
            User
        }
    }
}
</script>
