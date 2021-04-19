<template>

    <div v-for="(election, index) in elections" :key="index">

        <router-link :to="{ name: 'Candidates', params: { electionId: election.id }}" exact>
            <ListElection
                :election="election"
                v-on:election-delete="$emit('reload-elections')"
                @click="goToElection(election.id)" />
        </router-link>
    </div>

</template>

<script>
import {useRouter} from "vue-router";
import ListElection from "./listElection";
export default {
    components: {
        ListElection
    },
    emits: {
        'reload-elections': null
    },
    props: {
        elections: Object,
    },
    setup(){
        const router = useRouter();
        const goToElection = (id) => {
            router.push({ path: `/elections/${id}/candidates`})
        }
        return {
            goToElection
        }
    }
}
</script>

<style scoped>

</style>
