<template>
    <header class="bg-white shadow-sm w-full fixed z-10  top-0">
        <div class="max-auto px-8 py-2 bg-white">
            <div class="flex justify-between">
                <div class="logo flex items-center space-x-4 mr-10">
                    <font-awesome-icon class="h-8 text-blue-400" icon="person-booth"/>
                    <h1 class="text-gray-600 text-2xl">{{ t('header.name') }}</h1>

                    <template v-if="authenticated" >
                        <HeaderLink class="font-bold text-xl" to="" exact>
                            <font-awesome-icon icon="home"/> {{ t('header.home') }}
                        </HeaderLink>
                        <HeaderLink class="font-bold text-xl" to="elections" exact>
                            <font-awesome-icon icon="users"/>  {{ t('header.elections') }}

                        </HeaderLink>
                        <div v-if="User?.is_admin">
                            <h1 class="text-red-600 font-bold text-xl p-2 border-l border-red-600">{{ t('header.admin') }}</h1>

                        </div>
                        <div v-if="User?.is_admin">

                            <HeaderLink class="font-bold text-xl" to="admin/elections" exact>
                            <font-awesome-icon icon="vote-yea"/>  {{ t('header.elections') }}
                            </HeaderLink>
                        </div>
                        <div v-if="User?.is_admin">
                            <HeaderLink class="font-bold text-xl" to="admin/candidates" exact>
                                <font-awesome-icon icon="users-cog"/> {{ t('header.candidates') }}
                            </HeaderLink>
                        </div>

                    </template>

                </div>
                <div class="menu flex justify-end items-center flex-1 space-x-4">

                    <template v-if="authenticated">
                        <span v-if="User?.is_admin" class="bg-red-200 text-red-600 py-2 px-5 rounded-full text-2xl font-bold">{{ t('header.admin') }}</span>
                        <font-awesome-icon
                            icon="user"
                        />
                        <h1 class="text-gray-600 text-2xl">{{ User?.firstname }}</h1>
                    </template>
                    <LanguageSwitcher />
                    <template v-if="authenticated">
                        <HeaderLink class="text-white font-bold py-1 px-4 ml-3 border-b-4 rounded bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500" to="logout" exact>
                          <font-awesome-icon icon="sign-out-alt" />  {{ t('header.logout') }}
                        </HeaderLink>
                    </template>

                    <template v-else>

                        <HeaderLink class="text-white font-bold py-1 px-4 ml-3 border-b-4 rounded bg-gray-500 hover:bg-gray-400 border-gray-700 hover:border-gray-500" to="login" exact>
                           <font-awesome-icon icon="sign-in-alt" /> {{ t('header.login') }}
                        </HeaderLink>

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
import LanguageSwitcher from "./LanguageSwitcher";
import store from "../store";
import { useI18n } from 'vue-i18n'

export default {
    components: {HeaderLink,LanguageSwitcher},
    setup(){

        const { t } = useI18n()

        const store = useStore();

        const authenticated = computed(() => store.getters.authenticated)

        const User = computed(() => store.getters.authUser)

        return {
            authenticated,
            User,
            t
        }
    }
}
</script>
