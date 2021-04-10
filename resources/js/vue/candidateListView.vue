<template>
    <div v-for="(candidate, index) in candidates" :key="index">
        <ListCandidate
            :candidate="candidate"
            class="item"

        />
    </div>
</template>

<script>
import ListCandidate from "./listCandidate";

export default {
    components: {ListCandidate},
    props: {
        candidates: Array,
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
