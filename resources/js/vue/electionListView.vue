<template>

    <div v-for="(election, index) in elections?.slice().reverse()" :key="index">
        <ListElection
            :election="election"
            class="item"
            v-on:election-delete="$emit('reload-elections')"
            @click="goToElection(election.id)" />
    </div>

</template>

<script>
import listItem from "./listElection";
import {useRouter} from "vue-router";
import ListElection from "./listElection";
export default {
    components: {
        ListElection,
        listItem
    },
    emits: {
        'reload-elections': null
    },
    props: {
        elections: Array,
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
.item {
    background: #93C5FD;
    border: 2px solid #2d3748;
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
}
</style>
