<template>
    <tr v-for="(candidate, index) in candidates" :key="index">

        <AdminListCandidate
            :candidate="candidate"
            v-on:candidates-update="$emit('reload-candidates')"

        />
    </tr>
</template>

<script>
import AdminListCandidate from "./adminListCandidate";
export default {
    components: {AdminListCandidate},
    emits: {
        'reload-candidates': null,
    },
    props: {
        candidates: Array,
    },
}
</script>

<style scoped>

</style>
