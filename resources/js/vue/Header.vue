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
                        <font-awesome-icon
                            icon="user"
                        />
                        <h1 class="text-gray-600 text-2xl">{{ user.firstname }}</h1>
                        <font-awesome-icon
                            icon="sign-out-alt"
                        />
                        <HeaderLink class="text-gray-600 text-2xl" to="/logout" exact>Logout</HeaderLink>
                    </template>
                    <template v-else>
                        <font-awesome-icon
                            icon="sign-in-alt"
                        />
                        <HeaderLink class="text-gray-600 text-2xl" to="/login" exact>Login</HeaderLink>

                    </template>
                </div>
            </div>
        </div>
    </header>


</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex';
import HeaderLink from "./HeaderLink";

export default {
    components: {HeaderLink},
    setup(){
        const store = useStore();

        const authenticated = computed(() => store.getters.authenticated)

        const user = computed(() => store.getters.authUser)

        return {
            authenticated,
            user
        }
    }
}
</script>
