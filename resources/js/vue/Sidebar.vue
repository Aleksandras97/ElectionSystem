<template>


        <div class="mt-5">
            <div class="mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
                <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none">
                    <svg class="h-5  px-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <HeaderLink to="/" exact>Home</HeaderLink>
                </button>
            </div>
            <div class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
                <button class="text-gray-600 text-sm font-semibold flex items-center  focus:outline-none">
                    <svg class="h-6  px-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                    <HeaderLink to="/elections" exact>Elections</HeaderLink>
                </button>

            </div>
            <hr class="my-2"/>
            <template v-if="authenticated" >
                <div v-if="User?.is_admin" class="mt-1  mr-50 rounded rounded-r-3xl pl-6 py-3 font-semibold">
                    <button class="text-gray-600  text-sm font-semibold flex items-center focus:outline-none">
                        <svg class="h-6  px-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/>
                        </svg>
                        <HeaderLink to="/admin" exact>Admin</HeaderLink>
                    </button>
                </div>

            </template>
        </div>
</template>

<script>
import HeaderLink from "./HeaderLink";
import {computed, onMounted, onUpdated, ref} from "vue";
import store from "../store";
import {useStore} from "vuex";

export default {
    components: {HeaderLink},
    setup(){

        const store = useStore();

        const User = computed(() => store.getters.authUser)

        const authenticated = computed(() => store.getters.authenticated)

        

        return {
            User,
            authenticated,
        }
    }
}
</script>

