<template>
    <h1>{{ User.is_admin }}</h1>
</template>

<script>
import store from '../store';
import {ref} from "vue";
export default {

    setup(){

        const User = ref(store.getters.authUser)


        return {
            User
        }
    }
}
</script>
