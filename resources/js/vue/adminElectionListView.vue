<template>
    <tr v-for="(election, index) in elections" :key="index">

<!--        <router-link :to="{ name: 'AdminCandidates', params: { electionId: election.id }}" exact>-->
        <AdminListElection
            :election="election"
            v-on:elections-update="$emit('reload-elections')"

        />
<!--        </router-link>-->
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
        elections: Array,
    },
    setup(){

    }
}
</script>
