<template>
    <tr v-for="(election, index) in elections" :key="index">

        <AdminListElection
            :election="election"
            v-on:elections-update="$emit('reload-elections')"

        />
    </tr>
</template>

<script>
import AdminListElection from "./adminListElection";
export default {
    components: {AdminListElection},
    emits: {
        'reload-elections': null,
    },
    props: {
        elections: Object,
    },
    setup(){

    }
}
</script>
